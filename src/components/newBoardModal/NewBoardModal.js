import React from 'react';
import {
    ModalContainer,
} from './newBoardModal.styles'

class NewBoardModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            columns: [],
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleColumnChange = (event) => {
        this.setState({ columns: event.target.value.split(',') });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBoard(this.state);
    }

    render() {
        <ModalContainer>
            <form onSubmit={this.handleSubmit}></form>
        </ModalContainer>
    }
}

export default NewBoardModal;