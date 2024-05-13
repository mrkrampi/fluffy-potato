import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import db from '@/db/drizzle';
import authConfig from '@/auth.config';
import { getUserById } from '@/db/queries';

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/sign-in',
    newUser: 'auth/sign-up',
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') {
        return true;
      }

      // Prevent sign in without email verification
      const existingUser = await getUserById(user?.id ?? '');

      return !!existingUser;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }

      return session;
    },
  },
  session: { strategy: 'jwt' },
  adapter: DrizzleAdapter(db),
  ...authConfig,
});
