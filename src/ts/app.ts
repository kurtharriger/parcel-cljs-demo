// importing css is easy with webpack, but not yet supported by cljs compiler
import 'sakura.css'
import {greeting}  from 'cljs'

console.log(greeting("hello"))
export const hello = (name: string): void => {
    console.log(greeting())
}