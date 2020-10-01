import React from "react";
import {TableHeader} from "./components/TableHeader";
import {TableResult} from "./components/TableResult";
import {TablePagination} from "../../components/TablePagination";
import {CreateModal} from "../Teams/components/CreateModal";

import data from "../../data";

export default class Teams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            modalShow: false,
            items: data.teams
        };
    }

    changeState = (state) => {
        this.setState({
            modalShow: state
        })
    };

    render() {
        return (
            <>
                <TableHeader changeState={this.changeState}/>
                <TableResult data={this.state.items}/>
                <TablePagination/>

                <CreateModal
                    show={this.state.modalShow}
                    onHide={() => this.changeState(false)}
                />
            </>
        )
    }
};
