import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	let navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const newUser = { username, password };
		axios.post("http://localhost:8080/auth", newUser).then(() => {
			console.log("New User Created");
			navigate("/Login");
		});
	}

	return (
		<div className="create-new-user-page">
			<div className="new-user-container">
				<div className="create-new-user-left">
					<h4>Bookmark, your digital library organiser</h4>
					<br />
					<h4>Sign Up</h4>
				</div>
				<div className="create-new-user-right">
					<input
						type="text"
						placeholder="Enter your username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={handleSubmit} className="find-book-btn">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}
