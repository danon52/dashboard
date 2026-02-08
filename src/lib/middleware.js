import withAuth from "next-auth/middleware"
import { NextRequest } from "next/server"




export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== "ADMIN") {
            return NextRequest.redirect(new URL('/404', req.url))
        }

    }
)
export const config = {
    matcher: ['/products']
}