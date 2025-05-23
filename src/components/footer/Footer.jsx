import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 mt-auto">
      <p className="mb-2">Suivez-moi sur :</p>
      <div className="d-flex justify-content-center mb-3">
        <a
          href="https://github.com/Thomas64600-ul"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src="/image/github.png"
            alt="GitHub"
            style={{ width: '32px', height: '32px' }}
          />
        </a>
      </div>
      <p className="mb-0">© 2025 Mon Portfolio. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;