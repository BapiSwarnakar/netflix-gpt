import React,{useState} from 'react'
import BackendSidebar from './BackendSidebar'
import BackendHeader from './BackendHeader';
import BackendBody from './BackendBody';

const BackendMain = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const setSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  
  const {element} = props;
  return (
    <div className="min-h-screen bg-gray-100">
      
      <BackendSidebar 
      sidebarToggle = {()=>setSidebarToggle()}
      sidebarOpen = {sidebarOpen} />
   
      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
        }`}
      >
        <BackendHeader 
        sidebarToggle = {()=>setSidebarToggle()}
        sidebarOpen = {sidebarOpen} />
        <main className="p-6">
          <BackendBody element={element} />
        </main>
      </div>
    </div>
  )
}

export default BackendMain
