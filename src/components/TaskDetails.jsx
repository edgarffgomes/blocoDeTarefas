import React from "react"
import Button from "./Button"
import "./TaskDetails.css"
import {useParams, useHistory} from "react-router-dom"
const TaskDetails = () =>{
	const params = useParams()
	const history = useHistory()
	const handleTaskBackButton = () =>{
		history.goBack()
	}
	return(
		<>
			<div className="back-button-container">
				<Button func={handleTaskBackButton}>Voltar</Button>
			</div> 
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Curabitur eros dui, pellentesque sit amet urna efficitur, commodo fermentum elit.
					Donec non magna elit. 
					Quisque vulputate dolor in nisl fringilla congue vitae at sapien. 
					Aenean vitae lectus eget magna volutpat malesuada non et enim. 
					Etiam iaculis suscipit erat commodo vehicula. 
					Cras molestie, dui nec blandit commodo, risus dui semper augue, sed faucibus turpis mi vitae magna. 
					Vestibulum placerat malesuada nisl, vel eleifend lacus volutpat sit amet. Donec ac leo purus.
					Curabitur placerat malesuada tincidunt. Aliquam erat volutpat. In sed sem urna.	
				</p>
			</div>
		</>
		)
}
export default TaskDetails