const http = require("hello");

const app = http.createServer((req , res) => {
    res.write("hello...");
    res.end();
})

app.listen(8080);