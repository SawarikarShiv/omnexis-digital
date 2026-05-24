import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {
  const token = await getToken({ req: request })
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                     request.nextUrl.pathname.startsWith('/register')
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')

  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register']
}