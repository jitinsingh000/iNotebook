const express = require('express');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

// Get All the Notes using : GET "/api/notes/fetchallnotes". Login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (err) {
        console.log(err.message);
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});

// Add a new Note using : POST "/api/notes/addnote". Login required 
router.post('/addnote', fetchuser, [
    body('title', 'Title must be atleast 3 characters').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('tag', 'Tag must be atleast 3 characters').isLength({ min: 3 }),
], async (req, res) => {
    // If there are errors, return Bad request and the erorrs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tag } = req.body;
    try {
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (err) {
        console.log(err.message);
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});

// Update an existing Note using : PUT "/api/notes/updatenote". Login required 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (err) {
        console.log(err.message);
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});

// Delete an existing Note using : DELETE "/api/notes/deletenote". Login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (err) {
        console.log(err.message);
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});



module.exports = router;