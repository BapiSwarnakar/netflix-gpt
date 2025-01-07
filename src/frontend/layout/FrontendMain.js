import React from 'react'
import FrontendHeader from './FrontendHeader'
import FrontendBody from './FrontendBody'
import FrontendFooter from './FrontendFooter'

const FrontendMain = (props) => {
  const {element} = props;
  return (
     <div className="min-h-screen flex flex-col bg-black "> 
        <FrontendHeader />
        <main className="flex-grow">
          <FrontendBody element = {element} />
        </main>
          <FrontendFooter />
    </div>
  )
}

export default FrontendMain
