import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

function App() {
    // All States
    const [loading, setloading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])
    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
        // eslint-disable-next-line
    }, [])
    // Add Task
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }

        setTasks([...tasks, newTask]);

        Swal.fire({
            icon: 'success',
            title: 'NICE!',
            text: 'You added a task'
        })
        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
    }
    // Delete Task
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);
        setTasks(deleteTask);
        Swal.fire({
            icon: 'error',
            title: 'YOU GOT IT!',
            text: 'Task deleted.'
        })
        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }
    // Complete Task
    const completeTask = (id) => {
        const completeTask = tasks.filter((task) => task.id !== id);
        setTasks(completeTask);
        Swal.fire({
            icon: 'success',
            title: 'GOOD JOB!',
            text: 'Task complete.'
        })
        localStorage.setItem("taskAdded", JSON.stringify(completeTask));
    }
    // Edit Task
    const editTask = (id) => {
        const text = prompt("Task Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('taskAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    day: day,
                    id: uuidv4()
                }
            }
            return x;
        })
        Swal.fire({
            icon: 'success',
            title: 'TASK EDITED',
        })
        localStorage.setItem("taskAdded", JSON.stringify(myData));
        window.location.reload();
    }
    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="d-flex align-items-center">
                            <h2>Loading planner...</h2>
                            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                        {showAddTask && <AddTask onSave={addTask} />}
                        <h4>Items on your schedule: {tasks.length}</h4>
                        {
                            tasks.length > 0
                                ?
                                (<Tasks tasks={tasks} onDelete={deleteTask} onCompl={completeTask} onEdit={editTask} />)
                                :
                                ("You haven't added a task yet!")
                        }
                    </div>
            }
        </>
    )
}

export default App;