import { Document, Model, model, Schema } from "mongoose";

export interface INoun extends Document {
    name: string;
}

const nounSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Noun: Model<INoun> = model("noun", nounSchema);

export default Noun;