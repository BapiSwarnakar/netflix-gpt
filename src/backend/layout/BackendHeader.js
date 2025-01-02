import React, {useState, useRef, useEffect} from "react";
import { Menu, Bell, Search, User, Key, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const BackendHeader = (props) => {

  const navigate = useNavigate();


  const { sidebarToggle } = props;
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const profileMenuItems = [
    { icon: User, text: 'My Profile', path: '/profile' },
    { icon: Key, text: 'Change Password', path: '/change-password' },
    { icon: Settings, text: 'Settings', path: '/settings' },
  ];

  const logoutHandler = () => {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <button
          onClick={() => sidebarToggle()}
          className="p-1 rounded-md lg:hidden hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="relative ml-4 flex-1 max-w-xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Header Right */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="relative" ref={profileDropdownRef}>
            <div className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}>
              <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm font-medium hover:bg-gray-600 transition-colors">
                JD
              </div>
            </div>

            {/* Profile Dropdown Menu */}
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs text-gray-500">john.doe@example.com</p>
                </div>
                {profileMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 ${item.className || ''}`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.text}
                  </Link>
                ))}
                <Link
                    key="logout"
                    to=""
                    onClick={logoutHandler}
                    className={`flex items-center px-4 py-2 text-sm hover:bg-gray-50 text-red-500`}
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BackendHeader;
