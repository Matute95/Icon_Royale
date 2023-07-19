import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { batalla, caza, explorar, pezca, aliarse, esconderse, escapar, cantar, matar, trampa } from './acciones';

function Desicion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { prota, demas, dia } = location.state || {};
  const [desiciones] = useState(getDesicion());

  const handleDecision = (decision) => {
    let action;
    switch (decision) {
      case 'Ir de caza':
        action = caza;
        break;
      case 'Explorar el bosque':
        action = explorar;
        break;
      case 'Ir de pezca':
        action = pezca;
        break;
      case 'Intentar aliarse':
        action = aliarse;
        break;
      case 'Esconderte':
        action = esconderse;
        break;
      case 'Tratar de escapar':
        action = escapar;
        break;
      case 'Cantar':
        action = cantar;
        break;
      case 'Matar a alguien':
        action = matar;
        break;
      case 'Poner una trampa':
        action = trampa;
        break;
      default:
        break;
    }

    const newDemas = batalla(prota, action, demas);
    const newProta = newDemas.length ? newDemas.shift() : null;
    navigate('/Dia', { state: { demas: newDemas, dia, prota: newProta } });
  };

  return (
    <div style={{ alignItems: 'center' }}>
      <p style={{ fontSize: 16, marginTop: 8 }}>Salud: {prota.salud}%</p>
      <p style={{ fontSize: 16, marginTop: 8 }}>Arma: {prota.arma}</p>
      <p style={{ fontSize: 16, marginTop: 8 }}>Lesion: {prota.lesion}</p>
      <p style={{ fontSize: 16, marginTop: 8 }}>Medicina: {prota.botiquin}</p>
      <img style={{ width: 150, height: 150, marginTop: 24 }} src={prota.src} alt={prota.nombre} />
      <div style={{ marginTop: 24, flexDirection: 'column' }}>
        {desiciones.map((decision, index) => (
          <button
            key={index}
            onClick={() => {
              handleDecision(decision);
            }}
          >
            {decision}
          </button>
        ))}
      </div>
    </div>
  );
}

function getDesicion() {
  const randomNumber = Math.random();
  let events1 = ['Ir de caza', 'Explorar el bosque', 'Ir de pezca', 'Intentar aliarse', 'Esconderte']; //60%
  let events2 = ['Tratar de escapar', 'Cantar', 'Matar a alguien', 'Poner una trampa']; //40%
  const desiciones = [];

  for (let i = 0; i < 3; i++) {
    if (randomNumber < 0.6) {
      const decision = events1[Math.floor(Math.random() * events1.length)];
      events1 = events1.filter((item) => item !== decision);
      desiciones.push(decision);
    } else {
      const decision = events2[Math.floor(Math.random() * events2.length)];
      events2 = events2.filter((item) => item !== decision);
      desiciones.push(decision);
    }
  }
  return desiciones;
}

export default Desicion;