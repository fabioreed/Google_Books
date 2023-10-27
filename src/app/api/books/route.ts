import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const apiKey = 'AIzaSyCfKwQeRapfisH0ebMZZLE8xOjoD7tQ02Is'
  
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${apiKey}`)

  const resAll = await fetch(`https://www.googleapis.com/books/v1/volumes?q=all`)
  console.log(resAll)

  if (!res.ok) throw new Error('Problemas com o Fetch')

  const data = await res.json()

  console.log('nada aqui')

  return NextResponse.json({ data })
}