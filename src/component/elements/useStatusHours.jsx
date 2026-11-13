// hooks/useStatusHours.js
import { useEffect, useState } from "react";

// 📅 Horaires normaux
const schedule = {
  0: null,

  1: [{ open: "17:00", close: "19:00" }],

  2: [
    { open: "09:00", close: "12:00" },
    { open: "14:00", close: "18:00" },
  ],

  3: [{ open: "09:00", close: "14:00" }],

  4: [
    { open: "09:00", close: "12:00" },
    { open: "14:00", close: "18:00" },
  ],

  5: [
    { open: "09:00", close: "12:00" },
    { open: "14:00", close: "18:00" },
  ],

  6: [
    { open: "09:00", close: "12:00" },
    { open: "14:00", close: "18:00" },
  ],
};

// ⚠️ Exceptions + réouverture 
const exceptions = [
{
  //Vacances
  start: "2026-07-25",
  end: "2026-07-30", // dernier jour fermé
  closed: true,
  reason: "exceptionnellement",
  reopen: {
    date: "2026-07-31",
    time: "09:00",
  },
},
// {
//   // 🌴 Vacances d'été 2026
//   start: "2026-07-25",
//   end: "2026-07-30", // dernier jour fermé
//   closed: true,
//   reason: "Vacances",
//   reopen: {
//     date: "2026-07-31",
//     time: "09:00",
//   },
// },

{
  date: "2026-04-22",
  closed: false,
  override: [
    { open: "09:00", close: "12:00" },
    { open: "14:00", close: "15:00" },
  ],
  reason: "Horaires modifiés", // afficher que les horaires qui sont exeptionnellement modifiés
},

{
  // ❄️ fermeture exceptionnelle (neige, maladie, tempête…)
  date: "2026-04-22",
  closed: true,
  reason: "exceptionnellement (intempéries)",
},
 // 🇫🇷 JOURS FÉRIÉS 2026 (fermeture automatique)

  {
    date: "2026-01-01",
    closed: true,
    reason: "Jour férié (Nouvel An)",
  },

  {
    date: "2026-04-06",
    closed: true,
    reason: "Jour férié (Lundi de Pâques)",
  },

  {
    date: "2026-05-01",
    closed: true,
    reason: "Jour férié (Fête du travail)",
  },

  {
    date: "2026-05-08",
    closed: true,
    reason: "Jour férié (Victoire 1945)",
  },

  {
    date: "2026-05-14",
    closed: true,
    reason: "Jour férié (Ascension)",
  },

  {
    date: "2026-05-25",
    closed: true,
    reason: "Jour férié (Lundi de Pentecôte)",
  },

  {
    date: "2026-07-14",
    closed: true,
    reason: "Jour férié (Fête nationale)",
  },

  {
    date: "2026-08-15",
    closed: true,
    reason: "Jour férié (Assomption)",
  },

  {
    date: "2026-11-01",
    closed: true,
    reason: "Jour férié (Toussaint)",
  },

  {
    date: "2026-11-11",
    closed: true,
    reason: "Jour férié (Armistice)",
  },

  {
    date: "2026-12-25",
    closed: true,
    reason: "Jour férié (Noël)",
  },
];

// 🔧 Convertit HH:mm → minutes
const timeToMinutes = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

// 🔧 Heure FR fiable
const getNowInFrance = () => {
  const now = new Date();
  return new Date(
    // Convertit la date en texte avec le format américain (mois/jour/année)
// et utilise le fuseau horaire de Paris pour afficher l'heure locale.
    now.toLocaleString("en-US", { timeZone: "Europe/Paris" })
  );
};

// 🔧 Format YYYY-MM-DD
const formatKeyDate = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

// 🔧 Format heure
const formatTime = (time) => time.replace(":", "h");

// 🔧 Format date lisible
const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

// 🔍 récupère exception du jour (clé ou plage)
const getException = (key) => {
  return exceptions.find((ex) => {
    if (ex.date) return ex.date === key;
    if (ex.start && ex.end) return key >= ex.start && key <= ex.end;
    return false;
  });
};

// 🔍 prochain jour ouvert (adapté)
const getNextOpeningDay = (date) => {
  for (let i = 1; i <= 7; i++) {
    const next = new Date(date);
    next.setDate(date.getDate() + i);

    const key = formatKeyDate(next);
    const day = next.getDay();
    const exception = getException(key);

    if (!exception?.closed && schedule[day]) {
      const slots = exception?.override || schedule[day];
      const firstSlot = slots[0];

      return {
        dayName: next.toLocaleDateString("fr-FR", { weekday: "long" }),
        time: firstSlot.open,
      };
    }
  }
  return null;
};

export const useStatusHours = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateStatus = () => {
      const now = getNowInFrance();
      const todayKey = formatKeyDate(now);
      const day = now.getDay();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const exception = getException(todayKey);
      const todaySchedule = exception?.override || schedule[day];

      // 🔴 fermeture totale + réouverture
      if (exception?.closed) {
        if (exception.reopen) {
          setStatus(
            `Fermé - ${exception.reason}, réouverture ${formatDate(
              exception.reopen.date
            )} à ${formatTime(exception.reopen.time)}`
          );
        } else {
          setStatus(`Fermé - ${exception.reason}`);
        }
        return;
      }

      // 🔴 fermé toute la journée
      if (!todaySchedule) {
        const next = getNextOpeningDay(now);
        setStatus(
          `Fermé - ouvre ${next.dayName} à ${formatTime(next.time)}`
        );
        return;
      }

      // 🟢 ouvert
      const currentSlot = todaySchedule.find(
        (slot) =>
          currentMinutes >= timeToMinutes(slot.open) &&
          currentMinutes <= timeToMinutes(slot.close)
      );

      if (currentSlot) {
        if (exception?.reason && exception?.override) {
          setStatus(
            `Ouvert jusqu'à ${formatTime(currentSlot.close)} (${exception.reason})`
          );
        } else {
          setStatus(`Ouvert jusqu'à ${formatTime(currentSlot.close)}`);
        }
        return;
      }

      // 🟡 prochain créneau aujourd'hui
      const nextSlot = todaySchedule.find(
        (slot) => currentMinutes < timeToMinutes(slot.open)
      );

      if (nextSlot) {
        if (exception?.reason && exception?.override) {
          setStatus(
            `Fermé - ouvre à ${formatTime(nextSlot.open)} (${exception.reason})`
          );
        } else {
          setStatus(`Fermé - ouvre à ${formatTime(nextSlot.open)}`);
        }
        return;
      }

      // 🔴 prochain jour
      const next = getNextOpeningDay(now);
      setStatus(
        `Fermé - ouvre ${next.dayName} à ${formatTime(next.time)}`
      );
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return status;
};

// 🔥 COMPOSANT
const UseStatusHours = () => {
  const status = useStatusHours();
  const isOpen = status.includes("Ouvert");

  return (
    <div className={`status-bar ${isOpen ? "open" : "closed"}`}>
      {status}
    </div>
  );
};

export default UseStatusHours;