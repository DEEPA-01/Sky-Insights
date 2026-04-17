import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminUser = {
          email: "admin@skyinsights.com",
          password: "Admin@123", // password: Admin@123
        };

        if (
          credentials?.email === adminUser.email &&
          (await bcrypt.compare(credentials.password, adminUser.password))
        ) {
          return { id: "1", name: "Admin", email: adminUser.email };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "skyinsights_secret_key",
});

export { handler as GET, handler as POST };
