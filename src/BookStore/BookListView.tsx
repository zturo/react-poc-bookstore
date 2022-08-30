import React from "react"
import {
    useState, useEffect
} from "react"
import {
    Segment, Item, Button, Icon, Checkbox, CheckboxProps
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


import { Book } from '../bookDB'
import { ContextStore } from '../ContextStore'



export function BookListView() {

    const bookStoreActions = ContextStore.useStoreActions((actions) => actions.bookStore)
    const booksStoreState = ContextStore.useStoreState(state => state.bookStore)

    const [books, setBooks] = useState<Book[]>([])
    const [isShowingArchived, setShowingArchived] = useState(false)

    useEffect(() => {
        bookStoreActions.fetchBooks()
    }, [])

    const showingArchivedOnChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
        let currentState = !isShowingArchived
        setShowingArchived(currentState)
    }

    useEffect(() => {
        let result = []
        if (isShowingArchived) {
            result = booksStoreState.books.filter(b => b.status != 'DELETED')
        } else {
            result = booksStoreState.books.filter(b => b.status != 'ARCHIVED' && b.status != 'DELETED')
        }
        result.sort((a, b) => {
            if (a.bookId > b.bookId) {
                return 1
            } else if (a.bookId < b.bookId) {
                return -1
            }
            return 0
        })
        setBooks(result)
    }, [booksStoreState.books, isShowingArchived])

    return <>
        <div style={{ paddingBottom: 50 }}>
            <Checkbox checked={isShowingArchived} onChange={showingArchivedOnChange} label={"Show Archived"} />
        </div>
        <div style={{ width: 400 }}>
            <Item.Group divided >
                {books.map((b) =>
                    <Item key={b.bookId}>
                        <Item.Image size='mini' src={`/public/${b.imageId}`} />

                        <Item.Content>
                            <Item.Header>
                                {b.status == 'ARCHIVED' && <b> ARCHIVED </b>}
                                <Link to={`/bookDetailView/${b.bookId}`}>{b.title}</Link>
                            </Item.Header>
                            <Item.Meta>{b.author}</Item.Meta>
                            <Item.Extra>
                                <Link to={`/bookUpsertView/${b.bookId}`}>
                                    <Button size="mini" floated='right' animated='vertical'>
                                        <Button.Content hidden>Edit</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                </Link>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                )}
            </Item.Group>
        </div>
    </>
}
