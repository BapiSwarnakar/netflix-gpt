import React from 'react';
import { Menu,Bell } from 'lucide-react';


 const  BackendHeader = (props)  => {

  const {sidebarToggle} = props;

  return (
    <header className="bg-white shadow-sm">
    <div className="flex items-center justify-between h-16 px-4">
      <button
        onClick={() => sidebarToggle()}
        className="p-1 rounded-md lg:hidden hover:bg-gray-100"
      >
        <Menu size={24} />
      </button>
      
      {/* Header Right */}
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-500" />
      </div>
    </div>
  </header>
  )
}

export default BackendHeader