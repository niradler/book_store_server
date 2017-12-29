import db from '../../util/database';
class BookController {
    async get(req,res){
        try{
            const r = await db('books').where({id:req.params.id}).select('*').limit(100)
            if(r.length==0) throw ('book not found!');
             return res.json(r[0])
        }catch(e){
            await db('logger').insert({method:req.method,type:"error",file:'BookController',data:JSON.stringify(e)})
             return res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const r = await db('books').select('*').limit(100)
             return res.json(r)
        }catch(e){
            await db('logger').insert({method:req.method,type:"error",file:'BookController',data:JSON.stringify(e)})
            return res.status(500).json(e)
        }
    }
    async add(req,res){
        let book = req.body;
        try{
            const r = await db('books').insert(book)
             return res.json(r[0])
        }catch(e){
            await db('logger').insert({method:req.method,type:"error",file:'BookController',data:JSON.stringify(e)})
            return res.status(500).json(e)
        }
    }
    async update(req,res){
        let book = req.body;
        try{
            const r = await db('books').where({id:req.params.id}).update(book)
             return res.json(req.params.id)
        }catch(e){
            await db('logger').insert({method:req.method,type:"error",file:'BookController',data:JSON.stringify(e)})
            return res.status(500).json(e)
        }
    }
    async del(req,res){
        try{
            const r = await db('books').where({id:req.params.id}).del()
             return res.json(req.params.id)
        }catch(e){
            await db('logger').insert({method:req.method,type:"error",file:'BookController',data:JSON.stringify(e)})
            return res.status(500).json(e)
        }
    }
}
export default new BookController();