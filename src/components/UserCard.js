import {Card, Container, Row, Col, ProgressBar} from "react-bootstrap";
import React from "react";
import img from "../assets/img/user_icon.svg";

export const UserCard = (props) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Container style={{padding: 0}}>
                        <Row>
                            <Col xs={4}>
                                <img style={{width: '100%'}} src={img} alt="logo"/>
                            </Col>
                            <Col xs={8} style={{textAlign: "left"}}>
                                <h4>{props.data.user_name}</h4>
                                <p><strong>{props.data.role}</strong> - {props.data.specialization}</p>

                                <p><strong>Текущая загрузка сотрудника:</strong></p>
                                <ProgressBar now={props.data.load} label={props.data.load+'%'}/>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{textAlign: "left"}}>
                <Card.Body>
                    <h5>Контактные данные</h5>
                    <hr/>
                    <Container>
                        <Row>
                            <Col>
                                <p>Офис: {props.data.office}</p>
                                <p>Email: {props.data.email}</p>
                            </Col>
                            <Col>
                                <p>Телефон: {props.data.phone}</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
};
