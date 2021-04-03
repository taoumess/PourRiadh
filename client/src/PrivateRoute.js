import { sanitize } from 'express-validator'
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';



const PrivateRoute = ({component:Component, ...rest}) => {
    const auth = useSelector((state) =>state.auth);
    return (
        
        <Route {...rest} 
        render ={props => 
        !auth.isAuth ? <Redirect to="/login"/> : <Component{...props}/>}/>
            
        
    );
};

export default PrivateRoute

