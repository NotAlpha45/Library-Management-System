import * as React from 'react';
import "./book-component.css"

export default function BookTable() {
    return (
        <div>
            <>
                <h2>Hoverable Table</h2>
                <p>Move the mouse over the table rows to see the effect.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Book ID</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>a thousand years of solitude</td>
                            <td>Gabriel Garcea Marques</td>
                            <td>Fiction</td>
                            <td>A book centered around the fate of the Latin America back in the 90s</td>
                            <button className='tableButton' id='editButton' type='button'>Edit</button>
                            <button className='tableButton' id='deleteButton' type='button'>Delete</button>
                        </tr>
        

                    </tbody>
                </table>
            </>
        </div>
    );
}