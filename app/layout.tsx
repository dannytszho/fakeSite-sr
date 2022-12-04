import Nav from '../components/Nav'
import '../styles/globals.css'
import 'styles/libraryOverrides.css'
import Footer from '../components/Footer'
import ReactQueryWrapper from './ReactQueryWrapper'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    )
}
