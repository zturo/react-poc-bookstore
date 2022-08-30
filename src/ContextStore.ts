import { createContextStore } from 'easy-peasy'

import { BookModel, bookStoreInit } from './BookStore/bookStore'



interface ContextStoreModel {
    bookStore: BookModel
}

export interface Injections { }

export const ContextStore = createContextStore<ContextStoreModel, Injections>(
    {
        bookStore: bookStoreInit
    },
    {
        injections: {}
    }
)
