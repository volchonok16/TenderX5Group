import React from "react";
import {Card, Breadcrumb, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {UserCard} from "../../components/UserCard";
import {ActiveTeams} from "../../components/ActiveTeams";
import {HistoryModal} from "../../components/HistoryModal";

import data from "../../data";

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            modalShow: false,
            items: data.users[this.props.match.params.number - 1]
        };
    }

    changeState = (state) => {
        this.setState({
            modalShow : state
        })
    };

    render() {
        const item = this.state.items;
        return (
            <>
                <Breadcrumb>
                    <Breadcrumb.Item href="/users">Пользователи</Breadcrumb.Item>
                    <Breadcrumb.Item active>{item.user_name} ({item.tn})</Breadcrumb.Item>
                </Breadcrumb>
                <Container style={{padding: 0}}>
                    <Row>
                        <Col xs={8}>
                            <UserCard data={item}/>
                            <br/>
                            <ActiveTeams data={item}/>
                        </Col>
                        <Col xs={4}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Card style={{textAlign: "left"}}>
                                        <span style={{
                                            padding: "1.25rem",
                                            borderBottom: "1px solid rgba(0,0,0,.05)"
                                        }}>Профиль</span>
                                            <Link to="#history" onClick={() => this.changeState(true)}
                                                  style={{padding: "1.25rem"}}>Архив команд</Link>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <HistoryModal
                    show={this.state.modalShow}
                    onHide={() => this.changeState(false)}
                />
            </>
        )
    }
};
