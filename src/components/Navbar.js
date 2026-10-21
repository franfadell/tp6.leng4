import { useState, useEffect } from "react";
import "./Navbar.css";

const LINKS = [
  { id: "inicio", texto: "Inicio" },
  { id: "acerca", texto: "Acerca de" },
  { id: "contacto", texto: "Contacto" },
  { id: "proyecto", texto: "Proyecto" },
];

function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState("inicio");

  // Marcar el link de la sección que se está viendo
  useEffect(() => {
    function marcarActivo() {
      let actual = LINKS[0].id;
      const posicion = window.scrollY + 120;

      LINKS.forEach((link) => {
        const seccion = document.getElementById(link.id);
        if (seccion && posicion >= seccion.offsetTop) {
          actual = link.id;
        }
      });

      // si llegó al final de la página, marcar la última sección
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        actual = LINKS[LINKS.length - 1].id;
      }

      setActivo(actual);
    }

    window.addEventListener("scroll", marcarActivo);
    marcarActivo();

    return () => window.removeEventListener("scroll", marcarActivo);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Lenguajes IV</div>

      <button
        className="menu-btn"
        aria-label="Abrir menú"
        onClick={() => setAbierto(!abierto)}
      >
        &#9776;
      </button>

      <ul className={abierto ? "abierto" : ""}>
        {LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={"#" + link.id}
              className={activo === link.id ? "activo" : ""}
              onClick={() => setAbierto(false)}
            >
              {link.texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
