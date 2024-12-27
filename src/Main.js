import React, { useState, useEffect } from 'react';
// import MobileHeader from './components/MobileHeader';
import Sidebar from './components/Sidebar';
import RepositoryList from './components/RepositoryList';

const MainPage = () => {
  // Add your states and logic here
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', alignContent:"space-between", gap:'15px'}}>
        <Sidebar/>
        <RepositoryList/>

      </div>
    </div>
  );
};

export default MainPage;
