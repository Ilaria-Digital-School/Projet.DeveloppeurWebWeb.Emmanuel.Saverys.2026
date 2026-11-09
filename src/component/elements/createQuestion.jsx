import React, { useState, useEffect } from "react";

const CreateQuestion = ({ question, answer, defaultOpen = false, id }) => {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (open && id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [open, id]);

  return (
    <div id={id} className={`question-card ${open ? "open" : ""}`}>
      <button
        className="question-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="icon">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="question-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default CreateQuestion;
