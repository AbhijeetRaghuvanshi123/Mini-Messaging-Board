import db from '../models/queries.js';
import { body, validationResult, matchedData } from 'express-validator';

const emptyError = "can't be empty.";
const nameLengthError = "From must be 2-30 characters";
const invalidCharError = "Invalid character in";

const validateUser = [
    body("user")
        .trim()
        .notEmpty().withMessage(`From ${emptyError}`)
        .isLength({ min: 2, max: 30 }).withMessage(nameLengthError)
        .matches(/^[a-zA-Z\s.'-]+$/).withMessage(`${invalidCharError} From`)
]

const validateMessage = [
    body('text')
        .trim()
        .notEmpty().withMessage('Message cannot be empty')
        .isLength({ min: 5, max: 1000 }).withMessage('Message must be 5–1000 characters long')
]

const home = async (req, res) => {
    const rows = await db.getMessages();
    res.render('home', { title: 'Mini Messageboard', messages: Object.values(rows.rows) })
}

const newMessage = async (req, res) => {
    res.render('newMessage');
}

const addNewMessage = [
    ...validateMessage,
    ...validateUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('newMessage', {
                errors: errors.array()
            });
        }
        await db.addMessage(req.body);
        res.redirect('/');
    }
]


const viewMessage = async (req, res) => {
    const row = await db.getMessage(req.query.user);
    res.render('viewMessage', { message: row });
}

export { home, newMessage, addNewMessage, viewMessage };