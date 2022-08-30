import React, { Component, useEffect, useState } from 'react'
import { Input, Menu, MenuItemProps } from 'semantic-ui-react'

import { useNavigate, useLocation } from "react-router-dom"

import { ContextStore } from './ContextStore'



export function HeaderBar() {

    let navigate = useNavigate()

    const [activeItem, setActiveItem] = useState<string>("")

    const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {

        if (data.name == "bookUpsertView") {
            navigate("/bookUpsertView/0")
        } else if (data.name == "bookDetailView") {
            navigate("/bookDetailView/0")
        } else {
            navigate(data.name!)
        }
    }

    const location = useLocation()
    const headerBarMenus = [
        "main", "bookListView", "bookUpsertView", "bookDetailView", /*"dbView"*/
    ]

    useEffect(() => {
        headerBarMenus.forEach(m => {
            if (location.pathname.includes(m)) {
                setActiveItem(m)
            }
        })
    }, [location])

    return <>
        <Menu secondary>

            {headerBarMenus.map((v) => 
                <Menu.Item
                    key={v}
                    name={v}
                    active={activeItem === v}
                    onClick={handleItemClick}
                />
            )}
{/* 
            <Menu.Item
                name='main'
                active={activeItem === 'main'}
                onClick={handleItemClick}
            />

            <Menu.Item
                name='bookListView'
                active={activeItem === 'bookListView'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='bookUpsertView'
                active={activeItem === 'bookUpsertView'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='bookDetailView'
                active={activeItem === 'bookDetailView'}
                onClick={handleItemClick}
            /> */}

            {/* <Menu.Item
                name='dbView'
                active={activeItem === 'dbView'}
                onClick={handleItemClick}
            /> */}

        </Menu>
    </>
}
