import React, {Component} from 'react';
import { Redirect } from 'react-router';

const divStyle = {
    display: 'none'
};

class NoteForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {redirect: false};

        this.saveNote = this.saveNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    saveNote(event) {
        event.preventDefault();
        if (this.title.value === "") {
            alert("Title is needed");
        } else {
            const note = {
                id: Number(this.id.value),
                title: this.title.value,
                description: this.description.value
            }
            this.props.persistNote(note);
            this.setState({redirect: true});
        }
    }

    deleteNote(event) {
        console.log('deleteNote');
        event.preventDefault();
        this.props.deleteNote(this.props.note.id);
    }

    renderFormTitleAction() {
        return (this.props.note.id !== undefined) ? "Edit Note" : "Add Note";
    }

    renderFormButtons() {
        if (this.props.note.id !== undefined) {
            return (<div>
                <button type="submit" className="btn btn-success float-right">Save Note</button>
                <button onClick={this.deleteNote} className="btn btn-danger">Delete Note</button>
            </div>);
        }
        return (

            <button type="submit" className="btn btn-success float-right">Save Note</button>
        );
    }

    render() {
        if (this.state.redirect) {
            if (!this.props.note) {
                return <Redirect push to="/"/>;
            }
            return <Redirect push to={`/note/${this.props.note.id}`}/>;
        }
        return (
            <div className="card">
                <div className="card-header">
                    {this.renderFormTitleAction()}
                </div>
                <div className="card-body">

                    <form ref="noteForm" onSubmit={this.saveNote}>
                        <div className="form-group">

                            <p><input className="form-control" style={divStyle} disabled ref={id => this.id = id}
                                      defaultValue={this.props.note.id}/></p>

                            <p><input className="form-control" ref={title => this.title = title}
                                      defaultValue={this.props.note.title}
                                      placeholder="enter title"/></p>

                            <p><textarea className="form-control" rows="10"
                                         ref={description => this.description = description}
                                         defaultValue={this.props.note.description} placeholder="enter description"/>
                            </p>
                        </div>
                        {this.renderFormButtons()}

                    </form>
                </div>

            </div>
        )
    }
}

export default NoteForm;