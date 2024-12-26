import React, { useState, useEffect } from 'react';
import { BiHome } from "react-icons/bi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineCloud } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Repositories'); // Track the active tab
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [isMobileView, setIsMobileView] = useState(false); // Track if mobile view

  // Detect screen size to toggle between mobile and desktop layouts
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Set breakpoint at 768px
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize); // Listen for resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Tab names
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

  const repositories = [
    {
      name: "Project Alpha",
      visibility: "Public",
      language: "JavaScript",
      size: "1.2 MB",
      updated: "2 days ago",
    },
    {
      name: "Project Beta",
      visibility: "Private",
      language: "Python",
      size: "800 KB",
      updated: "1 week ago",
    },
    {
      name: "Project Gamma",
      visibility: "Public",
      language: "Java",
      size: "2.5 MB",
      updated: "3 weeks ago",
    },
  ];

  const handleTabClick = (tab) => {
    if (!tab.disabled) {
      setActiveTab(tab.name);
    }
    setIsMenuOpen(false); // Close the menu after selecting a tab
  };

  // Mobile Header Layout
  const renderMobileHeader = () => (
    <div
      className="header"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        position: 'relative', // Needed for dropdown positioning
      }}>
      {/* Logo and Title */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/CodeAnt.png" alt="logo" height={40} width={40} />
        <h2 style={{ marginLeft: '10px', fontSize: '20px', margin: 0 }}>CodeAnt AI</h2>
      </div>

      {/* Menu Button */}
      <button
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="dropdown-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '99.5%', // Match the width of the header
            backgroundColor: '#fff',
            zIndex: 10,
            border: '1px solid #ccc',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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

            {/* Bottom Tabs */}
            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
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
        </div>
      )}
    </div>
  );

  // Desktop Sidebar Layout
  const renderDesktopSidebar = () => (
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
        {/* Logo and Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src="/CodeAnt.png" alt="logo" height={40} width={40} />
          <h2 style={{ marginLeft: '10px', fontSize: '20px', margin: 0 }}>CodeAnt AI</h2>
        </div>

        {/* Top Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
          padding: '20px',
        }}>
        {activeTab === "Repositories" && (
          <div>
            {repositories.map((repo, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "10px",
                  backgroundColor: "#fff",
                }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h3 style={{ margin: 0 }}>{repo.name}</h3>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "12px",
                      backgroundColor: repo.visibility === "Public" ? "#e0f7fa" : "#ffe0b2",
                      color: repo.visibility === "Public" ? "#00796b" : "#f57c00",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}>
                    {repo.visibility}
                  </span>
                </div>
                <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
                  <span>{repo.language}</span> | <span>{repo.size}</span> |{" "}
                  <span>{repo.updated}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return isMobileView ? renderMobileHeader() : renderDesktopSidebar();
};

// Tab Component
const Tab = ({ name, icon, isActive, disabled, onClick }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
      padding: '10px 15px',
      backgroundColor: isActive ? '#3B71CA' : 'transparent',
      color: isActive ? '#fff' : '#000',
      opacity: disabled ? 0.6 : 1, // Grayscale for disabled tabs
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onClick={onClick}
  >
    <span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>{icon}</span>
    {name}
  </div>
);

export default MainPage;
