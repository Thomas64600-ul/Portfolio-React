import React, { useEffect, useState } from 'react';
import './Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Competences() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch('./assets/skills.json')
      .then((res) => res.json())
      .then((data) => setSkillsData(data))
      .catch((err) => console.error('Erreur lors de la récupération des données :', err));
  }, []);

  return (
    <section id="competences" className="competences container py-5">
      <h2 className="text-center mb-4">Compétences</h2>
      <div className="row">
        {skillsData.map((categorie, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="categorie border rounded p-3 shadow-sm h-100">
             <h3 className="text-primary mb-3 text-center">{categorie.category}</h3>
              <div className="row row-cols-2 g-3">
                {categorie.skills.map((skill, i) => (
                  <div key={i} className="col d-flex flex-column align-items-center skill">
                    <img src={skill.logo} alt={skill.name} className="mb-2 skill-logo" />
                    <p className="text-center mb-0">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}