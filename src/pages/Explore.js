import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

export default function Explore() {
	const { authState } = useContext(AuthContext);
	const [bookname, setBookName] = useState("");
	const [listOfBooks, setListOfBooks] = useState([]);

	function handleSubmit(e) {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=${bookname}&maxResults=${4}&startIndex=${0}`
			)
			.then((response) => {
				console.log(response.data.items);
				setListOfBooks(response.data.items);
			});
	}

	// const addToMyBookshelf = () => {
	// 	axios
	// 		.post(
	// 			"http://localhost:8080/books",
	// 			{
	// 				title:{book.volumeInfo.title},
	// 				author: book.volumeInfo.authors[0],
	// 				img: book.volumeInfo.imageLinks.thumbnail,
	// 				id: authState.id,
	// 				username: authState.username,
	// 			},
	// 			{
	// 				headers: {
	// 					accessToken: localStorage.getItem("accessToken"),
	// 				},
	// 			}
	// 		)
	// 		.then((response) => {
	// 			if (response.data.error) {
	// 				console.log(response.data.error);
	// 			} else {
	// 				console.log("new book added");
	// 			}
	// 		});
	// };

	return (
		<div className="create-new-user-page">
			<div className="new-book-container">
				<div className="create-new-book-left">
					<h5>Find a book</h5>
					<br />
					<input
						type="text"
						placeholder="Enter book title..."
						onChange={(e) => setBookName(e.target.value)}
					/>
					<button onClick={handleSubmit} className="create-user-btn">
						Submit
					</button>
				</div>
				<div className="create-new-book-right">
					{listOfBooks.map((book, key) => {
						let img = "";
						if (book.volumeInfo.imageLinks) {
							img = book.volumeInfo.imageLinks.thumbnail;
						}
						return (
							<div className="book-card">
								<img src={img} alt="book cover" className="book-img" />
								<br />

								<h5 className="book-title">{book.volumeInfo.title}</h5>
								<h6 className="book-author">{book.volumeInfo.authors[0]}</h6>
								<br />
								<button
									className="add-book-btn"
									onClick={() => {
										axios
											.post(
												"http://localhost:8080/books",
												{
													title: book.volumeInfo.title,
													author: book.volumeInfo.authors[0],
													img: book.volumeInfo.imageLinks.thumbnail,
													UserId: authState.id,
													username: authState.username,
												},
												{
													headers: {
														accessToken: localStorage.getItem("accessToken"),
													},
												}
											)
											.then((response) => {
												if (response.data.error) {
													console.log(response.data.error);
												} else {
													console.log("new book added");
												}
											});
									}}
								>
									Add to my bookshelf
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
