// importing css is easy with webpack, but not yet supported by cljs compiler
import 'sakura.css'

import React from 'React'
import ReactDOM from "react-dom";
import {greeting, App}  from 'cljs'

const Layout: React.FC = () => 
    (<>
        <header>
            <h1>Hello</h1>
            <p>This component lives in typescript, using exported clojurescript functions!</p>
            <p>{greeting("user")}</p>
        </header>
        <main>
            <App/>
        </main>
    </>)


const app = document.getElementById("app");
ReactDOM.render(<Layout />, app);