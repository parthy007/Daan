import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt"


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentails",
      name:"Credentials",
      async authorize(credentials){

        await connect();
        
        try{
          const user = await User.findOne({email: credentials.email})

          if(user){
            const passwordCheck = await bcrypt.compare(credentials.password, user.password)

            if(passwordCheck){
              return user
            }else{
              return new Error("Wrong Credentials!");
            }
          }else{
            return new Error("User not found");
          }
        }catch(err){
          throw new Error(err);
        }
      }
    })
  ],
  pages:{
    error: "/dashboard/login"
  }
});

export { handler as GET, handler as POST };