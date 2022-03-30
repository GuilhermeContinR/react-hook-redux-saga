import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Login from '../pages/Login'
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function Rotas(){
  return (
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/logout' element={<Login />}/>
        <Route path='/private' element={ <PrivateRoute> <Page404/> </PrivateRoute> }/>
      </Routes>
  );
};
