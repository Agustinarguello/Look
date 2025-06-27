import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function Card({ title, backgroundImage, productos }) {
  const { cartItems, addToCart, removeFromCart, searchTerm } = useContext(ShopContext);

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{
      position: 'relative',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      color: 'white',
      minHeight: '450px',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
     
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.7)',
        zIndex: 0,
      }} />

     
      <div style={{ position: 'relative', padding: '20px', zIndex: 1 }}>
        <h2 style={{
          padding: '10px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '10px',
        }}>
          {title}
        </h2>

        <ul style={{
          listStyle: 'none',
          padding: '10px',
          margin: 0,
          borderRadius: '12px',
          overflowY: 'auto',
          maxHeight: '300px',
        }}>
          {productosFiltrados.map(producto => {
            const enCarrito = cartItems[producto.id] > 0;

            return (
              <li key={producto.id} style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '10px 0',
                fontSize: '0.9rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <strong>{producto.nombre}</strong> – {producto.precio}
                </div>
                {enCarrito ? (
                  <button
                    onClick={() => removeFromCart(producto.id)}
                    style={{
                      background: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    Quitar
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(producto.id)}
                    style={{
                      background: 'green',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    Agregar
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Card;

