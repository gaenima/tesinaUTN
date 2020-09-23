import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const LoginComponent = ({authenticateUser, authenticated})=>{
    return <div className="card p-3 col-6" >
        <h2>Iniciar sesión</h2>
        <form onSubmit={authenticateUser} >
            <input type="text" placeholder="Usuario" name="username"
            defaultValue="Dev" className="form-control"/>
            <input type="password" placeholder="Contraseña" name="password"
             className="form-control mt-2"/>
            {authenticated === mutations.NOT_AUTHENTICATED
            ? <p>Login incorrecto</p>
            : null
            }
            <button type="submit"
            className="form-control mt-2 btn btn-primary"
            >Entrar</button>
        </form>
        
    </div>

};
const mapStateToProps = ({session})=>({
    authenticated:session.authenticated
})

const mapDispatchToProps = (dispatch)=>({
    authenticateUser(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username,password));
    }
})

export const ConnectLogin = connect(mapStateToProps,mapDispatchToProps)(LoginComponent)