import {mongoose} from 'mongoose'

const PersonaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // required: true
            required : [true, "You have to add an name"]
        },
        edad: {
            type: Number,
            required : [true, "You have to add a age"]
        }
    }
    , {timestamps: true}
);


const Personas = mongoose.model('personas',PersonaSchema);

export default Personas;

