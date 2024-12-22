import React from 'react'
import FrontendHeader from './FrontendHeader'
import FrontendBody from './FrontendBody'
import FrontendFooter from './FrontendFooter'

const FrontendMain = (props) => {
  const {element} = props;
  return (
     <div className="min-h-full"> 
        <FrontendHeader />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <FrontendBody element = {element} />
            <FrontendFooter />
          </div>
        </main>
    </div>
  )
}

export default FrontendMain
