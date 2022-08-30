import React from "react"
import {
    useState, useEffect, useRef
} from "react"

import {
    Segment, Form, ButtonProps, Button,
    TextAreaProps, Checkbox, CheckboxProps, Confirm,
    ConfirmProps, Dropdown, DropdownProps
} from 'semantic-ui-react'

import {
    useParams, Link, useNavigate
} from 'react-router-dom'

import { Book } from '../bookDB'

import { ContextStore } from '../ContextStore'



const PLACEHOLDERS = {
    bookId: 'i.e. 03600/03655',
    author: 'i.e. Thomas Mann',
    title: 'i.e.  József és testvérei',
    description: 'i.e. "Igen, igen, igen, te mondád, Júda, kitűnően mondád! Eladni, \
eladni az izmáelitáknak, így helyes, így célszerű, így szabadulunk meg tőle! \
Föl, kerítsétek elő Józsefet, hozzátok napvilágra, jönnek már, s hihetőleg \
még van élet benne, az ember kibírja tizenkét napig vagy tizennégyig is, \
a tapasztalat szerint."',
    imageId: 'i.e. borito.03600.03655.jpg',
    labels: 'i.e. fantasy, love'
}

export const bookTypes: string[] = [
    'fantasy', 'science-fiction',
    'fiction', 'young-adult', 'love',
    'non-fiction', 'children', 'history',
    'mystery', 'covers', 'classics', 'best',
    'paranormal'
]

const OPTIONS = [
    { key: 'fantasy', text: 'fantasy', value: 'fantasy' },
    { key: 'science-fiction', text: 'science-fiction', value: 'science-fiction' },
    { key: 'fiction', text: 'fiction', value: 'fiction' },
    { key: 'young-adult', text: 'young-adult', value: 'young-adult' },
    { key: 'love', text: 'love', value: 'love' },
    { key: 'non-fiction', text: 'non-fiction', value: 'non-fiction' },
    { key: 'children', text: 'children', value: 'children' },
    { key: 'history', text: 'history', value: 'history' },
    { key: 'mystery', text: 'mystery', value: 'mystery' },
    { key: 'covers', text: 'covers', value: 'covers' },
    { key: 'classics', text: 'classics', value: 'classics' },
    { key: 'best', text: 'best', value: 'best' },
    { key: 'paranormal', text: 'paranormal', value: 'paranormal' },
]


export function BookUpsertView() {

    const navigate = useNavigate()

    const bookStoreActions = ContextStore.useStoreActions((actions) => actions.bookStore)
    const booksStoreState = ContextStore.useStoreState(state => state.bookStore)

    useEffect(() => {
        bookStoreActions.fetchBooks()
    }, [])

    const [book, setBook] = useState<Book | undefined>()
    let { bookId } = useParams()

    useEffect(() => {
        if (bookId != "0") {
            let result = booksStoreState.books.filter(b => b.bookId == bookId).pop()
            setBook(result)
        }
    }, [booksStoreState.books])

    const [desc, setDesc] = useState<string>()
    const descrOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
        setDesc(data.value + '')
    }

    const [isArchived, setArchived] = useState<boolean>(false)
    const isArchivedOnChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
        let currentState = !isArchived
        setArchived(currentState)
        console.log("isArchived toggle", currentState)

        if (book) {
            bookStoreActions.setArchivedBook({ bookId: book.bookId, isArchived: currentState })
        }
    }

    useEffect(() => {
        if (book) {
            if (bookIdRef.current) {
                bookIdRef.current.defaultValue = book.bookId
            }
            if (authorRef.current) {
                authorRef.current.defaultValue = book.author
            }
            if (titleRef.current) {
                titleRef.current.defaultValue = book.title
            }
            if (imageIdRef.current) {
                imageIdRef.current.defaultValue = book.imageId || ""
            }
            setDesc(book.description)
            setArchived(book.status == 'ARCHIVED')
            if (book.labels) {
                setCategoryLabels(book.labels)
            }
        }
    }, [book])

    const bookIdRef = useRef<HTMLInputElement>(null)
    const authorRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const imageIdRef = useRef<HTMLInputElement>(null)

    const onDelete = async (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => {
        setConfirmOpen(true)
    }

    const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => {
        let formData: Book = {
            bookId: bookIdRef.current?.value!,
            author: authorRef.current?.value!,
            title: titleRef.current?.value!,
            description: desc!,
            imageId: imageIdRef.current?.value,
            status: isArchived ? 'ARCHIVED' : 'NORMAL',
            labels: categoryLabels
        }
        console.log({ formData })

        if (book) {
            bookStoreActions.updateBook(formData)
        } else {
            bookStoreActions.addBook(formData)
        }

        navigate(`/bookUpsertView/${bookIdRef.current?.value!}`)
    }


    const onCancel = (event: React.MouseEvent<HTMLAnchorElement>, data: ConfirmProps) => {
        setConfirmOpen(false)
    }

    const onConfirm = (event: React.MouseEvent<HTMLAnchorElement>, data: ConfirmProps) => {
        setConfirmOpen(false)
        bookStoreActions.deleteBook({ bookId: book?.bookId! })
    }

    const [confirmIsOpen, setConfirmOpen] = useState<boolean>(false)


    const dropDownChange = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        setCategoryLabels(data.value as string[])
    }

    const [categoryLabels, setCategoryLabels] = useState<string[]>([])


    return <>
        <Form>
            <Form.Field>
                <label>BookId</label>
                <input name='bookId' ref={bookIdRef} disabled={book != undefined} placeholder={PLACEHOLDERS.bookId} />
            </Form.Field>
            <Form.Field>
                <label>Author</label>
                <input name='author' ref={authorRef} placeholder={PLACEHOLDERS.author} />
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input name='title' ref={titleRef} placeholder={PLACEHOLDERS.title} />
            </Form.Field>
            <Form.TextArea name='description' style={{ minHeight: 100 }}
                label='Description'
                onChange={descrOnChange} value={desc}
                placeholder={PLACEHOLDERS.description} />
            <Form.Field>
                <label>ImageId</label>
                <input name='imageId' ref={imageIdRef} placeholder={PLACEHOLDERS.imageId} />
            </Form.Field>

            <Form.Field>
                <label>Labels</label>
                <Dropdown placeholder={PLACEHOLDERS.labels}
                    fluid multiple selection search value={categoryLabels}
                    options={OPTIONS} onChange={dropDownChange}
                />
            </Form.Field>

            <Form.Field>
                <Checkbox label='Archived' disabled={book == undefined} onChange={isArchivedOnChange} checked={isArchived} />
            </Form.Field>

            <Form.Field>
                <Button type='submit' onClick={onSubmit}>{book ? 'Edit' : 'Add'}</Button>
                {isArchived && <Button type='submit' onClick={onDelete}>Delete</Button>}
            </Form.Field>

            <Confirm size="mini"
                open={confirmIsOpen}
                onCancel={onCancel}
                onConfirm={onConfirm}
                dimmer='inverted'
                content='Are you sure deleting this item?'
            />

        </Form>
    </>
}
