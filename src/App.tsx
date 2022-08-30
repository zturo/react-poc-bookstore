import React from "react"
import {
    useState, useEffect
} from "react"
import { Segment } from 'semantic-ui-react'

import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'

import { ContextStore } from './ContextStore'
import styles from './App.module.css'
import { HeaderBar } from "./HeaderBar"

import { Main } from "./Main"

import { BookDetailView } from './BookStore/BookDetailView'
import { BookListView } from './BookStore/BookListView'
import { BookUpsertView } from './BookStore/BookUpsertView'
import { DBView } from './BookStore/DBView'



export function App() {

    return <>
        <ContextStore.Provider>
            <div className={styles.hello}>
                <BrowserRouter>
                    <HeaderBar />
                    <Segment >
                        <Routes>
                            <Route path="/main" element={<Main />} />

                            <Route path="/bookListView" element={<BookListView />} />
                            <Route path="/bookUpsertView/:bookId" element={<BookUpsertView />} />
                            <Route path="/bookDetailView/:bookId" element={<BookDetailView />} />
                            <Route path="/dbView" element={<DBView />} />

                        </Routes>
                    </Segment>
                </BrowserRouter>
            </div>
        </ContextStore.Provider>
    </>
}
