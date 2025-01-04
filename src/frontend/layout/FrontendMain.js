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
          <FrontendBody element = {element} />
          <FrontendFooter />
        </main>
    </div>
  )
}

export default FrontendMain
