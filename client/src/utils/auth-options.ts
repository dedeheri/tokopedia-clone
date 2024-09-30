import axios from "axios";
import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,

  pages: {
    signIn: "/",
    error: "/",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      // auth
      async authorize(credentials) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/account/signin`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          return {
            id: response?.data?.data?.user?._id,
            name: response?.data?.data?.user?.fullName,
            email: response?.data?.data?.user?.email,
            image: response?.data?.data?.user?.image,
          } as any;
        } catch (error: any) {
          throw new Error(error?.response?.data?.message);
        }
      },
    }),
  ],

  callbacks: {
    // jwt
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          name: user.name,
        };
      }

      return token;
    },

    // session
    async session({ session }) {
      const usersInfo = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user?email=${session?.user?.email}`
      );

      return {
        ...session,
        user: {
          ...session.user,
          id: usersInfo?.data?.data?._id,
        },
      };
    },

    // signin
    async signIn({ user, account }): Promise<any> {
      try {
        const usersInfo = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user?email=${user?.email}`
        );

        if (usersInfo?.data?.data === null) {
          await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/account/signup`,
            {
              email: user?.email,
              fullName: user?.name,
              image: user?.image,
              providerType: account?.provider,
              providerId: account?.providerAccountId,
            }
          );

          return true;
        }

        return true;
      } catch (error: any) {
        throw new Error(error?.response?.data?.message);
      }
    },
  },
};

export default authOptions;
