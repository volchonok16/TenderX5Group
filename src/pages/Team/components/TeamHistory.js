import {Card, Table, Pagination} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export const TeamHistory = (props) =>  {
    let active = 1;
    let size = 3;
    let items = [];
    for (let number = 1; number <= size; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Table responsive bordered hover>
                        <thead>
                        <tr>
                            <th>Действие</th>
                            <th>Пользователь</th>
                            <th>Дата</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Добавлен пользователь</td>
                            <td><Link to="/user/1">Алексей Сысоев</Link></td>
                            <td>2020-01-10</td>
                        </tr>
                        <tr>
                            <td>Удален пользователь</td>
                            <td><Link to="/user/1">Алексей Сысоев</Link></td>
                            <td>2020-01-10</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Pagination style={{marginBottom: 0, justifyContent: 'center'}}>
                        {active !== 1 &&
                        <Pagination.First/>
                        }
                        {items}
                        {active !== size &&
                        <Pagination.Last/>
                        }
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    )
};
