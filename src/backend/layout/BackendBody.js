import React from 'react'

const BackendBody = (props) => {
  const { element } = props;
  return (
    <div className="p-6 bg-white rounded-lg shadow">
        {element}
    </div>
  )
}

export default BackendBody
