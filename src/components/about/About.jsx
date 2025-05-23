import 'bootstrap/dist/css/bootstrap.min.css';

export default function Apropos() {
  return (
  <section className="bg-white text-dark text-center p-4 rounded shadow my-4 container">

      <h2 className="fs-2 mb-4">À propos de moi</h2>
      
      <img
        src={`${import.meta.env.BASE_URL}image/avatar.png`}
        alt="Photo de moi"
        className="rounded-circle border border-white p-2 shadow mb-4 mx-auto d-block"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      
      <p className="fs-5 mx-auto" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
        Je m'appelle Thomas, développeur web full stack junior, passionné par le code, le design et les projets concrets.
        Je suis curieux, motivé, et j'aime apprendre en créant. Ce portfolio regroupe mes projets réalisés en HTML, CSS
        et JavaScript, ainsi que mes compétences techniques. Je suis toujours à la recherche de nouveaux défis et
        d'opportunités pour développer mes compétences et contribuer à des projets passionnants.
      </p>
    </section>
  );
}