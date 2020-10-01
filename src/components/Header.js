import {Navbar, Nav} from "react-bootstrap";
import React from "react";
import img from "../assets/img/user_icon.svg";
import logo from "../assets/img/combo-chart.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <Navbar bg="white" expand="lg" style={{boxShadow: "0 3px 10px 0 rgba(0,0,0,.05)"}}>
            <Navbar.Brand href="/">
                <img style={{width: '50px'}} src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/teams">Команды</Nav.Link>
                    <Nav.Link href="/users">Пользователи</Nav.Link>
                    <Nav.Link href="/reports">Отчеты</Nav.Link>
                </Nav>
                <Nav inline>
                    <Link to="/profile" variant="light"> <img style={{width: '40px', borderRadius: "28px"}} src={img}
                                                              alt="logo"/> </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
