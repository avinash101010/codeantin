import React from 'react';

const Tab = ({ name, icon, isActive, disabled, onClick }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
      padding: '10px 15px',
      backgroundColor: isActive ? '#1570EF' : 'transparent',
      color: isActive ? '#fff' : '#000',
      height: '25px',
      opacity: disabled ? 0.6 : 1,
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onClick={onClick}
  >
    <span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>{icon}</span>
    {name}
  </div>
);

export default Tab;
