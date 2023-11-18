import { Footer } from './Footer'
import Head from './Head'
import './globals.css'

export const metadata = {
  title: 'Learn Teach Global   -   An Education Enviroment for Women & Children',
  description: 'an Education Enviroment for Women & Children',


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body><Head />{children} <Footer /></body>
    </html>
  )
}
