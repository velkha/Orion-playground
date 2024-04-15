'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../ui/styles/footer.css'
import Clock from './clock'

export default function Footer() {
  const [openApps, setOpenApps] = useState([])

  return (
    <footer className="footer">
      <div className="footer-section">
        <Link href="/">
          <button>
            <Image src="/windows-144.png" alt="Logo" width={100} height={100} />
          </button>
        </Link>
      </div>
      <div className="footer-section">
        {openApps.map((app, index) => (
          <div key={index} className="app">
            {app}
          </div>
        ))}
      </div>
      <div className="footer-section">
        <Clock />
      </div>
    </footer>
  )
}