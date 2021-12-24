
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

### License

MIT
