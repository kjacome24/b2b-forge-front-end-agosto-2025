import { mongoose } from "mongoose";

const songsSchema = mongoose.Schema(
    {
        title : {
            type : String,
            minlength : [6, "The title is not long enough, you should have at least 6 characters"],
            maxlength : [255, "The title is too long to remember"],
            required : [true, "The title is mandatory"]
        },
        artist : {
            type: String,
            required : [true, "yoou have to add the artist"],
            minlength : [10, "The artist's name should have at least 10 characters"],
            maxlength : [255, "That name is kinda weird, and too long"]
        },
        yearOfRealease :  {
            type : Number,
            required : [true, "The year of realse is mandatory"],
            min : [1900, "That song was from decades ago , is just not possible"],
            max : [2025, "That song can not be from the future"]
        },
        genre : {
            type: String,
            required : [true, "You have to add the genre"]
        }
    },
    {timestamps : true}
)


const Songs = mongoose.model('songs',songsSchema)

export {Songs,songsSchema } ;