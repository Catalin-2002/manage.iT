import React from 'react';

import '../App.css';

import Footer      from '../Components/Footer/Footer';
import NewProject from '../Components/NewProject/NewProject';
import ProjectList from '../Components/ProjectList/ProjectList';

function Dashboard() {
  return (
    <>
      <ProjectList />
      <NewProject />
    </>
  );
}

export default Dashboard;
