import DBHandlerI from "./DBHandlerInterface";
import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server'

class MongodbHandler implements DBHandlerI {
    private mongoServer: MongoMemoryServer

    constructor () {
        this.mongoServer = new MongoMemoryServer()
    }

    private async start(): Promise<void> {
        await this.mongoServer.start()
    }

    private async stop(): Promise<void> {
        await this.mongoServer.stop()
    }

    public async connect(): Promise<void> {
        await this.start()

        const connectionString: string = await this.mongoServer.getUri()
        await mongoose.connect(connectionString)
    }

    public async disconnect(): Promise<void>  {
        await mongoose.connection.dropDatabase()
        await mongoose.connection.close()

        await this.stop()
    }

    public async clear(): Promise<void> {
        const collections = mongoose.connection.collections

        for (const key in collections) {
            const collection = collections[key]
            await collection.deleteMany({})
        }
    }
}

const dbHandler = new MongodbHandler()

export default dbHandler