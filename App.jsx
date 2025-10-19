import { useState } from "react";
import "./App.css";
import librofrankeinstein from "./assets/libro frankeinstein.jpg";
import cancionmmxsvirlan from "./assets/mmxxs virlan garcia.jpg";
import pelicularapidos from "./assets/rapidiños y furiosiños.jpg";
import serierosario from "./assets/rosario tijeras.jpg";
import autoaltima from "./assets/altimatunnn.jpg";

const HeaderContent = () => {
  return (
    <header>
      <h1>LAS FAVS DE MIGUEL MARTINEZ =/</h1>
    </header>
  );
};
const NavBarContent = (props) => {
  return (
    <nav>
      <ul>
        {props.data.map((song) => (
          <li
            key={song.id}
            onClick={() => props.fncClic(song)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={song.img}
              alt={song.name}
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
                borderRadius: "5px",
              }}
            />
            {song.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <main>
      <section>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptas
        nulla in sint fuga repellat inventore id adipisci incidunt aut omnis
        cumque totam, fugit libero excepturi. Id repellat quo magnam.
      </section>
    </main>
  );
};

const AsideContent = () => {
  return (
    <aside>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
    </aside>
  );
};

const FooterContent = () => {
  return (
    <footer>
      <p>Derechos reservados 2025</p>
    </footer>
  );
};

function App() {
  const [song, setSong] = useState();

  const handleClick = (data) => {
    setSong(data);
  };

  const SongsData = [
    { id: 1, name: "frankeinstein", img: frankeinstein },
    { id: 2, name: "MMXXS VIRLAN GARCIA", img: cancionmmxsvirlan },
    { id: 3, name: "RAPIDOS Y FURIOSOS", img: pelicularapidos },
    { id: 4, name: "ROSARIO TIJERAS", img: serierosario },
    { id: 5, name: "AUTO FAVORITO", img: autoaltima },
  ];
  return (
    <div>
      <HeaderContent />
      <NavBarContent data={SongsData} fncClic={handleClick} />
      <div>
        <AsideContent />
        <MainContent />
      </div>
      <FooterContent />
    </div>
  );
}

export default App;
