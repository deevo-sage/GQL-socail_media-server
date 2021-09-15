import { getProjection } from "../utils";
export const UserQuery = {
  User: (a: any, b: any, c: any, query: any) => {
    const projection = getProjection(query);
    console.log(projection);
    return { profile: [] };
  },
};
export const UserMutation = {};
export const User = {
  Profile: (user: any, b: any, c: any, query: any) => {
    const projection = getProjection(query);
    console.log(user, projection);
  },
};
