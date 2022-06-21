import React from "react"
import "./Button.css"

const Button = ({children, func})=>{
	return(
		<button className="button" onClick={func}>
			{children}
		</button>
		)
}
export default Button