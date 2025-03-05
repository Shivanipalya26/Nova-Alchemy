'use client'

import { FC, ReactNode, useEffect } from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

interface LayoutProps {
    children: ReactNode
}

const RootStructure: FC<LayoutProps> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="flex flex-col justify-between min-h-screen select-none p-2">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
    )
}

export default RootStructure