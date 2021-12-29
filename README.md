ClojureScript in Parcel Web App
----



This project demonstrates how to include ClojureScript in a Parcel based app.

This project also demonstrates how to export and utilize ClojureScript 
functions and components from typescript. 

Currently, you must manually start the shadow-cljs compiler as a seperate process along side parcel as noted below.

I expect that this manual step and the minimal shadow-cljs configuration can be provided by a parcel transformer.  This project is just a first step to demonstrate a workable configuration that can subsequently be automated.  

 https://github.com/parcel-bundler/parcel/issues/1388 


### Develop

Run in development:

```bash
$ yarn

yarn install v1.22.17
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 11.28s.

$ yarn shadow-cljs watch app  

yarn run v1.22.17
shadow-cljs - config: shadow-cljs.edn
shadow-cljs - updating dependencies
shadow-cljs - dependencies updated
shadow-cljs - server version: 2.16.9 running at http://localhost:9630
shadow-cljs - nREPL server started on port 55551
shadow-cljs - watching build :app
[:app] Configuring build.
[:app] Compiling ...
[:app] Build completed. (149 files, 147 compiled, 0 warnings, 15.12s)
```
In a second terminal
```bash 

$ yarn parcel index.html

Server running at http://localhost:1234
✨ Built in 2.58s
```

Now open http://localhost:1234 in your browser.

![](doc/screenshot.png)

### REPL

After page is loaded, you may also start a REPL connected to browser with:

```bash
yarn shadow-cljs cljs-repl app
```

# Notes: 
shadow-cljs reloading appears to work fine but I have occassionally noticed some already defined errors on reload. These seem safe to ignore.

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

* ESM demo for shadow-cljs 
https://github.com/minimal-xyz/minimal-shadow-cljs-esm

* Guide on using npm modules from clojurescript
https://clojureverse.org/t/guide-on-how-to-use-import-npm-modules-packages-in-clojurescript/2298

### License

MIT
