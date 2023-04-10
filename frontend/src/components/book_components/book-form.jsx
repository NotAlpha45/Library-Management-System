import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./book-form.css";

const BookForm = ({ editMode, setEditMode, toBeEditedBookData, successMessage, operationType, setOperationTimeStamp }) => {
    const [bookName, setBookName] = useState(toBeEditedBookData.name ?? "");
    const [bookAuthor, setBookAuthor] = useState(toBeEditedBookData.author ?? "");
    const [bookGenre, setBookGenre] = useState(toBeEditedBookData.genre ?? "");
    const [bookDescription, setBookDescription] = useState(toBeEditedBookData.description ?? "");
    const [bookId, setBookId] = useState(toBeEditedBookData.book_id ?? "")

    useEffect(() => {
        setBookName(toBeEditedBookData.name ?? "");
        setBookAuthor(toBeEditedBookData.author ?? "");
        setBookGenre(toBeEditedBookData.genre ?? "");
        setBookDescription(toBeEditedBookData.description ?? "");
        setBookId(toBeEditedBookData.book_id ?? "");
    }, [toBeEditedBookData]);


    const handleFormSubmit = async (event) => {

        event.preventDefault();

        if (operationType == "update") {
            await axios.post(
                "http://localhost:5000/update-book/",

                {
                    "book_id": bookId,
                    "name": bookName,
                    "author": bookAuthor,
                    "genre": bookGenre,
                    "description": bookDescription
                }
            ).then(() => {
                setEditMode(false);
                setOperationTimeStamp(Date.now())
                alert(`${successMessage}`);
            }).catch((error) => {
                alert(`Some error occured ${error}`)
            })
        } else if (operationType == "create") {

            if (bookName == "" || bookAuthor == "" || bookGenre == "") {
                alert("Please enter book name, author name and genre")
                return
            }

            await axios.post(
                "http://localhost:5000/post-book/",

                {
                    "name": bookName,
                    "author": bookAuthor,
                    "genre": bookGenre,
                    "description": bookDescription
                }
            ).then(() => {
                setEditMode(false);
                setOperationTimeStamp(Date.now())
                alert(`${successMessage}`);
            }).catch((error) => {
                alert(`Some error occured ${error}`)
            })
        }


    };

    return (
        <div>
            <form className="book-edit-component">
                <label className="book-edit-component-label">
                    Book Name:
                    <input
                        className="book-edit-component-input"
                        type="text"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        required
                    />
                </label>
                <label className="book-edit-component-label">
                    Book Author:
                    <input
                        className="book-edit-component-input"
                        type="text"
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                        required
                    />
                </label>
                <label className="book-edit-component-label">
                    Book Genre:
                    <select
                        className="book-edit-component-select"
                        value={bookGenre}
                        onChange={(e) => setBookGenre(e.target.value)}
                        required
                    >
                        <option value="">--Select Genre--</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Romance">Romance</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </label>
                <label className="book-edit-component-label">
                    Review:
                    <textarea
                        className="book-edit-component-textarea"
                        value={bookDescription}
                        onChange={(e) => setBookDescription(e.target.value)}
                    />
                </label>
                <div className="book-edit-component-button-group">
                    <button id="save-button" type="button" onClick={(event) => { handleFormSubmit(event) }} className="book-edit-component-submit-button">
                        Save
                    </button>
                    <button id="cancel-button" type="button" onClick={(event) => { setEditMode(false); }} className="book-edit-component-submit-button">
                        Cancel
                    </button>
                </div>

            </form>
        </div>

    );
};

export default BookForm;
