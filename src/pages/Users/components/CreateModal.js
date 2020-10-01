import {Modal, Form, Container, Row, Col} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";


export const CreateModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Создание нового пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ФИО</Form.Label>
                                    <Form.Control type="text" placeholder=""/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ТН</Form.Label>
                                    <Form.Control type="number" placeholder=""/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Роль</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">Выбрать...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Специализация</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">Выбрать...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Компетенция</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">Выбрать...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Руководитель</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">Выбрать...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Набор стеков</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        multiple
                                    >
                                        <option value="0">Выбрать...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Фото сотрудника:"/>
                            </Form.Group>
                        </Form>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Добавить</Button>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
};
