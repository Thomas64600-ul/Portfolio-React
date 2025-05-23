import React, { useEffect, useState } from 'react';
import './Experience.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const recupererJson = async () => {
      try {
        const response = await fetch('./assets/experience.json');
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    recupererJson();
  }, []);

  return (
    <section id="parcours" className="experience-section container py-5">
      <h2 className="experience-title text-center mb-5">Mon expérience</h2>
      <div className="row g-4">
        {experiences.map((e, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm experience-card">
              <div className="card-body">
                <h3 className="card-title">{e.titre}</h3>
                <h5 className="card-subtitle mb-2 text-muted">{e.organisation}</h5>
                <p className="card-text"><strong>{e.date}</strong></p>
                <p className="card-text">{e.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
