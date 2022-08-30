import React from "react"
import {
    useState, useEffect
} from "react"

import { Segment, Grid, Image, Button, Icon } from 'semantic-ui-react'

import {
    useParams, Link
} from 'react-router-dom'

import { Book } from '../bookDB'
import { ContextStore } from '../ContextStore'



export function BookDetailView() {

    const bookStoreActions = ContextStore.useStoreActions((actions) => actions.bookStore)
    const booksStoreState = ContextStore.useStoreState(state => state.bookStore)

    let [book, setBook] = useState<Book>()
    let { bookId } = useParams()

    useEffect(() => {
        bookStoreActions.fetchBooks()
    }, [])

    useEffect(() => {
        let result = booksStoreState.books.filter(b => b.bookId == bookId).pop()
        if (result) {
            setBook(result)
        }
    }, [booksStoreState.books])

    return <>
        {!book && <>
            Select an item from BookListView
        </>
        }
        {
            book && <>
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            {book.bookId}
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <div><b>{book.title}</b></div>
                            <div><i>{book.author}</i></div>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div style={{ width: 100, height: 140 }}>
                                <Image floated="left" src={`/public/${book.imageId}`} />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <div>
                                {book.description}
                            </div>

                            <Link to={`/bookUpsertView/${book.bookId}`} >
                                <Button floated='right' animated='vertical'>
                                    <Button.Content hidden>Edit</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        }
    </>
}
