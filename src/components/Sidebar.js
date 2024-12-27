import React from 'react';
import Tab from './Tab';
import { BiHome } from "react-icons/bi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineCloud } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import '../sidebar.css'

const defaultTabs = [
    { name: 'Repositories', disabled: false, icon: <BiHome /> },
    { name: 'AI Code Review', disabled: false, icon: <IoCodeSlashOutline /> },
    { name: 'Cloud Security', disabled: false, icon: <HiOutlineCloud /> },
    { name: 'How to use', disabled: false, icon: <LuBookText /> },
    { name: 'Settings', disabled: false, icon: <IoSettingsOutline /> },
];

const defaultBottomTabs = [
    { name: 'Support', disabled: false, icon: <IoCallOutline /> },
    { name: 'Logout', disabled: false, icon: <FiLogOut /> },
];

const Sidebar = ({ tabs = defaultTabs, bottomTabs = defaultBottomTabs, activeTab, onTabClick }) => (
  <div
      style={{
        width: '250px',
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // padding: '10px',
        marginLeft:'10px',
        // marginTop:'15px',
        // marginRight:'15px',
        // backgroundColor:'#ccc',
        // bottom:'0'
        // border:'1px solid #ccc'
        borderRight:'1px solid #ccc'
        // backgroundColor: isActive ? '#1570EF' : 'transparent',
    }}>
    <div style={{ display: 'flex', alignItems: 'center', padding:'10px 10px', marginTop:'10px' }}>
      <img src="/CodeAnt.png" alt="logo" height={40} width={40} />
      <h2 style={{ marginLeft: '10px', fontSize: '20px', margin: 0 }}>CodeAnt AI</h2>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
    </div>
    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
);

export default Sidebar;
