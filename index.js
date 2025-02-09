require("dotenv").config();
const express = require('express');
const path = require('path'); 
const dbconnect = require("./dbconnect");
const mongoose = require('mongoose');
const { restrictTologedinUser, checkAuth } = require('./middleware/authMiddleware');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8001; 


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
dbconnect(process.env.Mongodb_URL); 

signupRouter = require('./routes/signupRouter') ;
loginRouter = require('./routes/loginRouter');
logoutRouter = require('./routes/logoutRouter');
userRouter = require('./routes/UserRouter');
designerRouter = require('./routes/designerRouter')

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
