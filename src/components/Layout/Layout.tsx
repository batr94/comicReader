import React from 'react'
import Header from '../Header'
import './layout.css'

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className='layout'>
      <Header />
      <section className='content'>
        {children}
      </section>
    </div>
  )
}

export default Layout