import { model, Schema, Model, Document, Date } from "mongoose";

export interface NotePropTypes extends Document {
  username: string;
  text: string;
  date: Date;
}

const NoteSchema: Schema = new Schema({
  username: { type: String, required: true, maxlength: 50, trim: true },
  text: { type: String, required: true, maxlength: 500, trim: true },
  date: { type: Date, required: true, default: new Date() },
});

export const Note: Model<NotePropTypes> = model("Note", NoteSchema);
