import User from "../entities/User";
import { userRules } from "../rules/userRules";
import { Schema, model } from "mongoose";

const schemaRules = {
    ci: { 
        type: String, 
        maxLength: userRules.ciMaxChars,
        minLength: userRules.ciMinChars, 
        required: true 
    },
    first_name: { 
        type: String, 
        maxLength: userRules.fnameMaxChars,
        minLength: userRules.fnameMinChars,
        required: true 
    },
    last_name: { 
        type: String, 
        maxLength: userRules.lnameMaxChars,
        minLength: userRules.lnameMinChars,
        required: true 
    },
    email: { 
        type: String, 
        maxLength: userRules.emailMaxChars,
        required: true 
    },
    password: { 
        type: String, 
        maxLength: userRules.passwordMaxChars,
        minLength: userRules.passwordMinChars,
        required: true 
    }
}

const userSchema = new Schema<User>(schemaRules)
const UserMongo = model<User>('User', userSchema)

export default UserMongo