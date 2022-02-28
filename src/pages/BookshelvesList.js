import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../helpers/AuthContext";

export default function BookshelvesList() {
	const [listOfBookshelves, setListofBookshelves] = useState([]);

	let navigate = useNavigate();

	function getAllBookshelves() {
		axios.get("http://localhost:8080/auth").then((response) => {
			console.log(response);
			setListofBookshelves(response.data);
		});
	}

	useEffect(getAllBookshelves, []);

	return (
		<div className="users-table-pg">
			<div className="user-container">
				<div className="user-table-nav">
					<p>Select a bookshelf to view</p>
				</div>
				<div className="user-table-bottom">
					{listOfBookshelves.map((item, key) => {
						return (
							<div
								className="user-card"
								// onClick={() => {
								// 	navigate(`/library/${item.id}`);
								// }}
							>
								<Link className="default-link" to={`/Bookshelf/${item.id}`}>
									<h3>{item.username}'s bookshelf</h3>
								</Link>
								<br />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
