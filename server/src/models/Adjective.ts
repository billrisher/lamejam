import { Document, Model, model, Schema } from "mongoose";

export interface IAdjective extends Document {
    name: string;
}

const adjectiveSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Adjective: Model<IAdjective> = model("adjective", adjectiveSchema);

export default Adjective;