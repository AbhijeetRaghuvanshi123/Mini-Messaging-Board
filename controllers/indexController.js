import { getMessages, addMessage, getMessage } from "../models/messagesDB.js";

const home = async (req, res) => {
    res.render('home', { title: 'Mini Messageboard' ,messages : await getMessages()})
}

const newMessage = async (req , res) => {
    res.render('newMessage', );
}

const addNewMessage = (req , res ) => {
    addMessage(req.body);
    res.redirect('/');
}

const viewMessage = async (req , res) => {
    res.render('viewMessage', { message: getMessage(req.query.user)});
}

export { home , newMessage, addNewMessage, viewMessage};