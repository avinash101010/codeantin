import React from 'react';
import Tab from './Tab';
import { FaBars } from 'react-icons/fa';

const MobileHeader = ({ tabs, bottomTabs, activeTab, isMenuOpen, toggleMenu, onTabClick }) => (
  <div
    className="header"
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      position: 'relative',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/CodeAnt.png" alt="logo" height={40} width={40} />
      <h2 style={{ marginLeft: '10px', fontSize: '20px', margin: 0 }}>CodeAnt AI</h2>
    </div>
    <button
      style={{
        background: 'transparent',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
      }}
      onClick={toggleMenu}
    >
      <FaBars />
    </button>
    {isMenuOpen && (
      <div
        className="dropdown-menu"
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '99.5%',
          backgroundColor: '#fff',
          zIndex: 10,
          border: '1px solid #ccc',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              name={tab.name}
              icon={tab.icon}
              isActive={activeTab === tab.name}
              disabled={tab.disabled}
              onClick={() => onTabClick(tab)}
            />
          ))}
          <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
            {bottomTabs.map((tab) => (
              <Tab
                key={tab.name}
                name={tab.name}
                icon={tab.icon}
                isActive={activeTab === tab.name}
                disabled={tab.disabled}
                onClick={() => onTabClick(tab)}
              />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

export default MobileHeader;
