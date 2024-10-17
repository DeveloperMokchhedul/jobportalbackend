import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mokchheduls46:mokchhedul@cluster0.cxqeo.mongodb.net/jobportal?retryWrites=true&w=majority&appName=Cluster0");
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;