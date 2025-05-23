import React, { useEffect, useState } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('./assets/formulaire.json')
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error("Erreur de chargement JSON :", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contactez-moi</h2>
      <form className="contact-form mx-auto" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        {formData.map((champ, index) => {
          const isTextarea = champ.type === "textarea";
          const isSubmit = champ.type === "submit";

          return (
            <div className="mb-3" key={index}>
              {champ.label && champ.type !== "submit" && (
                <label htmlFor={champ.name} className="form-label">
                  {champ.label}
                </label>
              )}

              {isTextarea ? (
                <textarea
                  className="form-control"
                  id={champ.name}
                  name={champ.name}
                  placeholder={champ.placeholder}
                  required={champ.required}
                />
              ) : isSubmit ? (
                <button type="submit" className="btn btn-primary">
                  {champ.label || "Envoyer"}
                </button>
              ) : (
                <input
                  type={champ.type}
                  className="form-control"
                  id={champ.name}
                  name={champ.name}
                  placeholder={champ.placeholder}
                  required={champ.required}
                />
              )}
            </div>
          );
        })}

        {submitted && (
          <div className="alert alert-success mt-3" role="alert">
            Merci pour votre message !
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;