import React from "react"
import "./Task.css"
import {useHistory} from "react-router-dom"
import {CgClose, CgInfo} from "react-icons/cg"
const Task = ({task, handleTaskClick, handleTaskDeletion}) =>{
	const history = useHistory()
	const handleTaskDetailsClick = () =>{
		history.push(`/${task.title}`)
	}
	return (
		<div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {borderleft: 'none'}}>
			<div className="task-title" onClick={() => handleTaskClick(task.id)}>
							{task.title}
			</div>
			<div className="buttons-container">
				<button onClick={handleTaskDetailsClick}  className="see-task-details-button">
					<CgInfo/>
				</button>
				<button onClick={() => handleTaskDeletion(task.id)} className="remove-task-button">
					<CgClose/>
				</button>
			</div>

		</div>	
		)	
}
export default Task