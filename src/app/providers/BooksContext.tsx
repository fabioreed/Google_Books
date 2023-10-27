import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"

interface IDefaultProvider {
  children: React.ReactNode
}

interface IBookContext {
  something: string
  setSomething: Dispatch<SetStateAction<string>>
}

const BookContext = createContext({} as IBookContext) // as IBookContext

export const BookProvider = ({ children }: IDefaultProvider) => {
  const [something, setSomething] = useState('')
  const [books, setBooks] = useState([])

  const favoriteBooks = (book: any) => {
    
  }

  useEffect(() => {
    const getBooks = async () => {
      const apiKey = 'AIzaSyCfKwQeRapfisH0ebMZZLE8xOjoD7tQ02Is'
  
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=all&key=${apiKey}`)
  
      if (!res.ok) throw new Error('Problemas com o Fetch')
  
      const data = await res.json()

      console.log(data)

      setBooks(data)
    }

    getBooks()
  }, [])

  return (
    <BookContext.Provider value={{ something, setSomething }}>
      { children }
    </BookContext.Provider>
  )
}