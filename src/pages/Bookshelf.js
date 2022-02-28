import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Bookshelf() {
	let { id } = useParams();
	const [username, setUsername] = useState("");
	const [listOfBooks, setListOfBooks] = useState([]);

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [img, setImg] = useState("");

	useEffect(() => {
		axios.get(`http://localhost:8080/auth/basicinfo/${id}`).then((response) => {
			console.log(response);
			console.log(`This is ${response.data.username}bookshelf`);
			setUsername(response.data.username);
		});

		axios.get(`http://localhost:8080/books/byuserId/${id}`).then((response) => {
			console.log(response.data);
			setListOfBooks(response.data);
		});
	}, []);

	return (
		<div className="bookshelf-container">
			<br />
			<br />
			<h1 className="bookshelf-container-header">{`${username}'s bookshelf`}</h1>
			<div className="bookslist">
				{listOfBooks.map((item, key) => {
					return (
						<div className="book-card">
							<img src={item.img} alt="book cover" className="book-img" />
							<h5 className="book-title">{item.title}</h5>
							<h6 className="book-author">{item.author}</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
}
