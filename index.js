const express = require ('express');
const multer = require ('multer')
const app = express();


app.post("/upload",(req, resp) => {
    resp.send("upload file")
})

app.listen(5000)