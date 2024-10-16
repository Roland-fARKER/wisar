import { Comment } from "./Comment.model";
import { User } from "../../models/User.model";

export interface Post {
  id?: string;
  title: string;
  content: string[];
  imageUrl?: string;
  createdAt: Date;
  comments: Comment[];
  author: User | null;
}
