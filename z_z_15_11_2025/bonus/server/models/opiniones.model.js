import { mongoose } from "mongoose";

const opinionSchema = mongoose.Schema(
    {
        opinion: {type : String,
            required : [true, "Es necesario proporcionar el nombre del curso"]
        }
    }, { timestamps: true }
);

const Opinion = mongoose.model("opinions",opinionSchema);

export {Opinion, opinionSchema} ;