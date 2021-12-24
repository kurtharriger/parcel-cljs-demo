ClojureScript in Parcel Web App
----

This project demonstrates how to include ClojureScript in a Parcel based app.

This project also demonstrates how to export and utilize ClojureScript 
functions and components from typescript. 

### Develop

Run in development:

```bash
yarn
yarn shadow-cljs watch app 
yarn parcel index.html
```

shadow-cljs reloading appears to work fine but I have occassionally notice some already defined errors on reload, but seem safe to ignore

```
cljs_env.js:110 Uncaught Error: Namespace "goog.html.SafeStyleSheet" already declared.
    at Object.goog.module (cljs_env.js:110)
    at eval (eval at hmrApply (runtime-7a6b2432a1efc7e8.js:297), <anonymous>:5:10)
    at Object.goog.loadModule (cljs_env.js:289)
    at Object.eval (eval at hmrApply (runtime-7a6b2432a1efc7e8.js:297), <anonymous>:4:6)
    at newRequire (index.5eecfe6e.js:71)
    at hmrAcceptRun (runtime-7a6b2432a1efc7e8.js:370)
    at WebSocket.ws.onmessage (runtime-7a6b2432a1efc7e8.js:127)
```

### REPL

After page is loaded, you may also start a REPL connected to browser with:

```bash
yarn shadow-cljs cljs-repl app
```


### Release

Compile with optimizations with `release` sub-command:

```bash
yarn shadow-cljs release app
```

Read docs for more http://doc.shadow-cljs.org/ .


## References 

* Generating ES Modules with shadow-cljs
 https://clojureverse.org/t/generating-es-modules-browser-deno/6116

* External modules in parcel
https://www.npmjs.com/package/parcel-plugin-externals
https://github.com/parcel-bundler/parcel/issues/144

### License

MIT
