import connectDB from "@/utils/connectDB";
import User from "@/model/User";
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';



export default NextAuth({
    //Configure JWT
    session: {
        jwt: true,
    },
    
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                await connectDB();
                const { email, password } = credentials ;
                // Add logic here to look up the user from the credentials supplied
                const user = await User.findOne({email});
                console.log(user)
                if (!user) {
                    throw new Error('No user found with the email');
                }

                const checkPassword = await compare(password, user.password);
                console.log(checkPassword)
                if (!checkPassword) {
                    throw new Error('Password doesnt match');
                }
                return user;
            }
        })
    ],
    pages: {
        signIn: "index",
    },
});

