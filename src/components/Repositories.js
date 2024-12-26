import React, { useState, useEffect } from 'react';
import { BiHome } from "react-icons/bi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineCloud } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Repositories'); // Track the active tab
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [isMobileView, setIsMobileView] = useState(false); // Track if mobile view
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      updated: "Updated 2 days ago",
    },
    {
      name: "Project Beta",
      visibility: "Private",
      language: "Python",
      size: "800 KB",
      updated: "Updated 1 week ago",
    },
    {
      name: "Project Gamma",
      visibility: "Public",
      language: "Java",
      size: "2.5 MB",
      updated: "Updated 3 weeks ago",
    },
    {
      name: "Project Alpha",
      visibility: "Public",
      language: "JavaScript",
      size: "1.2 MB",
      updated: "Updated 2 days ago",
    },
    {
      name: "Project Gamma",
      visibility: "Public",
      language: "Java",
      size: "2.5 MB",
      updated: "Updated 3 weeks ago",
    },
    {
      name: "Project Alpha",
      visibility: "Public",
      language: "JavaScript",
      size: "1.2 MB",
      updated: "Updated 2 days ago",
    },
    {
      name: "Project Gamma",
      visibility: "Public",
      language: "Java",
      size: "2.5 MB",
      updated: "Updated 3 weeks ago",
    },
    {
      name: "Project Alpha",
      visibility: "Public",
      language: "JavaScript",
      size: "1.2 MB",
      updated: "Updated 2 days ago",
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '10px 20px',
        position: 'relative',
      }}>
      {/* Logo and Title */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <img src="/CodeAnt.png" alt="logo" height={40} width={40} />
        <h2 style={{ marginLeft: '10px', fontSize: '20px', margin: 0 }}>CodeAnt AI</h2>
  
        {/* Menu Button */}
        <button
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </div>
  
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="dropdown-menu"
          style={{
            // position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            zIndex: 10,
            border: '1px solid #ccc',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px' }}>
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
      )}
  
      {/* Repository List */}
      {activeTab === "Repositories" && (
        <div
          style={{
            // marginTop: isMenuOpen ? '60px' : '2px', // Adjust spacing when menu is open
            width: '100%',
            // border: '1px solid #ccc',
            // borderRadius: '10px',
            backgroundColor: '#fff',
          }}
        >
          <div style={{ marginLeft:"5px",marginTop:'10px',marginBottom:'10px' }}>
            <span style={{ font: 'bold 18px Arial', marginBottom: '0' }}>Repositories</span>
            <span style={{ display: 'block', marginTop: '5px', fontSize:'15px' }}>33 total repositories</span>
          </div>
            <div style={{ display: 'flex', alignItems: 'center' , marginBottom:'10px'}}>
                <button 
                  style={{
                    // backgroundColor: '#1570EF',
                    // color: '#fff',
                    display: 'flex',alignItems: 'center',height: '40px',border: '1px solid #ccc',borderRadius: '4px',marginRight:'15px',cursor:'pointer',padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <FiRefreshCw style={{ marginRight: '8px', fontSize: '16px' }} />
                  <span style={{ fontSize: '15px', margin: 0 }}>Refresh All</span>
                </button>
                <button 
                  style={{
                    backgroundColor: '#1570EF',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor:'pointer',
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <FaPlus style={{ marginRight: '8px', fontSize: '16px' }} />
                  <span style={{ fontSize: '16px', margin: 0 }}>Add Repository</span>
                </button>
            </div>
            <div>
              <button 
                  style={{
                    // backgroundColor: '#1570EF',
                    // color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    // width:'20vw',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    cursor:'pointer',
                    // marginLeft:'20px',
                    marginBottom:'20px', 
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <IoIosSearch style={{ marginRight: '8px', fontSize: '16px',height:'25',width:'25' }} />
                  <span style={{ fontSize: '16px', margin: 0 }}>Search Repository</span>
              </button>
            </div>
          {repositories.map((repo, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                backgroundColor: hoveredIndex === index ? 'rgba(204,204,204,0.2)' : '#fff',
                width: "100%", // Occupy full width
                boxSizing: "border-box", // Include padding in the width calculation
                // marginBottom: '8px',
              }}>
              <div style={{ display: "flex", justifyContent: "start" }}>
                  <h4 style={{ margin: 0 }}>{repo.name}</h4>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "12px",
                      backgroundColor: 'rgba(135, 206, 235, 0.2)',
                      // backgroundColor: repo.visibility === "Public" ? "#e0f7fa" : "#ffe0b2",
                      border: "1px solid #87CEEB",
                      color: 'blue',
                      fontSize: "12px",
                      alignContent: "center",
                      marginLeft:'10px'
                      
                      // fontWeight: "bold",
                    }}>
                    {repo.visibility}
                  </span>
                </div>
              <div style={{ marginTop: "3px", fontSize: "14px", color: "#555", display: "flex", gap: "30px", alignItems: "center" }}>
                  <span>{repo.language} <span className='dot' style={{ verticalAlign: "middle", marginLeft: "2px", height:'8px',width:'8px' }}></span></span>
                  <span><FiDatabase style={{ verticalAlign: "middle", marginRight: "1px" ,fontSize:'13px'}} /> <span style={{fontSize:'12px'}}> {repo.size}</span></span>
                  <span style={{fontSize:'12px'}}>{repo.updated}</span>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  

  // Desktop Sidebar Layout
  const renderDesktopSidebar = () => (
    <div style={{ display: 'flex', height: '100vh', overflowY: 'hidden' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
          // position:'fixed'
        }}>
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
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
          // border:'1px solid',
          height:'100vh',
        }}>
        <div >
        {activeTab === "Repositories" && (
          <div style={{border:'1px solid #ccc', borderRadius:'10px',backgroundColor:'#fff'}}>
            <div style={{ marginLeft: '20px', padding: '20px 20px 20px 0px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ font: 'bold 25px Arial', marginBottom: '0', marginTop: '0' }}>Repositories</span>
                <span style={{ display: 'block', marginTop: '5px' }}>33 total repositories</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button 
                  style={{
                    // backgroundColor: '#1570EF',
                    // color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginRight:'15px',
                    cursor:'pointer',
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <FiRefreshCw style={{ marginRight: '8px', fontSize: '16px' }} />
                  <span style={{ fontSize: '15px', margin: 0 }}>Refresh All</span>
                </button>
                <button 
                  style={{
                    backgroundColor: '#1570EF',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor:'pointer',
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <FaPlus style={{ marginRight: '8px', fontSize: '16px' }} />
                  <span style={{ fontSize: '16px', margin: 0 }}>Add Repository</span>
                </button>
              </div>

            </div>
            <div>
              <button 
                  style={{
                    // backgroundColor: '#1570EF',
                    // color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    width:'20vw',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    cursor:'pointer',
                    marginLeft:'20px',
                    marginBottom:'20px', 
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <IoIosSearch style={{ marginRight: '8px', fontSize: '16px',height:'25',width:'25' }} />
                  <span style={{ fontSize: '16px', margin: 0 }}>Search Repository</span>
              </button>
            </div>

            {repositories.map((repo, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}  // Set hovered index
                onMouseLeave={() => setHoveredIndex(null)}   // Reset hovered index
                style={{
                  border: "1px solid #ccc",
                  // borderRadius: "8px",
                  padding: "10px",
                  // marginBottom: "10px",
                  height:'8vh',
                  // backgroundColor: "#fff",
                  backgroundColor: hoveredIndex === index ? 'rgba(204,204,204,0.2)' : '#fff', // Apply hover background color

                  // onhover:'background-color:#ccc',
                  alignContent:'center',
                }}>
                <div style={{ display: "flex", justifyContent: "start" }}>
                  <h4 style={{ margin: 0 }}>{repo.name}</h4>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "12px",
                      backgroundColor: 'rgba(135, 206, 235, 0.2)',
                      // backgroundColor: repo.visibility === "Public" ? "#e0f7fa" : "#ffe0b2",
                      border: "1px solid #87CEEB",
                      color: 'blue',
                      fontSize: "12px",
                      alignContent: "center",
                      marginLeft:'10px'
                      
                      // fontWeight: "bold",
                    }}>
                    {repo.visibility}
                  </span>
                </div>
                <div style={{ marginTop: "8px", fontSize: "14px", color: "#555", display: "flex", gap: "40px", alignItems: "center" }}>
                  <span>{repo.language} <span className='dot' style={{ verticalAlign: "middle", marginLeft: "2px" }}></span></span>
                  <span><FiDatabase style={{ verticalAlign: "middle", marginRight: "1px" }} /> {repo.size}</span>
                  <span>{repo.updated}</span>
                </div>

              </div>
            ))}
          </div>
        )}
        </div>
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
      backgroundColor: isActive ? '#1570EF' : 'transparent',
      color: isActive ? '#fff' : '#000',
      height: '25px',
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
