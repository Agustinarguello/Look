import React from 'react';
import lookRemera from './Images/¿QUIENES SOMOS.png';
import lookPortada from './Images/4.png';
import lookBermuda from './Images/Look-0016.jpg';
import lookBuzo from './Images/0-01-scaled.jpg';
import lookPantalon from './Images/IMG_2191-scaled-e1616453292886-1536x2048.jpg';
import Card from './components/Card';

const remeras = [
  { id: 'remera-001', nombre: 'Remeras Oversize Blancas', precio: '$22.000', imagen: lookRemera },
  { id: 'remera-002', nombre: 'Remeras Oversize Negras', precio: '$22.000', imagen: lookRemera },
  { id: 'remera-003', nombre: 'Remeras Oversize Crudo', precio: '$25.000', imagen: lookRemera },
  { id: 'remera-004', nombre: 'Remeras Oversize Beige', precio: '$25.000', imagen: lookRemera },
  { id: 'remera-005', nombre: 'Remeras Oversize Azul', precio: '$25.000', imagen: lookRemera },
  { id: 'remera-006', nombre: 'Remeras Oversize Bordo', precio: '$25.000', imagen: lookRemera },
  { id: 'remera-007', nombre: 'Remeras Oversize Verde', precio: '$25.000', imagen: lookRemera },
];

const bermudas = [
  { id: 'bermuda-001', nombre: 'Bermuda Oversize Negra', precio: '$25.000', imagen: lookBermuda },
  { id: 'bermuda-002', nombre: 'Bermuda Oversize Blanca', precio: '$25.000', imagen: lookBermuda },
  { id: 'bermuda-003', nombre: 'Bermuda Oversize Crudo', precio: '$29.000', imagen: lookBermuda },
  { id: 'bermuda-004', nombre: 'Bermuda Oversize Azul', precio: '$29.000', imagen: lookBermuda },
  { id: 'bermuda-005', nombre: 'Bermuda Oversize Bordo', precio: '$29.000', imagen: lookBermuda },
  { id: 'bermuda-006', nombre: 'Bermuda Oversize Verde', precio: '$29.000', imagen: lookBermuda },
  { id: 'bermuda-007', nombre: 'Bermuda Oversize Beige', precio: '$29.000', imagen: lookBermuda },
  
];

const buzos = [
  { id: 'buzo-001', nombre: 'Buzo Oversize Negro', precio: '$35.000', imagen: lookBuzo },
  { id: 'buzo-002', nombre: 'Buzo Oversize Blanco', precio: '$35.000', imagen: lookBuzo },
  { id: 'buzo-003', nombre: 'Buzo Oversize Beige', precio: '$38.000', imagen: lookBuzo },
  { id: 'buzo-004', nombre: 'Buzo Oversize Crudo', precio: '$38.000', imagen: lookBuzo },
  { id: 'buzo-005', nombre: 'Buzo Oversize Bordo', precio: '$38.000', imagen: lookBuzo },
  { id: 'buzo-006', nombre: 'Buzo Oversize Azul', precio: '$38.000', imagen: lookBuzo },
  { id: 'buzo-007', nombre: 'Buzo Oversize Verde', precio: '$38.000', imagen: lookBuzo },
];

const pantalones = [
  { id: 'pantalon-001', nombre: 'Pantalón Oversize Negro', precio: '$32.000', imagen: lookPantalon },
  { id: 'pantalon-002', nombre: 'Pantalón Oversize Blanco', precio: '$32.000', imagen: lookPantalon },
  { id: 'pantalon-003', nombre: 'Pantalón Oversize Beige', precio: '$35.000', imagen: lookPantalon },
  { id: 'pantalon-004', nombre: 'Pantalón Oversize Crudo', precio: '$35.000', imagen: lookPantalon },
  { id: 'pantalon-005', nombre: 'Pantalón Oversize Bordo', precio: '$35.000', imagen: lookPantalon },
  { id: 'pantalon-006', nombre: 'Pantalón Oversize Azul', precio: '$35.000', imagen: lookPantalon },
  { id: 'pantalon-007', nombre: 'Pantalón Oversize Verde', precio: '$35.000', imagen: lookPantalon },
  
];



function App() {
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fafafa',
        width: '100vw',    
        boxSizing: 'border-box',
      }}
    >
      <header
        style={{
          textAlign: 'center',
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <img
          alt="Portada LOOK"
          src={lookPortada}
          style={{ width: '70%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '20px',
          marginTop: '40px',
          width: '100%',  
          boxSizing: 'border-box',
        }}
      >
        <Card title="Remeras" backgroundImage={lookRemera} productos={remeras} />
        <Card title="Bermudas" backgroundImage={lookBermuda} productos={bermudas} />
        <Card title="Buzos" backgroundImage={lookBuzo} productos={buzos} />
        <Card title="Pantalones" backgroundImage={lookPantalon} productos={pantalones} />
      </div>
    </div>
  );
}

export default App;




