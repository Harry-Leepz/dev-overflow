import { model, models, Schema, Types, Document } from "mongoose";

export type TAnswer = {
  author: Types.ObjectId;
  question: Types.ObjectId;
  content: string;
  upvotes: number;
  downvotes: number;
};

export type TAnswerDocument = TAnswer & Document;

const AnswerSchema = new Schema<TAnswer>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    content: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Answer = models.Answer || model<TAnswer>("Answer", AnswerSchema);

export default Answer;
