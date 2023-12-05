import { FaPencilAlt, FaCheck, FaTimes } from 'react-icons/fa';
import "../index.css"

const Task = ({ task, onDelete, onEdit, onCompl }) => {
    return (
        <div>
            <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold">Item:</span> {task.text}
                    </p>
                    <p className="taskDate"><span className="textBold">Start time:</span> {task.day}</p>
                </div>
                <div>
                    <p><FaCheck onClick={() => onCompl(task.id)} className="checkIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
                    <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Task
