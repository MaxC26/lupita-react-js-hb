import Confetti from 'react-confetti';
import MiImagen from './img/HBL.png';

const BirthdayPage = () => {
  return (
    <div>
      <h1>Feliz Cumpleaños</h1>
      <img src={MiImagen} alt="imagen de cumpleaños" />
      {true && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
};

export default BirthdayPage;
