import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()


// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'

app.get('/', (req,res) => {
    res.json({"dog": 4})
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{ 
            console.log(`Server is listening at localhost:${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()