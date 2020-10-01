import {Card, Table} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const TableResult = (props) => {
    return (
        <Card style={{marginTop: '15px'}}>
            <Card.Body>
                <Table responsive bordered hover>
                    <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>ТН</th>
                        <th>Роль</th>
                        <th>Уровень</th>
                        <th>Специализация</th>
                        <th>Компетенция</th>
                        <th>Стеки</th>
                        <th>Состояние</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map(s => (
                        <tr>
                            <td><Link to={"/user/" + s.id}>{s.user_name}</Link></td>
                            <td>{s.tn}</td>
                            <td>{s.role}</td>
                            <td>{s.lvl}</td>
                            <td>{s.specialization}</td>
                            <td>{s.competence}</td>
                            <td>{s.stacks}</td>
                            <td>{s.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
};
