require("dotenv").config();
const express = require('express');
const path = require('path'); 
const dbconnect = require("./dbconnect");
const mongoose = require('mongoose');
const { restrictTologedinUser, checkAuth } = require('./middleware/authMiddleware');
const cookieParser = require("cookie-parser");

const storage = multer.diskStorage({
    destination: "./uploads/", // Directory where images will be stored
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

// Routes import 
const signupRouter = require('./routes/signupRouter') ;
const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');
const userRouter = require('./routes/UserRouter');
const designerRouter = require('./routes/designerRouter');


const app = express();
const PORT = process.env.PORT || 8001; 

// Database connection
dbconnect(process.env.Mongodb_URL); 

// for templates view 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/login', checkAuth, loginRouter);
app.use('/signup',checkAuth, signupRouter);
app.use('/logout', logoutRouter);

// Protected route example
app.use('/user', userRouter);
app.use('/designer',designerRouter);
app.use('/',restrictTologedinUser,(req,res)=>{
    res.redirect('/welcome',{user:req.user});
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
