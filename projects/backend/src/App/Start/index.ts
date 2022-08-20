import { User } from "../DB/Models/User.model";
import connect from "../DB/connect";

const user = new User({
  name: "Bill",
  email: "bill@initech.com",
  avatar: "https://i.imgur.com/dM7Thhn.png",
});

export async function main(): Promise<void> {
  await connect();
  await user.save();
  return;
}
