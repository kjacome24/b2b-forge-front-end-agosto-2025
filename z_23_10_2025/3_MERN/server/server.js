import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import songsRoutes from './routes/songs.route.js'
import playlistRoutes from './routes/playlists.route.js'
import cors from 'cors'


dotenv.config()


const app = express()
const PORT = process.env.PORT || 8080;



// middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


// app.use(cors(
//     {
//         origin: [
//             'http://localhost:5173'
//         ],
//         credentials: true
//     }
// ))


toConnectToBd()


app.use('/api/canciones', songsRoutes );
app.use('/api/playlist', playlistRoutes )

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})