import express from 'express'

import connetDB from './config/db.mjs'

import itemModel from './model/item.mjs'



const app = express()

app.use(express.json())

connetDB()

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/api/items', async (req, res) => {

    try {

        const items = await itemModel.find()

        if (items.length === 0)

            res.status(404).json({ message: 'Items not Found' })

        else

            res.json({ data: items })

    } catch (error) {

        res.status(500).json({ message: 'server error' })

    }

})



app.post('/api/item', async (req, res) => {

    const { name, category, price } = req.body

    try {

        const item = new itemModel({

            name, category, price

        })

        await item.save()

        if (!item)

            res.status(404).json({ message: 'unable to add item' })

        else

            res.status(201).json({ message: 'New Record added', data: item })

    } catch (error) {

        res.status(500).json({ message: 'server error' })

    }

})



app.get('/api/items/:id', async (req, res) => {

    try {

        const item = await itemModel.findById(req.params.id)

        if (!item){
            res.status(404).json({ message: 'Items not Found' })

        }


        else

            res.json({ data: item })

    } catch (error) {

        res.status(500).json({ message: 'server error' })

    }

})



app.put('/api/item/:id', async (req, res) => {

    try {

        const item = await itemModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!item)

            res.status(404).json({ message: 'unable to find item' })

        res.status(200).json({ message: 'Updated successfully...', data: item })

    } catch (error) {

        res.status(500).json({ message: 'server error' })

    }

})



app.delete('/api/item/:id', async (req, res) => {

    try {

        const item = await itemModel.findByIdAndDelete(req.params.id)

        if (!item)

            res.status(404).json({ message: 'unable to find item' })

        res.status(200).json({ message: 'Deleted successfully...', data: item })

    } catch (error) {

        res.status(500).json({ message: 'server error' })

    }

})



app.listen(3000, () => {

    console.log('server running at port 3000')

})

