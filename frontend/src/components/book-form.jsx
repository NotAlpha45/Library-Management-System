import React, { useState } from "react";
import "./book-form.css";

const BookForm = ({ editMode, setEditMode }) => {
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [bookReview, setBookReview] = useState("");

    console.log(editMode);


    const handleFormSubmit = (event) => {
        setEditMode(false);
        event.preventDefault();
        // Handle form submit logic here
        console.log({
            bookName,
            bookAuthor,
            bookGenre,
            bookReview,
        });
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
                        value={bookReview}
                        onChange={(e) => setBookReview(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleFormSubmit} className="book-edit-component-submit-button">
                    Save
                </button>
            </form>
        </div>

    );
};

export default BookForm;
