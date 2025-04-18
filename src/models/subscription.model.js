import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,  //One who want to subscribe
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,  //One to whom "Subscriber" is subscribing
        ref: "User"
    }
}, {timestamps: true});




export const Subscription = mongoose.model("Subscription", subscriptionSchema);