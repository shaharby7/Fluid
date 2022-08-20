import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export { IUser, User };
