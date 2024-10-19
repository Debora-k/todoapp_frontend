import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({user, children}) => {
    

  return (
    // children: refers whatever under PrivateRoute 
    user? children:<Navigate to="/login"/>
  )
}


export default PrivateRoute