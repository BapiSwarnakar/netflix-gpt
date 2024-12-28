import React from 'react';
import { X, Home, Users, Settings, BarChart2, FileText } from 'lucide-react';

const menuItems = [
    { icon: Home, text: 'Dashboard', active: true },
    { icon: Users, text: 'Users', active: false },
    { icon: FileText, text: 'Reports', active: false },
    { icon: BarChart2, text: 'Analytics', active: false },
    { icon: Settings, text: 'Settings', active: false },
];
const BackendSidebar = (props) => {
const {sidebarToggle, sidebarOpen} = props;
    
  return (
    <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
    <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
        <span className="text-xl font-semibold">Admin Panel</span>
        <button
        onClick={() => sidebarToggle()}
        className="p-1 rounded-md lg:hidden hover:bg-gray-700"
        >
        <X size={24} />
        </button>
    </div>
    <nav className="mt-4">
        {menuItems.map((item, index) => (
        <a
            key={index}
            href="/"
            className={`flex items-center px-4 py-3 text-sm ${
            item.active
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
        >
            <item.icon className="w-5 h-5 mr-3" />
            {item.text}
        </a>
        ))}
    </nav>
  </div>
  )
}

export default BackendSidebar
