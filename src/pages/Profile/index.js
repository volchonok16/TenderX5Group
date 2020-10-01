import React from "react";
import {Card, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {UserCard} from "../../components/UserCard";
import {ActiveTeams} from "../../components/ActiveTeams";
import {HistoryModal} from "../../components/HistoryModal";
import {EditModal} from "./components/EditModal";

import data from "../../data";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            historyModalShow: false,
            editModalShow: false,
            items: data.users[0]
        };
    }

    changeState = (typeModal, state) => {
        if (typeModal === 'historyModal')
            this.setState({
                historyModalShow: state
            });
        else if (typeModal === 'editModal')
            this.setState({
                editModalShow: state
            });
    };

    render() {
        const item = this.state.items;
        return (
            <>
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
                                            <span
                                                style={{padding: "1.25rem", borderBottom: "1px solid rgba(0,0,0,.05)"}}>Мой профиль</span>
                                            <Link onClick={() => this.changeState(
                                                'editModal', true
                                            )} to="#edit" style={{
                                                padding: "1.25rem",
                                                borderBottom: "1px solid rgba(0,0,0,.05)"
                                            }}>Редактировать</Link>
                                            <Link to="#history" onClick={() => this.changeState(
                                                'historyModal', true
                                            )}
                                                  style={{padding: "1.25rem"}}>Архив команд</Link>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <HistoryModal
                    show={this.state.historyModalShow}
                    onHide={() => this.changeState(
                        'historyModal', false
                    )}
                />

                <EditModal
                    show={this.state.editModalShow}
                    onHide={() => this.changeState(
                        'editModal', false
                    )}
                />
            </>
        )
    }
};
