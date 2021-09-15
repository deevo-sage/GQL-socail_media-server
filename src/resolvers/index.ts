import { Post, PostQuery, PostMutation } from "./post";
import { Profile, ProfileMutation, ProfileQuery } from "./profile";
import { User, UserQuery, UserMutation } from "./user";

const resolvers = {
  Query: {
    ...UserQuery,
    ...ProfileQuery,
    ...PostQuery,
  },
  Mutation: {
    ...UserMutation,
    ...ProfileMutation,
    ...PostMutation,
  },
  User,
  Profile,
  Post,
};

export default resolvers;
