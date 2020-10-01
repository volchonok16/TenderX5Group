import {Card, CardGroup, ProgressBar} from "react-bootstrap";
import React from "react";
import img from "../../../assets/img/user_icon.svg";
import {Link} from "react-router-dom";


export const TeamMembers = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <CardGroup>
                        <Card style={{margin: '1.66666666667%', flex: '0 0 30%'}}>
                            <Link to="/user/1">
                                <Card.Img variant="top" src={img}/>
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <p>Сысоев Алексей Владимирович</p>
                                    <p><strong>ПО</strong></p>
                                    <ProgressBar now={25} label={`25%`}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: '1.66666666667%', flex: '0 0 30%'}}>
                            <Link to="/user/1">
                                <Card.Img variant="top" src={img}/>
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <p>Сысоев Алексей Владимирович</p>
                                    <p><strong>Аналитик</strong></p>
                                    <ProgressBar now={60} label={`60%`}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: '1.66666666667%', flex: '0 0 30%'}}>
                            <Link to="/user/1">
                                <Card.Img variant="top" src={img}/>
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <p>Сысоев Алексей Владимирович</p>
                                    <p><strong>Разработчик</strong></p>
                                    <ProgressBar now={15} label={`15%`}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: '1.66666666667%', flex: '0 0 30%'}}>
                            <Link to="/user/1">
                                <Card.Img variant="top" src={img}/>
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <p>Сысоев Алексей Владимирович</p>
                                    <p><strong>Аналитик</strong></p>
                                    <ProgressBar now={90} label={`90%`}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Card.Body>
            </Card>
        </>
    )
};
