import React from 'react';
import RepositoryItem from './RepositoryItem';
import { FaPlus } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const defaultrepositories = [
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
    name: "Project Beta",
    visibility: "Private",
    language: "Python",
    size: "800 KB",
    updated: "Updated 1 week ago",
  },
  {
    name: "Project Beta",
    visibility: "Private",
    language: "Python",
    size: "800 KB",
    updated: "Updated 1 week ago",
  }, {
    name: "Project Beta",
    visibility: "Private",
    language: "Python",
    size: "800 KB",
    updated: "Updated 1 week ago",
  }, {
    name: "Project Beta",
    visibility: "Private",
    language: "Python",
    size: "800 KB",
    updated: "Updated 1 week ago",
  }, {
    name: "Project Beta",
    visibility: "Private",
    language: "Python",
    size: "800 KB",
    updated: "Updated 1 week ago",
  }, 
  
];

const RepositoryList = () => (
  <div style={{border:'1px solid #ccc', width:'85vw', margin:"20px", borderRadius:'12px'}}>
    <div>
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
                    display: 'flex',alignItems: 'center',height: '40px',border: '1px solid #ccc',borderRadius: '4px',marginRight:'15px',cursor:'pointer',
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <FiRefreshCw style={{ marginRight: '8px', fontSize: '16px' }} />
                  <span style={{ fontSize: '15px', margin: 0 }}>Refresh All</span>
                </button>
                <button 
                  style={{backgroundColor: '#1570EF',color: '#fff',display: 'flex',alignItems: 'center',height: '40px',border: 'none',borderRadius: '4px',cursor:'pointer',
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
                    display: 'flex',alignItems: 'center',height: '40px',width:'20vw',border: '1px solid #ccc',borderRadius: '4px',cursor:'pointer',marginLeft:'20px',marginBottom:'20px', 
                    padding: '0 12px', // Adjust padding for spacing around the content
                  }}>
                  <IoIosSearch style={{ marginRight: '8px', fontSize: '16px',height:'25',width:'25' }} />
                  <span style={{ fontSize: '16px', margin: 0 }}>Search Repository</span>
              </button>
            </div>
      <div>
        {defaultrepositories.map((repo, index) => (
          <RepositoryItem key={index} repo={repo} />
        ))}
      </div>
    </div>
  </div>
);

export default RepositoryList;

