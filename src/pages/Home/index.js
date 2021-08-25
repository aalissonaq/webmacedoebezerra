import React, { useEffect } from 'react';
import api from './../../services/api'
//import { FiUsers } from "react-icons/fi";

const Home = () => {

  useEffect(() => {
    api.get('/');
  }, []);

  return (
    <div className="col p-4 overflow-auto h-100">
      <div className="row">
        <div className="col-12">

          <div className="w-100 d-flex justify-content-between">
            <h2 className="titlePages">Dashboard</h2>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;
