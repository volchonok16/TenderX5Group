import {Modal, Form, ProgressBar, Table} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {TablePagination} from "./TablePagination";

export const HistoryModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Архив команд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive bordered hover>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Тип</th>
                        <th>Роль</th>
                        <th>Руководитель</th>
                        <th>Дата приема</th>
                        <th>Дата выхода</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Link to="/team/1">Команда 1</Link></td>
                        <td>Продуктовая</td>
                        <td>Разработчик</td>
                        <td><Link to="/user/1">Алексей Сысоев</Link></td>
                        <td>2020-05-29</td>
                        <td>2020-06-31</td>
                    </tr>
                    <tr>
                        <td><Link to="/team/1">Команда 2</Link></td>
                        <td>Продуктовая</td>
                        <td>Разработчик</td>
                        <td><Link to="/user/1">Алексей Сысоев</Link></td>
                        <td>2020-05-29</td>
                        <td>2020-06-31</td>
                    </tr>
                    </tbody>
                </Table>
                <TablePagination/>
            </Modal.Body>
        </Modal>
    )
};
