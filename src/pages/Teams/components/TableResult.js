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
                        <th>Название</th>
                        <th>Тип</th>
                        <th>Количество сотрудников</th>
                        <th>Руководитель</th>
                        <th>Навыки</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map(s => (
                        <tr>
                            <td><Link to={"/team/"+s.id}>{s.name}</Link></td>
                            <td>{s.type_name}</td>
                            <td>{s.size}</td>
                            <td><Link to={"/user/"+s.leader_id}>{s.leader_name}</Link></td>
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
