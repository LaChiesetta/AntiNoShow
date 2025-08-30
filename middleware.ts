import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthPage = request.nextUrl.pathname.startsWith('/admin/login');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/admin/dashboard') || 
                         request.nextUrl.pathname.startsWith('/admin/reservations');
  
  // For protected routes, we'll let the client-side auth handle redirects
  // since we're using localStorage which isn't available in middleware
  
  // Only redirect root to dashboard
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};