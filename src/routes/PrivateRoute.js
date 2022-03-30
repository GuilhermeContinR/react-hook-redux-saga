import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({children}){
    const isLoggedIn = false;

    return isLoggedIn ? children :  <Navigate to="/login" />
}
