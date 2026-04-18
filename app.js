import express from 'express';
import path from 'node:path'
import { fileURLToPath } from 'node:url';
import { indexRouter } from './routes/indexRouter.js';
const app = express();

//setting up __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//paths
const viewPath = path.join(__dirname, 'views');
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}));
app.set("views", viewPath);
app.set("view engine", "ejs");

//routes
app.use('/', indexRouter);


const PORT = 3000;
app.listen(PORT, (error) => {
    if(error){
        throw error;
    }

    console.log(`Server is listing on port: ${PORT}`);
    
})