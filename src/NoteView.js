import React, {Component} from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';
import nl2br from 'react-newline-to-break';

class NoteView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { redirect : false};

        this.deleteNote = this.deleteNote.bind(this);
        this.editNote = this.editNote.bind(this);
    }

    deleteNote(event){
        event.preventDefault();

        this.props.deleteNote(this.props.note.id);
    }

    editNote(event){
        event.preventDefault();

        this.props.editNote(this.props.note.id);
    }

    renderFormattedDate(){
        return 'Last edited:' + moment(this.props.note.date).format("DD MMM YYYY [at] HH:mm");
    }

    render() {
        if (this.state.redirect || !this.props.note) {
            return <Redirect push to="/"/>;
        }

        return (
            <div className="card">
                <div className="card-header">
                    <h4>{this.props.note.title}</h4>
                </div>
                <div className="card-body">
                    <p className="text-center font-weight-light small text-muted">{this.renderFormattedDate()}</p>
                    <p className="card-text">{nl2br(this.props.note.description)}</p>
                    <button onClick={this.deleteNote} className="btn btn-danger">Delete Note</button>
                    <button onClick={this.editNote} className="btn btn-success float-right">Edit Note</button>
                </div>
            </div>
        )
    }
}

export default NoteView;