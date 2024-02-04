import NextAuth, { Session, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './lib/prisma';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
    pages: {
      signIn: '/auth/login',
      newUser: '/auth/new-account',
    },


    callbacks: {
        jwt( { token, user } ){
            //If there is a user, we asign to the token data the value of the user to keep the data.
            if( user ){
                token.data = user;
            }
            return token;
        },

        session( {session, token}: {session: Session; token?: any} ){
            //Now that we have the user data in the token, we asign to the session.user the token data. we type it as any initially but that will
            //cause some errors when we build, so we have to create the file 'nextauth.d.ts' in the root to asign a type
            session.user = token.data as any;

            
            return session;
        },
    },

    providers: [

        Credentials({
            async authorize(credentials){

                const parsedCredentials = z
                    .object({email: z.string().email(), password: z.string().min(6)})
                    .safeParse(credentials);


                    if( !parsedCredentials.success ) return null;

                    const { email, password } = parsedCredentials.data;

                    const user = await prisma.user.findUnique({where: { email: email.toLowerCase() }});

                    if( !user ) return null;
                    if( !bcryptjs.compareSync( password, user.password ) ) return null;
                    

                    const { password: _, ...rest} = user;
                    return rest;
            }
        })

    ]
}


export const { signIn, signOut, auth, handlers } = NextAuth( authConfig );