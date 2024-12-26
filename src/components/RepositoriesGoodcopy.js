import React, { useState } from 'react';
import { BiHome } from "react-icons/bi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineCloud } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Repositories'); // Track the active tab

  // Tab names (modify if some tabs should be disabled)
  const tabs = [
    { name: 'Repositories', disabled: false, icon: <BiHome /> },
    { name: 'AI Code Review', disabled: false, icon: <IoCodeSlashOutline /> },
    { name: 'Cloud Security', disabled: false, icon: <HiOutlineCloud /> },
    { name: 'How to use', disabled: false, icon: <LuBookText /> },
    { name: 'Settings', disabled: false, icon: <IoSettingsOutline /> },
  ];

  const bottomTabs = [
    { name: 'Support', disabled: false, icon: <IoCallOutline /> },
    { name: 'Logout', disabled: false, icon: <FiLogOut /> },
  ];

  const handleTabClick = (tab) => {
    if (!tab.disabled) {
      setActiveTab(tab.name); // Update active tab only if it's not disabled
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        {/* Top Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/CodeAnt.png" alt="logo" height={50} width={50} />
            <h2 style={{ marginLeft: '10px', font: '28px Arial', margin: 0 }}>CodeAnt AI</h2>
          </div>
          
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              name={tab.name}
              icon={tab.icon}
              isActive={activeTab === tab.name}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>

        {/* Bottom Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {bottomTabs.map((tab) => (
            <Tab
              key={tab.name}
              name={tab.name}
              icon={tab.icon}
              isActive={activeTab === tab.name}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{`Welcome to ${activeTab}`}</h1>
      </div>
    </div>
  );
};

// Tab Component
const Tab = ({ name, icon, isActive, disabled, onClick }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: '5px',
      fontSize: '18px',
      // fontWeight: 'bold',
      padding: '10px 15px',
      backgroundColor: isActive ? '#3B71CA' : 'transparent',
      color: isActive ? '#fff' : '#000',
      opacity: disabled ? 0.6 : 1, // Grayscale for disabled tabs
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onClick={onClick}
    onMouseEnter={(e) => {
      if (disabled) {
        e.target.style.backgroundColor = '#d3d3d3'; // Gray hover for disabled
      } else if (!isActive) {
        e.target.style.backgroundColor = '#e8f0fe'; // Light hover effect
      }
    }}
    onMouseLeave={(e) => {
      if (disabled) {
        e.target.style.backgroundColor = 'transparent'; // Reset hover for disabled
      } else if (!isActive) {
        e.target.style.backgroundColor = 'transparent'; // Reset hover
      }
    }}
  >
    <span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>{icon}</span>
    {name}
  </div>
);

export default MainPage;
