const express = require('express');
const router = express.Router()
const Image = require('../models/Image');


router.get('/images' , async (req, res) => {
    try {
        console.log(res.query)
        const images = await Image.find({})
        res.send(images)
    } catch (error) {
        res.send(error)
        
    }
})

router.post('/image', async (req, res) => {
    try {
        const image  = new Image(req.body)
        await image.save()
        res.send(image)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/image/:id', async (req, res) => {
    const imageID = req.params.id
    const image = await Image.findOneAndDelete({_id: imageID})
    res.send(image)
})


module.exports = router
