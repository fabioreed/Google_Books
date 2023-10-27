import { NextResponse } from 'next/server'

export async function GET(request: any) {
  const paramsId = request.params
  const apiKey = 'AIzaSyCfKwQeRapfisH0ebMZZLE8xOjoD7tQ02Is'

  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${paramsId}&key=${apiKey}`)

  if (!res.ok) throw new Error('Problemas com o Fetch')

  const data = await res.json()

  return NextResponse.json({ data })
}