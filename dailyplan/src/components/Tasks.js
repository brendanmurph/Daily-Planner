import Task from './Task';
import "../index.css"

const Tasks = ({ tasks, onDelete, onEdit, onCompl }) => {
    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onCompl={onCompl} onEdit={onEdit} />))}
        </>
    )
}

export default Tasks;
