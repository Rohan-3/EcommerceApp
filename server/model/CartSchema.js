const mongoose=require("mongoose")

const cartSchema= new mongoose.Schema({
    ProductId:{
        type:Number,
        require:true
    },
    img:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Qty:{
        type:Number,
        required:true
    },
    Size:{
        type:String,
        required:true
    }
})

const cart=new mongoose.model("Cart",cartSchema)
module.exports= cart