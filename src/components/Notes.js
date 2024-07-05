import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

export default function Notes(props) {

    let navigate = useNavigate();

    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", edittitle: "", editdescription: "", edittag: "" });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, edittitle: currentNote.title, editdescription: currentNote.description, edittag: currentNote.tag });
    }

    const handleClick = (event) => {
        editNote(note.id, note.edittitle, note.editdescription, note.edittag);
        refClose.current.click();
        props.showAlert("Note Updated Successfully", "success");
    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />
            {/* Button trigger modal */}
            <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/* Vertically centered modal */}
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="edittitle" className="form-label">Title</label>
                                    <input value={note.edittitle} type="text" className="form-control" id="edittitle" name="edittitle" aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editdescription" className="form-label">Description</label>
                                    <input value={note.editdescription} type="text" className="form-control" id="editdescription" name="editdescription" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edittag" className="form-label">Tag</label>
                                    <input value={note.edittag} type="text" className="form-control" id="edittag" name="edittag" onChange={onChange} minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.edittitle.length < 5 || note.editdescription.length < 5 || note.edittag.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container row my-3'>
                <h2>Your Notes</h2>
                <div className="container">
                    {notes.length === 0 && 'No Notes to display'}
                </div>
                {/* {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
                })} */}
                {notes && notes.map((note) => {
                    return (
                        <Noteitem
                            key={note._id}
                            updateNote={updateNote}
                            note={note}
                            showAlert={props.showAlert}
                        />
                    );
                })}
            </div>
        </>
    )
}
