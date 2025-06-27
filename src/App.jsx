import { useContext, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import lookRemera from './Images/Look-0010.jpg';
import lookBermuda from './Images/Look-0016.jpg';
import lookPortada from './Images/4.png';
import lookBuzo from './Images/Look-0010.jpg';
import lookPantalon from './Images/Look-0010.jpg';
import Card from './Card';



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
  const { totalItems, cartItems, setTotalItems, searchTerm, setSearchTerm } = useContext(ShopContext);
  useEffect(() => {

      const total = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
      setTotalItems(total);
    }, [cartItems, setTotalItems]);

  return (
    <div style={{ padding: '0', margin: '0', fontFamily: 'Arial, sans-serif', width: '100%', boxSizing: 'border-box' }}>
   
      <header style={{ textAlign: 'center', backgroundColor: 'black', padding: '20px', position: 'relative' }}>
        <img
          alt="Portada LOOK"
          src={lookPortada}
          style={{
            width: '60%',
            maxHeight: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        {/* CARRITO */}
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          backgroundColor: 'white',
          color: 'black',
          padding: '6px 12px',
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '16px',
        }}>
          🛒 {totalItems}
        </div>

       
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginTop: '10px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            width: '60%',
            maxWidth: '400px',
          }}
        />
      </header>

      {/* CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '20px',
          width: '100vw',
          padding: '20px',
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



