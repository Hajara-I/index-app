import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Homepage from "./pages/Homepage";

function App() {
	// const [authState, setAuthState] = useState({
	// 	username: "",
	// 	id: 0,
	// 	status: false,
	// });

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:3001/auth/auth", {
	// 			headers: {
	// 				accessToken: localStorage.getItem("accessToken"),
	// 			},
	// 		})
	// 		.then((response) => {
	// 			if (response.data.error) {
	// 				setAuthState({ ...authState, status: false });
	// 			} else {
	// 				setAuthState({
	// 					username: response.data.username,
	// 					id: response.data.id,
	// 					status: true,
	// 				});
	// 			}
	// 		});
	// }, []);

	return (
		<div className="App">
			{/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
			<Router>
				<div className="link-container">
					<Link className="link" to="/">
						Home
					</Link>
					{/* {!authState.status ? (
							<>
								<Link className="link" to="/Login">
									Login
								</Link>
								<Link className="link" to="/Registration">
									Registration
								</Link>
							</>
						) : (
							<>
								<button onClick={handleLogout}>Logout</button>
							</>
						)}
						<h1>{authState.username}</h1> */}
				</div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					{/* <Route path="/Registration" element={<Registration />} />
						<Route path="/Login" element={<Login />} /> */}
				</Routes>
			</Router>
			{/* </AuthContext.Provider> */}
		</div>
	);
}

export default App;
