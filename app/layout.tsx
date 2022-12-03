import Nav from '../components/Nav'
import '../styles/globals.css'

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
            </body>
        </html>
    )
}