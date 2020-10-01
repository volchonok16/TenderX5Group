import {Card, Container, Row, Col} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";


export const DefaultInfo = () => {
    return (
        <>
            <Card>
                <Card.Body style={{textAlign: "left"}}>
                    <Container style={{padding: 0}}>
                        <Row>
                            <Col xs={8}>
                                <h4>Команда 1</h4>
                                <p>Mauris molestie vitae augue ac interdum. Vestibulum at hendrerit justo. Nullam vel
                                    leo lectus. In
                                    venenatis, velit vel imperdiet posuere, magna quam porta arcu, sodales congue velit
                                    tortor non
                                    nibh. Ut eget sapien in turpis ultrices tristique at a lacus. Donec euismod elit
                                    felis, nec
                                    faucibus ante fermentum ac. Sed eget turpis sed neque tincidunt dictum.</p>
                            </Col>
                            <Col>
                                <h4>Руководитель</h4>
                                <Link to="/user/1">
                                    <span>Сысоев Алексей Владимирович</span>
                                </Link><br/><br/>
                                <p><strong>Тип</strong> - Продуктивная <br/>
                                    <strong>Навыки</strong> - js, python <br/>
                                    <strong>Дата создания</strong> - 2020-01-20</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
};
