import Confetti from "react-confetti";
import MiImagen from "./img/HBL.png";
import SongPlayer from "./SongPlayer";

const BirthdayPage = () => {
  const imagen = {
    width: "200px",
  };

  const confeti = {
    opacity: "0.4",
  };

  const titulo = {
    paddingTop: "400px",
  };

  const centrar = {
    fontSize: "18px",
    padding: "20px",
    paddingTop: "0px",
    textAlign: "center",
    lineHeight: "1.5",
  }
  const parrafos = {
    fontSize: "18px",
    padding: "20px",
    paddingTop: "0px",
    textAlign: "justify",
    lineHeight: "1.5",
  };
  return (
    <div style={titulo}>
      <h2>Feliz Cumpleaños Lupita</h2>
      <SongPlayer />
      <div>
        <p style={parrafos}>
          ¡Muchisimas felicidades! 🎉🎂 Que este día sea tan especial y que te
          la pases de maravilla sobre todo, espero que lo disfrutes muchisimo.
        </p>

        <p style={parrafos}>
          Te deseo lo mejor en la vida, que cada rayo de sol ilumine tu camino y
          te traiga alegría, amor, éxito, salud y que Diosito te llene
          infinitamente de muchas bendiciones. 🌞✨ Disfruta al máximo este
          nuevo año de vida, rodeado de las personas que amas y que te queremos,
          que cada momento esté lleno de sonrisas y buenos recuerdos. 🎈🥳
        </p>
        <p style={parrafos}>
          ¡Que esta nueva vuelta al sol sea simplemente espectacular! 🌟🎁🎊
        </p>
      </div>
      <img src={MiImagen} alt="imagen de cumpleaños" style={imagen} />
      <p style={parrafos}>
        Y no olvides que cuentas conmigo para lo que necesites y lo mas importate en un par de
        horas brindamos 🍻🍺🍻🍺
      </p>
      <p style={centrar}>
        Se te quiere 🤍
      </p>
      {true && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight + 100}
          style={confeti}
        />
      )}
    </div>
  );
};

export default BirthdayPage;
