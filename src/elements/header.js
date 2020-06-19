import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import TitleComponent from "../pages/title";


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this)
    }

    state = {
        toDashboard: false,
    };

    handleClickLogout(){
        localStorage.removeItem('token');
        localStorage.setItem('isLoggedIn', false);
        this.setState({ toDashboard: true });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <TitleComponent title="React CRUD Login "></TitleComponent>

        <Link to={'/'} className="navbar-brand mr-1">{localStorage.getItem('username')}</Link>

                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
                    <i className="fas fa-bars"></i>
                </button>


                <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <Link to={'#'} onClick={this.handleClickLogout} >Logout</Link>
                </div>
            </nav>
        );
    }
}
