const http  = require("http");
const PUERTO = 3001; 
const getCharById = require('./controllers/getCharById.js')
//const data = require("./utils/data.js")

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    
    // if(url==="/"){
    //     res.writeHead(200,{"Content-Type": "text/plain"});
    //     return res.end("Hola")
    // }
    
    // if(url.includes("/rickandmorty/character")){
    //      const id = Number(url.split("/").pop());
    //      //console.log(url.slice(-1));
    //      const character = data.find(char=> char.id === id)
    //      //console.log(character);
    //      if(character){
    //          res.writeHead(200, {"Content-Type":"application/json"});
    //          return res.end(JSON.stringify(character));
    //      }
    // }

    if(url.includes("/rickandmorty/character")){
        const id = Number(url.split("/").pop());
        getCharById(res,id);
    }

    // res.writeHead(404,{"Content-Type": "text/plain"});
    // res.end(`La direccion ${url} no existe`);

}).listen(PUERTO,()=>{
    console.log(`Servidor corriendo en puerto: ${PUERTO}`);
});
