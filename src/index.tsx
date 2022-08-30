import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"



const container = document.getElementById('app')

/*
TODO REVIEW https://stackoverflow.com/a/71445217
<React.StrictMode>
    <App />
</React.StrictMode>,
*/

ReactDOM.render(<App />, container)
