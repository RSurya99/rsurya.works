import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if(pathname.includes('/blog') || pathname.includes('/wiki') || pathname.includes('/reading-list')) return NextResponse.redirect(new URL('/under-development', req.url))
  return NextResponse.next()
}