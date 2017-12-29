const env = require('dotenv').config()
import express from 'express'
import chalk from 'chalk'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import Routes from './routes'
import validation from 'express-validation';
import db from './util/database';
import migrate from './util/migrate';

const app = express()
const jsonParser = bodyParser.json();

app.use('/', express.static(path.resolve(__dirname, '/../public')))
app.use(jsonParser);
app.use(cors());
app.use((err, req, res, next)=>{
  if(err){
     db('logger').insert({method:req.method,type:"error",file:'index',data:JSON.stringify(err)}).then((r)=>console.log(r))
     res.status(400).json(err);
  }
});
app.use('/api/',Routes);
try{
  db.raw('select * from books').then((r)=>console.log(r)).catch((e)=>{
    console.log('migrate')
    migrate();
  })
}catch(e){
  console.log('migrate')
  migrate();
}

app.listen(process.env.PORT, () => {
  const log = console.log
  log('\n')
  log(chalk.bgGreen.black(`Server listening on http://localhost:${process.env.PORT}/`))
  log('\n')
})

export default app