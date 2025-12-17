import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    completed: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            minlength: 3,
            maxlength: 100,
        },
        description: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        userId: {
            type: String,
            required: true,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Task = model<ITask>('Task', TaskSchema);