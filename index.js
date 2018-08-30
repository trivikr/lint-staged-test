const http = require("http");

// Test commit to ensure lint-staged runs prettier on git commit
const server = http.createServer((request, response) =>
  response.end("Hello World")
);

// A comment to separate two hunks
server.listen(5000);
