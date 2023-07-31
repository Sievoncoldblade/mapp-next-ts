import NextAuth from "next-auth";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      /** The user's name. */
      name: string;
      email: string;
      image: string | undefined;
    };
  }
}
