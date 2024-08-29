import { User } from "../types";

const users: User[] = [
   { id: "1", name: "John Doe", email: "john@example.com" },
   { id: "2", name: "Jane Smith", email: "jane@example.com" },
   { id: "3", name: "Alice Johnson", email: "alice@example.com" },
   { id: "4", name: "Bob Brown", email: "bob@example.com" },
   { id: "5", name: "Charlie Davis", email: "charlie@example.com" },
];

export const resolvers = {
   Query: {
      getUser: (_: unknown, { id }: { id: string }) => {
         return users.find((user) => user.id === id) || null;
      },
      getUsers: (_: unknown, { count }: { count: number }) => {
         return users.slice(0, count);
      },
   },
};
