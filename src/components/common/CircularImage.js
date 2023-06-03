import React from 'react';

const CircularImage = ({ src, alt }) => {
  return (
    <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default CircularImage;
