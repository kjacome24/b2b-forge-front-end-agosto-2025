import { mongoose } from "mongoose";

const forosSchema = mongoose.Schema(
    {
        title : {
            type : String,
            minlength : [5, "The title is not long enough, you should have at least 5 characters"],
            unique : true,
            required : [true, "The title is mandatory"]
        },
        description : {
            type: String,
            required : [true, "yoou have to add the artist"],
            minlength : [10, "The description should have at least 10 characters"],
        },
        category :  {
            type : String,
            required : [true, "The year of realse is mandatory"],
            minlength : [5, "The category should have at least 10 characters"]
        },
        author : {
            type : String,
            required : [true, "You have to add the author"]
        }

    },
    {timestamps : true}
)


const Foros = mongoose.model('foros',forosSchema)

export {Foros,forosSchema } ;