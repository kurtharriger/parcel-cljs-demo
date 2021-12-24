// importing css is easy with webpack, but not yet supported by cljs compiler
import 'sakura.css'

export const hello = (name: string): void => {
    console.log('hello from typescript')
}