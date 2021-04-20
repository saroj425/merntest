const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      this.password = await bcrypt.hash(this.password, 12);
      this.cpassword = await bcrypt.hash(this.cpassword, 12);
      return next();
    } catch (err) {
      return next(err);
    }
  });
  
  userSchema.methods.generateAuthToken = async function(){
      try{
          const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
      }catch(err){
          console.log({err});
      }
  };


// userSchema.pre("save", async function(next){
//     console.log("Hi from inside");
//     if(this.isModified('password')){
//         this.password = bcrypt.hash(this.password, 12);
//         this.cpassword = bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });

const User = mongoose.model("USER",  userSchema);
module.exports = User;

