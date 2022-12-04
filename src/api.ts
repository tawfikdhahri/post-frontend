import { posts } from "./data";
import { sumObjectsByKey } from "./helpers";
import { postMapper } from "./mappers";
const initalReation = {
  like: 0,
  love: 0,
  care: 0,
  wow: 0,
  sad: 0,
  haha: 0,
  angry: 0,
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getPosts = (page: number): Promise<any> => {
  const postsByPage = posts[page as keyof typeof posts];

  return Promise.resolve(postsByPage.map((post: any) => postMapper(post)));
};

export const getDominantReaction = (url: string) => {
  return fetch(url, {
    headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const reactions = data[0].posts.map((item: any) => {
        return { ...initalReation, ...item.post_reactions.reactions };
      });
      return sumObjectsByKey(reactions);
    });
};
