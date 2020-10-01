import React from "react";
import {Breadcrumb, Badge, Tabs, Tab} from "react-bootstrap";
import {DefaultInfo} from "./components/DefaultInfo";
import {TeamMembers} from "./components/TeamMembers";
import {TeamHistory} from "./components/TeamHistory";

export default class Team extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb>
                    <Breadcrumb.Item href="/teams">Команды</Breadcrumb.Item>
                    <Breadcrumb.Item active>Команда 1</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{textAlign: 'left'}}>
                    <Badge variant="primary">АКТИВНАЯ</Badge>
                </div>
                <br/>

                <Tabs defaultActiveKey="info" id="uncontrolled-tab-example" style={{marginBottom: '0', margin: 0}}>
                    <Tab eventKey="info" title="Общая информация">
                        <DefaultInfo/>
                    </Tab>
                    <Tab eventKey="members" title="Активные участники (4)">
                        <TeamMembers/>
                    </Tab>
                    <Tab eventKey="history" title="История команды">
                        <TeamHistory/>
                    </Tab>
                </Tabs>
            </>
        )
    }
};
