
const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    street:{
        type:String,
        required: true,
        countries: [
            {
                type:String,
                require: true,
                state:[
                    {
                        type:String,
                        require: true,
                    }
                ]
            
            }

        ]
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now,
    }

});

const User = mongoose.model('User', UserSchema);

module.exports =User;