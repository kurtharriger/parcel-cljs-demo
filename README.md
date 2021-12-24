
_TODO_ ESM demo for [shadow-cljs](https://github.com/thheller/shadow-cljs)
----

### Develop

Run in development:

```bash
yarn
yarn shadow-cljs watch app 
yarn parcel index.html
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
