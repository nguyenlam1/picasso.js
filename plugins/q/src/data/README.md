How to run the performance test for extractor-s

1. Insert the following configuration into your launch.json

```js
{
        "type": "node",
        "request": "launch",
        "name": "Unit test",
        "program": "${workspaceRoot}/node_modules/@after-work.js/aw/src/index.js",
        "stopOnEntry": false,
        "sourceMaps": true,
        "args": [
            "-c",
            "aw.config.js",
            "--glob",
            "${file}",
            "-w"
        ]
}
```

2. Run the configuration and observe the diff in the debug console.