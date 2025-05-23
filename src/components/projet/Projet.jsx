import React, { useEffect, useState } from 'react';
import './Projet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Projet() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetch('./assets/data.json')
      .then((res) => res.json())
      .then((data) => setProjets(data))
      .catch((err) => console.error('Erreur lors de la récupération des données :', err));
  }, []);

  return (
    <section id="projet" className="projet container py-5">
      <h2 className="projet-titre text-center mb-5">Mes projets</h2>
      <div className="row g-4">
        {projets.map((e, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow projet-card">
              <a href={e.lienGitHUb} target="_blank" rel="noopener noreferrer">
                <img src={e.image} className="card-img-top" alt={e.titre} />
              </a>
              <div className="card-body">
                <h3 className="card-title">{e.titre}</h3>
                <p className="card-text">{e.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}