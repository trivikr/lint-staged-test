const http = require("http");

// Test commit to ensure lint-staged runs prettier on git commit
http.createServer((req, res) => res.end("Hello World")).listen(3000);
