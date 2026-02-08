import Credentials from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import { compare } from "bcrypt"

export const config = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            credentials: {
                email: '',
                password: ''

            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user) {
                    return null
                }

                const correctPassword = await compare(credentials.password, user.password)
                if (correctPassword) {
                    return {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                }
            },

        })
    ],
    callbacks: {
        async jwt({ user, token }) {
            console.log({
                'user': user,
                'token': token
            })
            if (user) {
                token.id = user.id
                token.email = user.email
                token.role = user.role
            }

            return token
        },
        async session({ token, session }) {
            id: token.id
            email: token.email
            role: token.role
        },
        callbacks: {
            async jwt({ user, token }) {
                console.log({
                    'user': user,
                    'token': token
                })
                if (user) {
                    token.id = user.id
                    token.email = user.email
                    token.role = user.role
                }

                return token
            },
            async session({ token, session }) {
                id: token.id
                email: token.email
                role: token.role
            }
        }
    }
}