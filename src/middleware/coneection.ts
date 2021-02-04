import { Mongoose, connect } from 'mongoose';
let isConnected: boolean = false;

export const connectToDatabase = async () => {

    if (isConnected) {
        console.log("connected");
        return Promise.resolve();
    }

    const dbUri: string = "mongodb+srv://CalvinUser:userpassword@calvin0.vgiqe.mongodb.net/Libarary?retryWrites=true&w=majority";

    try {
        console.log("first connect");
        const db = await connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        isConnected = db.connection.readyState == 1; // 1 for connected
    } catch (error) {
        console.log('db error:', error);
        return await Promise.reject(error);
    }
};

