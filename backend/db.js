import mongoose from "mongoose";
const mongoURL  = 'mongodb+srv://akashdixit5232:2xQG9LSfkiTnpJ0q@foodfleetdb.2ynghkj.mongodb.net/FoodFleetDB?retryWrites=true&w=majority' ;
//const mongoURL  = 'mongodb+srv://akashdixit5232:2xQG9LSfkiTnpJ0q@foodfleetdb.vbaw8.mongodb.net/FoodFleetDB?retryWrites=true&w=majority'
const mongoConnect = ()=>{
    try {
        mongoose.connect(mongoURL);
        console.log("connected to Database");
    } catch (error) {
        console.error(error);
    }
    

}
export default mongoConnect ;