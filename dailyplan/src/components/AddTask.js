import { useState } from 'react';
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'OH NO!',
                text: 'Please add a task.'
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'OH NO!',
                text: 'Fill in your task!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'OH NO!',
                text: 'Fill in your date!'
            })
        } else {
            onSave({ text, day });
        }

        setText('');
        setDay('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add an Item here" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Time</label>
                <input type="text" placeholder="Start time here" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Add task" />
        </form>
    )
}

export default AddTask
