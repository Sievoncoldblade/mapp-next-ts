import NextAuth from "next-auth";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's name. */
      name: string;
      email: string;
      image: string | StaticImport;
    };
  }
}
