import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Bookshelf from "./Pages/Bookshelf";
import BookshelvesList from "./Pages/BookshelvesList";
import Explore from "./Pages/Explore";

function App() {
	const [authState, setAuthState] = useState({
		username: "",
		id: 0,
		status: false,
	});

	useEffect(() => {
		axios
			.get("http://localhost:8080/auth/auth", {
				headers: {
					accessToken: localStorage.getItem("accessToken"),
				},
			})
			.then((response) => {
				if (response.data.error) {
					setAuthState({ ...authState, status: false });
				} else {
					setAuthState({
						username: response.data.username,
						id: response.data.id,
						status: true,
					});
				}
			});
	}, []);

	function handleLogout() {
		localStorage.removeItem("accessToken");
		window.location.reload();
		setAuthState({
			username: "",
			id: 0,
			status: false,
		});
	}

	return (
		<div className="App">
			<AuthContext.Provider value={{ authState, setAuthState }}>
				<Router>
					<div className="link-container">
						{/* <div className="bookmark-logo"></div> */}
						<Link className="bookmark-logo" to="/"></Link>

						<Link className="link" to="/Bookshelves">
							All Bookshelves
						</Link>

						{!authState.status ? (
							<>
								<Link className="link" to="/Login">
									Log In
								</Link>
								<Link className="link" to="/Registration">
									Sign Up
								</Link>
							</>
						) : (
							<>
								<Link to={`/Explore`} className="link">
									Explore
								</Link>
								<Link to={`/Bookshelf/${authState.id}`} className="link">
									My Bookshelf
								</Link>
								<button onClick={handleLogout}>Logout</button>
							</>
						)}

						{/* <h1>{authState.username}</h1> */}
					</div>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/Registration" element={<Registration />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Bookshelf/:id" element={<Bookshelf />} />
						<Route path="/Bookshelves" element={<BookshelvesList />} />
						<Route path="/Explore" element={<Explore />} />
					</Routes>
				</Router>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
