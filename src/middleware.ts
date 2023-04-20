import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if(pathname.includes('/wiki')) return NextResponse.redirect(new URL('/under-development', req.url))
  return NextResponse.next()
}