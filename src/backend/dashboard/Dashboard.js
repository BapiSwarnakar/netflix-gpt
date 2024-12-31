import React from 'react'
import { Users, UserCheck, FileText, UserMinus } from 'lucide-react';

const Dashboard = () => {
  const statisticsCards = [
    {
      title: 'Total Users',
      value: '15,348',
      increase: '+12%',
      icon: Users,
      color: 'blue',
      bgLight: 'bg-blue-50',
      textLight: 'text-blue-600',
      bgDark: 'bg-blue-500'
    },
    {
      title: 'Total Blogs',
      value: '2,456',
      increase: '+8%',
      icon: FileText,
      color: 'purple',
      bgLight: 'bg-purple-50',
      textLight: 'text-purple-600',
      bgDark: 'bg-purple-500'
    },
    {
      title: 'Active Users',
      value: '12,594',
      increase: '+18%',
      icon: UserCheck,
      color: 'green',
      bgLight: 'bg-green-50',
      textLight: 'text-green-600',
      bgDark: 'bg-green-500'
    },
    {
      title: 'Deactive Users',
      value: '2,754',
      increase: '-4%',
      icon: UserMinus,
      color: 'red',
      bgLight: 'bg-red-50',
      textLight: 'text-red-600',
      bgDark: 'bg-red-500'
    }
  ];
  return (
    <>
    <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
    {statisticsCards.map((card, index) => (
      <div
        key={index}
        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{card.title}</p>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {card.value}
              </p>
              <span className={`ml-2 text-sm font-medium ${
                card.increase.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {card.increase}
              </span>
            </div>
          </div>
          <div className={`p-3 rounded-full ${card.bgLight}`}>
            <card.icon 
              className={`w-6 h-6 ${card.textLight}`}
            />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className={card.textLight}>
              {Math.abs(parseInt(card.increase))}%
            </span>
          </div>
          <div className="mt-1 w-full h-2 bg-gray-100 rounded-full">
            <div
              className={`h-2 rounded-full ${card.bgDark}`}
              style={{
                width: `${Math.abs(parseInt(card.increase))}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* You can keep or modify the rest of your content below the cards */}
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Detailed Statistics</h2>
    <p className="text-gray-600">
      View detailed analytics and reports below.
    </p>
  </div>
  </>
  )
}

export default Dashboard
