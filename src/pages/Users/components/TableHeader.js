import {Card, Col, Row, Container, InputGroup, FormControl} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";


export const TableHeader = (props) => {
    return (
        <Card style={{textAlign: 'left', borderTopRightRadius: 0}}>
            <Card.Body>
                <Container style={{paddingLeft: 0, paddingRight: 0}}>
                    <div style={{position: 'absolute', right: '-1px', top: '-43px'}}>
                        <Button onClick={() => props.changeState(true)} style={{
                            border: '1px solid rgba(0,0,0,.125)',
                            borderRadius: 0,
                            backgroundColor: 'white',
                            color: 'gray'
                        }}>Создать пользователя</Button>
                    </div>
                    <Row>
                        <Col xs={6}>Результат: 130 пользователей</Col>
                        <Col style={{textAlign: 'right'}}>
                            Поиск
                        </Col>
                        <Col style={{textAlign: 'right'}}>
                            <InputGroup style={{marginTop: '-6px', height: '1px'}}>

                                <FormControl
                                    placeholder=""
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
};
