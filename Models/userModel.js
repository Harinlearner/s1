import mongoose from "mongoose";

const userData = mongoose.Schema({
    altitude:{
        type:String,
    },
    longitude:{
        type:String,
    }
});

export default mongoose.model('map',userData);