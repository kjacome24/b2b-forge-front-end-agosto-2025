import {mongoose} from 'mongoose'

const PersonaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required : [true, "You have to add an name"],
            minlength : [3, "The name is too short, u should have at least 3 characters"],
            maxlength : [10, "The name is too long"]
        },
        edad: {
            type: Number,
            required : [true, "You have to add a age"],
            min : [18, "You have to be above 18"],
            max : [50, "You are too old, sorry"]
        }
    }
    , {timestamps: true}
);


const Personas = mongoose.model('personas',PersonaSchema);

export default Personas;

