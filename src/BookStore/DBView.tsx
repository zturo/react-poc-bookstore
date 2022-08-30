import React from "react"
import {
    useState, useEffect, useRef
} from "react"



export function DBView() {

    const db = JSON.parse(localStorage.getItem("storedBooks") || "{}")

    return <>
        <pre>
            {JSON.stringify(db, null, 4)}
        </pre>
    </>
}