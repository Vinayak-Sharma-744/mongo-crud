import mongoose from "mongoose"
const db = async()=>{
    
    try {

        const connection=await mongoose.connect(process.env.MONGO_URL1 as string)
        // const connection = await mongoose.connect('mongodb+srv://vinayak-0077:QcmJyn2sdkjc1ZBF@cluster0.u3ezcfk.mongodb.net/')

        // const connection = await mongoose.connect('mongodb://localhost:27017')

        console.log("Db connected",connection.connection.host)

    } catch (error) {
        console.log("No Db connected",error)
        process.exit(1)
    }
} 


export default db
