import { mongoose} from 'mongoose'
import bcrypt from 'bcrypt'


const userSchema = mongoose.Schema(
    {
        firstName : {
            type : String, 
            required : [true, "THe name of the user is mandatory"],
            minlength : [3, "THe name should have at least 3 characters"]
        },
        lastName : {
            type : String, 
            required : [true, "THe last name of the user is mandatory"],
            minlength : [3, "THe last name should have at least 3 characters"]
        },
        email : {
            type: String,
            required : [true, "THe email has to be added"],
            unique : true
        },
        password : {
            type : String,
            required : [true, "THe password is a must"],
            minlength : [8, "THe password has to have at least 8 characters"]
        }
    }, {timestamps : true}
)


// metodo virtual
userSchema.virtual('passwordConfirmation').get(
    function(){
        return this._passwordConfirmation;
    }

).set(function(value){
    this._passwordConfirmation = value;
});

userSchema.pre('validate', function(next){
    if(this.password !== this.passwordConfirmation){
        this.invalidate('passwordConfirmation', 'THe password and the paswrod confimatio do not match')
    }
    next();
})


//metodo de hash para proteger pass

userSchema.pre('save',function(next){
    bcrypt.hash(this.password,10).then((ecnryptedPass)=> {
        this.password = ecnryptedPass;
        next();
    })
})



const User = mongoose.model('users', userSchema)

export {User, userSchema}