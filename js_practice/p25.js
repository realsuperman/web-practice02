const http = require('http');
const fs = require('fs').promises;
const users = {};
http.createServer(async (req,res)=>{
    try{
        if(req.method === 'GET'){

        }else if(req.method === 'POST'){

        }else if(req.method === 'PUT'){

        }else if(req.method === 'DELETE'){

        }
        //위의 4개에서 안걸리면 404임
        res.writeHead(404);
        return res.end('NOT FOUND');
    }catch(err){
        console.error(err);
    }
})
.listen(8080,()=>{
    console.log('듣고있어');
})