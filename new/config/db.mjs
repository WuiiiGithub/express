import mongoose from "mongoose";



const connetDB = async () => {



    try {

        await mongoose.connect('mongodb://localhost:27017/dhanush')

        console.log('conneted to Database.....')

    } catch (error) {

        console.log(`${error}`)

    }

}



export default connetDB