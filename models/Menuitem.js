const mongoose=require('mongoose');

const Menuitemschem=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour']
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingrediants:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
});

const Menuitme=mongoose.model('Menuitem',Menuitemschem);

module.exports=Menuitme;