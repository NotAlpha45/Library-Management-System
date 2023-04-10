import * as React from 'react';
import "./book-component.css"
import axios, { Axios } from 'axios'
import BookButtonGroup from './book-button-group';
import BookForm from './book-form';
import SearchBar from '../search_component/search-bar';

export default function BookTable() {

    const [bookData, setBookData] = React.useState([]);
    const [startBookLimit, setStartBookLimit] = React.useState(0);
    const [endBookLimit, setEndBookLimit] = React.useState(10);
    const [totalBooks, setTotalBooks] = React.useState(0);
    const [editMode, setEditMode] = React.useState(false);
    const [toBeEditedBookData, setToBeEditedBookData] = React.useState(null);
    const [toBeSearchedBookName, setToBeSearchedBookName] = React.useState("");

    // This flag just keeps track of whether a book has been deleted or not. 
    // In that case, we need to reload the component, and hence we use this flag to notify
    // useEffect to reload, hence, this flag 
    const [bookDeleteFlag, setBookDeleteFlag] = React.useState(false);

    const [operationTimeStamp, setOperationTimeStamp] = React.useState(Date.now())

    async function loadBooks() {

        await axios.post(
            "http://localhost:5000/get-all-books/",
            {
                startBookLimit: startBookLimit,
                endBookLimit: endBookLimit,
                toBeSearchedBookName: toBeSearchedBookName
            }
        ).then((res) => {
            // console.log(res.data);
            setBookData(res.data.queryResult);
            setTotalBooks(res.data.totalBooks);

        }).catch((err) => {
            console.log(err);
        })


    }

    function increaseBookLimit() {
        if (startBookLimit + endBookLimit <= totalBooks) {
            setStartBookLimit(startBookLimit + endBookLimit);
        }

        console.log(startBookLimit);
    }

    function decreaseBookLimit() {
        if (startBookLimit - endBookLimit <= 0) {
            setStartBookLimit(0);
        }
        else {
            setStartBookLimit(startBookLimit - endBookLimit)
        }
    }

    // To avoid rendering on every refresh
    React.useEffect(function () {
        loadBooks();
    }, [operationTimeStamp, toBeSearchedBookName, editMode, startBookLimit, endBookLimit, bookDeleteFlag])


    return (
        <div>
            <div className="table-container">
                <div>
                    <h2>Book Table</h2>
                    <h3>Add A Book</h3>
                </div>
                <div>
                    <BookForm editMode={editMode} setEditMode={setEditMode} toBeEditedBookData={{}} successMessage={"Book created successfully"} operationType={"create"} setOperationTimeStamp={setOperationTimeStamp} />
                </div>

                <div>
                    <SearchBar toBeSearchedBookName={toBeSearchedBookName} setToBeSearchedBookName={setToBeSearchedBookName} setStartBookLimit={setStartBookLimit} setEndBookLimit={setEndBookLimit} />
                </div>

                <div>
                    <table>
                        <tbody>
                            <tr className='book-heading-row'>
                                <th>Book ID</th>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td colSpan={5}>

                                </td>
                            </tr>
                            {
                                bookData.map(function (book) {
                                    return (
                                        <>
                                            <tr key={book.book_id}>
                                                <td>{book.book_id}</td>
                                                <td>{book.name}</td>
                                                <td>{book.author}</td>
                                                <td>{book.genre}</td>
                                                <td>{book.description}</td>
                                                <BookButtonGroup bookCollection={
                                                    {
                                                        "book_id": book.book_id,
                                                        "deleteFlag": bookDeleteFlag,
                                                        "setDeleteFlag": setBookDeleteFlag,
                                                        "editMode": editMode,
                                                        "setEditMode": setEditMode,
                                                        "toBeEditedBookData": book,
                                                        "setToBeEditedBookData": setToBeEditedBookData
                                                    }
                                                } />

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className='table-nav-footer'>
                <div id='previous-button-section'>
                    <button className='table-nav-button' id='previous-button' type='button' onClick={decreaseBookLimit}>Previous</button>
                </div>
                <div id='next-button-section'>
                    <button className='table-nav-button' id='next-button' type='button' onClick={increaseBookLimit}>Next</button>
                </div>

            </div>

            <div>
                <h2>Edit Book</h2>
            </div>
            <div>
                {editMode ? (
                    <BookForm editMode={editMode} setEditMode={setEditMode} toBeEditedBookData={toBeEditedBookData} successMessage={"Book edited successfully"} operationType={"update"} setOperationTimeStamp={setOperationTimeStamp} />
                ) : ""}
            </div>


        </div>
    );
}