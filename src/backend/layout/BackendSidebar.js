import React, {useState} from 'react';
import { X, Home, Users, Settings, BarChart2, FileText, UserPlus, UserCheck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
    { icon: Home, text: 'Dashboard', active: true, path: '/dashboard'},
    {
        icon: Users,
        text: 'Users',
        active: false,
        hasDropdown: true,
        dropdownItems: [
          { icon: UserPlus, text: 'Add User', path: '/user/add' },
          { icon: UserCheck, text: 'View Users', path: '/user/view' }
        ]
      },
    { icon: FileText, text: 'Reports', active: false },
    { icon: BarChart2, text: 'Analytics', active: false },
    { icon: Settings, text: 'Settings', active: false },
];
const BackendSidebar = (props) => {
const {sidebarToggle, sidebarOpen} = props;
const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
            <div key={index}>
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.hasDropdown) {
                    e.preventDefault();
                    setUserDropdownOpen(!userDropdownOpen);
                  }
                }}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  item.active
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.text}
                </div>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      userDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.hasDropdown && userDropdownOpen && (
                <div className="bg-gray-800">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className="flex items-center px-4 py-3 text-sm pl-12 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <dropdownItem.icon className="w-4 h-4 mr-3" />
                      {dropdownItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
  </div>
  )
}

export default BackendSidebar
