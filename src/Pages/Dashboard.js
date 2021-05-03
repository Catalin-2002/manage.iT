import React from 'react';

import '../App.css';

import Footer      from '../Components/Footer/Footer';
import NewProject from '../Components/NewProject/NewProject';

function Dashboard() {
  return (
    <>
      <NewProject />
      <Footer />
    </>
  );
}

export default Dashboard;
