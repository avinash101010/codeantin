import React from 'react';
import RepositoryItem from './RepositoryItem';

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

const RepositoryList = ({ repositories }) => (
  <div>
    {repositories.map((repo, index) => (
      <RepositoryItem key={index} repo={repo} />
    ))}
  </div>
);

export default RepositoryList;
