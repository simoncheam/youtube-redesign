import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/404') {
    return NextResponse.redirect(new URL('/page-not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/404', '/404/:path*'],
};