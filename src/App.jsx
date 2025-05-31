import React from 'react';
import lookImage from './Images/Look-0010.jpg';
import lookBermuda from './Images/Look-0016.jpg';
import DataProduct from './DataProduct';
import lookPortada from './Images/4.png';


const remeras = [
  { id: 'remera-001', nombre: 'Remeras Oversize Blancas', precio: '$22.000', imagen: lookImage },
  { id: 'remera-002', nombre: 'Remeras Oversize Negras', precio: '$18.000', imagen: lookImage },
  { id: 'remera-003', nombre: 'Remeras Oversize Crudo', precio: '$25.000', imagen: lookImage },
  { id: 'remera-004', nombre: 'Remeras Oversize Beige', precio: '$25.000', imagen: lookImage },
];

const bermudas = [
  { id: 'bermuda-001', nombre: 'Bermuda Oversize Beige', precio: '$29.000', imagen: lookBermuda },
  { id: 'bermuda-002', nombre: 'Bermuda Oversize Negra', precio: '$28.000', imagen: lookBermuda },
  { id: 'bermuda-003', nombre: 'Bermuda Oversize Blanca', precio: '$30.000', imagen: lookBermuda }
];

const buzos = [
  { id: 'buzo-001', nombre: 'Buzo Oversize Negro', precio: '$40.000', imagen: lookImage },
  { id: 'buzo-002', nombre: 'Buzo Oversize Beige', precio: '$42.000', imagen: lookImage },
  { id: 'buzo-003', nombre: 'Buzo Oversize Blanco', precio: '$45.000', imagen: lookImage }
];

const pantalones = [
  { id: 'pantalon-001', nombre: 'Pantalón Oversize Negro', precio: '$50.000', imagen: lookImage },
  { id: 'pantalon-002', nombre: 'Pantalón Oversize Beige', precio: '$52.000', imagen: lookImage },
  { id: 'pantalon-003', nombre: 'Pantalón Oversize Blanco', precio: '$48.000', imagen: lookImage }
];


function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', backgroundColor: 'black', padding: '20px' }}>
  <img 
    alt="Portada LOOK" 
    src={lookPortada} 
    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }} 
  />
</header>

      <section style={{ marginTop: '20px' }}>
        <h2>Remeras</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {remeras.map((producto) => (
            <DataProduct
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Bermudas</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {bermudas.map((producto) => (
            <DataProduct
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Buzos</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {buzos.map((producto) => (
            <DataProduct
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Pantalones</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {pantalones.map((producto) => (
            <DataProduct
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;


