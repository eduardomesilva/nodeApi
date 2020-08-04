const express = require('express');
const mongoose = require('mongoose');

require("./models/Artigo");
const Artigo = mongoose.model('artigo');
const app = express();

app.use(express.json());
mongoose.connect('mongodb://localhost/APP1',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log("conexão com sucesso!!");
}).catch((erro) =>{
    console.log("ERRO!!!");
});

app.get("/", (req, res) => 
{
   Artigo.find({}).then((artigo) => {
       return res.json(artigo);
   })
});


app.get("/artigo/:id", (req, res) => {
    Artigo.findOne({_id:req.params.id}).then((artigo) => {
        return res.json(artigo);
    });
});

app.post("/artigo", (req, res) => {
        
    const artigo = Artigo.create(req.body)
});


app.put("/artigo/:id", (req, res) => {
    const artigo = Artigo.updateOne({ _id: req.params.id}, req.body , (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro na edição"
  
        });

        return res.json({
            error: false,
            message: "Ediatdo!!!"
        });
    });
});

app.delete("/artigo/:id", (req, res) => {
    const artigo = Artigo.deleteOne({ _id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro na exclusão!!!!"
        });

        return res.json({
            error: false,
            message: "Excluido!!!"
        });
    });
});

app.listen(8080, () =>{
    console.log("Servidor ok porta 8080: http://localhost:8080/");
});
