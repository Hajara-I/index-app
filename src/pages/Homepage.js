import React from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Homepage() {
	const { authState } = useContext(AuthContext);
	// let navigate = useNavigate();

	return (
		<div className="home-body" id="home-body">
			<div className="home-inner">
				<p>{`Hi ${authState.username},`}</p>
				<p>what are you reading today?</p>
				<div className="btn-container">
					{/* <div className="check-if-logged-in">
						{!authState.status ? (
							<></>
						) : (
							<>
								<Link className="user-card" to={`/Bookshelf/${authState.id}`}>
									<div>My bookshelf</div>
								</Link>
							</>
						)}
					</div> */}
				</div>
			</div>
		</div>
	);
}
