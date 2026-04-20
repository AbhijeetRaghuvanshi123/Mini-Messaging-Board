import db from '../models/queries.js';

const home = async (req, res) => {
    const rows = await db.getMessages();
    res.render('home', { title: 'Mini Messageboard' ,messages : Object.values(rows.rows)})
}

const newMessage = async (req , res) => {
    res.render('newMessage');
}

const addNewMessage = async (req , res ) => {
    await db.addMessage(req.body);
    res.redirect('/');
}

const viewMessage = async (req , res) => {
    const row = await db.getMessage(req.query.user);
    res.render('viewMessage', { message: row});
}

export { home , newMessage, addNewMessage, viewMessage};