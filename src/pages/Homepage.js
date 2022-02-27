import React from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";

export default function Homepage() {
	const { authState } = useContext(AuthContext);

	return (
		<div className="home-body" id="home-body">
			<div className="home-inner">
				<p>{`Hi ${authState.username},`}</p>
				<p>what are you reading today?</p>
			</div>
		</div>
	);
}
