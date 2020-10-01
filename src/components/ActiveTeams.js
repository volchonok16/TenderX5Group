import {Card, Col, ProgressBar, Table} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";


export const ActiveTeams = (props) => {
    return (
        <>
            <Card style={{textAlign: "left"}}>
                <Card.Body>
                    <h5>Активные команды</h5>
                    <hr/>
                    <Table responsive bordered hover>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Тип</th>
                            <th>Роль</th>
                            <th>Руководитель</th>
                            <th>Загрузка</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.data.active_teams.map(s => (
                            <tr>
                                <td><Link to={"/team/"+s.id}>{s.name}</Link></td>
                                <td>{s.type_name}</td>
                                <td>{s.role}</td>
                                <td><Link to={"/user/"+s.leader_id}>{s.leader_name}</Link></td>
                                <td>{ <ProgressBar now={s.user_load} label={s.user_load+'%'}/>}</td>
                                <td>{s.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
};
