import mongoose, { Schema, trusted } from "mongoose"

const meetingSchema = new Schema(
    {
     user_id: {type : String},
     meetingCode : {type: String, required: trusted},
     date: {type: Date, default: Date.now, required: true},

}
)

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };