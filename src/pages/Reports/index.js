import React from "react";
import {Card, CardDeck, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Reports extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Выгрузка отчетов</Card.Title>
                    <Card.Subtitle style={{marginBottom: '50px'}} className="text-muted">Выберите тип отчета который вы
                        хотели бы выгрузить. Файл будет сгенерирован в виде excel.</Card.Subtitle>
                    <Card.Text>
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Расчет стоимости команды</Card.Title>
                                    <Card.Text>
                                        Детальное описание отчета
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom>
                                            <option>Команда 1</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <small className="text-muted"><Link to="/reports/1">Скачать</Link></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Отчет загрузки ресурсов</Card.Title>
                                    <Card.Text>
                                        Детальное описание отчета
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom>
                                            <option>Команда 1</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <small className="text-muted"><Link to="/reports/2">Скачать</Link></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Отчет загрузки пользователя</Card.Title>
                                    <Card.Text>
                                        Детальное описание отчета
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom>
                                            <option>Сысоев Алексей Владимирович</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <small className="text-muted"><Link to="/reports/3">Скачать</Link></small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
};
