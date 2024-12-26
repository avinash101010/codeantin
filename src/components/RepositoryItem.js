import React, { useState } from 'react';
import { FiDatabase } from 'react-icons/fi';
const repo = [
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
const RepositoryItem = ({ repo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        height: '8vh',
        backgroundColor: hovered ? 'rgba(204,204,204,0.2)' : '#fff',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <h4 style={{ margin: 0 }}>{repo.name}</h4>
        <span
          style={{
            padding: '2px 8px',
            borderRadius: '12px',
            backgroundColor: 'rgba(135, 206, 235, 0.2)',
            border: '1px solid #87CEEB',
            color: 'blue',
            fontSize: '12px',
            marginLeft: '10px',
          }}
        >
          {repo.visibility}
        </span>
      </div>
      <div style={{ marginTop: '8px', fontSize: '14px', color: '#555', display: 'flex', gap: '40px', alignItems: 'center' }}>
        <span>{repo.language}</span>
        <span>
          <FiDatabase style={{ verticalAlign: 'middle', marginRight: '1px' }} /> {repo.size}
        </span>
        <span>{repo.updated}</span>
      </div>
    </div>
  );
};

export default RepositoryItem;
