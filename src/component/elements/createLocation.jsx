import React from 'react'

const CreateLocation = ({ address, title, text }) => {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section className="create-location">
      <div className="location-wrapper">
        
        {/* MAP */}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="map-container"
        >
          <iframe
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </a>

        {/* TEXT */}
        <div className="location-text">
          <h2>{title}</h2>
          <p>{text}</p>
          <span className="address">{address}</span>
        </div>

      </div>
    </section>
  )
}

export default CreateLocation
