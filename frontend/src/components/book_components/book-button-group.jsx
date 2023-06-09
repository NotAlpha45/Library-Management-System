import * as React from "react"
import "./book-button-group.css"
import axios from "axios";
import Popup from "./notification-popup";

export default function BookButtonGroup({ bookCollection, setOperationTimeStamp }) {
    // console.log(book_id);

    function deleteBook() {
        axios.post("http://localhost:5000/delete-book/", {

            "book_id": bookCollection.book_id

        }).then((res) => {
            setOperationTimeStamp(Date.now());
            alert("Book deleted");

        }).catch((err) => {

            alert(err.message);
        })
    }

    return (
        <div className='table-button-container'>
            <button className='table-button' id='editButton' type='button' onClick={() => { bookCollection.setToBeEditedBookData(bookCollection.toBeEditedBookData); bookCollection.setEditMode(true); window.scrollTo({ top: document.documentElement.scrollHeight }); }}>Edit</button>
            <button className='table-button' id='deleteButton' type='button' onClick={deleteBook}>Delete</button>
        </div>
    )
}