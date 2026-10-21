import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <Navbar />

      <section id="inicio">
        <h2>Inicio</h2>
        <p>Bienvenidos a la página de la materia Lenguajes IV.</p>
        <p>
          <strong>Profesor:</strong> Delgado
        </p>
      </section>

      <section id="acerca">
        <h2>Acerca de</h2>
        <p>Integrantes del grupo:</p>
        <ul>
          <li>Francisco Sanchez</li>
          <li>Joaquin Arraya</li>
        </ul>
      </section>

      <Contacto />

      <section id="proyecto">
        <h2>Proyecto</h2>
        <p>Acá va la descripción del proyecto.</p>
      </section>
    </>
  );
}

export default App;
