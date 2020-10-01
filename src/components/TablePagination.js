import {Card, Pagination} from "react-bootstrap";
import React from "react";

export const TablePagination = () => {
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
        <Card style={{marginTop: '15px'}}>
            <Card.Body style={{padding: '0.25rem'}}>
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
    )
};
