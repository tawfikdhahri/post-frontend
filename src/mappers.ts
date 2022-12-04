import { Post } from "./types";
import moment from "moment";
import { timesType } from "./contants";
export const postMapper = (post: any): Post => {
  return {
    id: post.post_id,
    text: post.post_text,
    date: post.post_date,
    postComments: post.post_comments,
    postReaction: post.post_reactions,
  };
};
