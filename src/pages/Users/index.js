import React from "react";
import {TableHeader} from "../Users/components/TableHeader";
import {TableResult} from "../Users/components/TableResult";
import {TablePagination} from "../../components/TablePagination";
import {CreateModal} from "../Users/components/CreateModal";

import data from "../../data";


export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            modalShow: false,
            items: data.users
        };
    }

    changeState = (state) => {
        this.setState({
            modalShow : state
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
