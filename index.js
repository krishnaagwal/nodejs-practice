const express = require ('express');
require('./config')
const Product = require('./product');

const app = express();

app.use(express.json())

app.post('/create',async (req,resp) => {
    let body = new Product(req.body);
    const result = await body.save(req.body)
    console.log(req.body)
    resp.send("done1")
})

app.get('/list', async(req,resp) => {
    let data = await Product.find()
    resp.send(data)
})

app.delete('/delete/:_id', async(req,resp) => {
    console.log(req.params)
let data = await Product.deleteOne({_id: req.params._id });
    resp.send(data);
})

app.put("/update/:_id", async(req,resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        {_id: req.params},
        {
            $set:req.body
        }
    )
    resp.send(data)
})
app.listen(5000)