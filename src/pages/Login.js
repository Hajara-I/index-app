import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthState } = useContext(AuthContext);

	let navigate = useNavigate();

	function login() {
		const data = { username, password };
		axios.post("http://localhost:8080/auth/login", data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				localStorage.setItem("accessToken", response.data.token);
				setAuthState({
					username: response.data.username,
					id: response.data.id,
					status: true,
				});
				navigate("/");
			}
		});
	}

	return (
		<div className="create-new-user-page">
			<div className="new-user-container">
				<div className="create-new-user-left">
					<h4>Bookmark, your digital library organiser</h4>
					<br />
					<h4>Login</h4>
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
					<button onClick={login} className="find-book-btn">
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
