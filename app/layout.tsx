import Nav from '../components/Nav'
import '../styles/globals.css'
import 'styles/libraryOverrides.css'

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
                <footer className="bottom-0 fixed">Footer</footer>
            </body>
        </html>
    )
}
