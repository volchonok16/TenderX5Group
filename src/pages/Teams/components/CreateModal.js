import {Modal, Form} from "react-bootstrap";
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
                    Создание новой команды
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Название команды</Form.Label>
                        <Form.Control type="text" placeholder=""/>
                        <Form.Text className="text-muted">
                            Название должно быть уникальным
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Руководитель</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Сысоев Алексей Владимирович</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Добавить</Button>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
};
