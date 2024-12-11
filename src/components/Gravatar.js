import React from 'react';

const Gravatar = ({ url }) => (
  url ? <img src={url} alt="Gravatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} /> : null
);

export default Gravatar;
