import React from 'react';

function Card({ title, backgroundImage, productos }) {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        color: 'white',
        minHeight: '450px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <h2
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '10px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        {title}
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: '10px',
          margin: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '12px',
          overflowY: 'auto',
          maxHeight: '300px',
        }}
      >
        {productos.map((producto) => (
          <li
            key={producto.id}
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 0',
              color: '#fff',
              fontSize: '0.9rem',
            }}
          >
            <strong>{producto.nombre}</strong> – {producto.precio}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Card;