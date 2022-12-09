import React from 'react'
import Nav from '../components/Nav'
import '../styles/globals.css'
import 'styles/libraryOverrides.css'
import Footer from '../components/Footer'

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
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    )
}
