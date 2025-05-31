import React from 'react';

function DataProduct({ nombre, precio, imagen }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '150px',
      textAlign: 'center'
    }}>
      <img src={imagen} alt={nombre} style={{ width: '100%', borderRadius: '4px' }} />
      <h4>{nombre}</h4>
      <p>{precio}</p>
    </div>
  );
}

export default DataProduct;