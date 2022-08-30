import {
    Action, Thunk, Computed,
    action, thunk, computed
} from 'easy-peasy'
import { stat } from 'fs'

import { Book, DEMO_BOOKS } from '../bookDB'



export interface BookModel {

    books: Book[]
    fetchBooks: Action<BookModel>
    addBook: Action<BookModel, Book>
    updateBook: Action<BookModel, Book>
    setArchivedBook: Action<BookModel, { bookId: string, isArchived: boolean }>
    deleteBook: Action<BookModel, { bookId: string }>
}


export const bookStoreInit: BookModel = {
    books: [],

    fetchBooks: action((state) => {
        if (localStorage.getItem('storedBooks') == null) {
            localStorage.setItem('storedBooks', JSON.stringify(DEMO_BOOKS))
        }
        let localBooks = localStorage.getItem('storedBooks')
        state.books = JSON.parse(localBooks!)
    }),


    addBook: action((state, book) => {
        state.books.push(book)
        localStorage.setItem('storedBooks', JSON.stringify(state.books))
    }),

    updateBook: action((state, book) => {
        let result = state.books.filter(b => b.bookId != book.bookId)
        result.push(book)
        state.books = result
        localStorage.setItem('storedBooks', JSON.stringify(state.books))
    }),

    setArchivedBook: action((state, { bookId, isArchived }) => {
        let book = state.books.filter(b => b.bookId == bookId).pop()!
        let otherBooks = state.books.filter(b => b.bookId != bookId)
        book.status = isArchived ? 'ARCHIVED' : 'NORMAL'
        otherBooks.push(book)
        state.books = otherBooks
        localStorage.setItem('storedBooks', JSON.stringify(state.books))
    }),


    deleteBook: action((state, { bookId }) => {
        let book = state.books.filter(b => b.bookId == bookId).pop()!
        let otherBooks = state.books.filter(b => b.bookId != bookId)
        if (book.status == 'ARCHIVED') {
            book.bookId = `DELETED-${book.bookId}-${Math.round(Date.now() / 1000)}`
            book.status = 'DELETED'
            otherBooks.push(book)
            state.books = otherBooks
            localStorage.setItem('storedBooks', JSON.stringify(state.books))
        }
    }),
}