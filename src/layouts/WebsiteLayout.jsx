import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function WebsiteLayout({children}) {
  return (
    <>
    <Header/>
    <div className="mt-16 ">{children}</div>
    {/* <Purple /> */}
    <Footer />
  </>
  )
}

export default WebsiteLayout