import React from 'react'

function LibraryBooks() {

    const books = [
        { 
            code: 'Fs 001', 
            name: 'Full Stack Development',
            price: 10

        },
        { 
            code: 'Rt 002', 
            name: 'React for beginners',
            price: 15

        },
        { 
            code: 'Js 003', 
            name: 'Javascript for beginners',
            price: 20
        }
    ];
  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {
            books.map(book => <li key={book.code}>The name of {book.name} and the price is {book.price}</li>)
        }
      </ul>
    </div>
  )
}

export default LibraryBooks   