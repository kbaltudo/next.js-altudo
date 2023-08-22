import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server';

export function middleware(req: { nextUrl: string | NextURL | URL; }) {
    console.log("middlewareFile,req.nextUrl")
    return NextResponse.rewrite(new URL('/login', req.nextUrl));
}
export const config = {
    matcher: ["/login/:path*", "/our-locations/:path*"]
}