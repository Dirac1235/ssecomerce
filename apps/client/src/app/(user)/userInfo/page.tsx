"use client"
import PaymentHistory from '@app/client/components/userComponents/paymentHistory';
import { useState } from 'react';
import Image from 'next/image';

const samplePaymentData = [
  { id: '1', paymentMethod: 'credit_card', status: 'completed', total: 100, date: '2023-05-21' },
  { id: '2', paymentMethod: 'paypal', status: 'pending', total: 50, date: '2023-05-22' },
  { id: '3', paymentMethod: 'bank_transfer', status: 'failed', total: 75, date: '2023-05-23' },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personalInfo');

  const renderContent = () => {
    switch (activeTab) {
      case 'personalInfo':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Account Information</h1>
              <p className="text-gray-600">Manage your personal information and preferences</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">First Name</p>
                      <p className="text-base font-medium text-gray-900">John</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">Last Name</p>
                      <p className="text-base font-medium text-gray-900">Doe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                      <p className="text-base font-medium text-gray-900">987542</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">Email Address</p>
                      <p className="text-base font-medium text-gray-900">sara@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'orderHistory':
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Order & Payment History</h1>
            <p className="text-gray-600 mb-6">View your past orders and payment information</p>
            <PaymentHistory paymentData={samplePaymentData} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            {/* User Info Header */}
            <div className="bg-pink-950 p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/user (2).png"
                  alt="User"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full bg-white p-1"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-semibold text-lg truncate">John Doe</h2>
                  <p className="text-pink-200 text-sm truncate">john.doe@example.com</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              <button
                onClick={() => setActiveTab('personalInfo')}
                className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-colors ${
                  activeTab === 'personalInfo'
                    ? 'bg-pink-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Image
                  src="/user (2).png"
                  alt="Account"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">Account Information</h3>
                  <p className="text-xs sm:text-sm opacity-75">View your account details</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('orderHistory')}
                className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-colors ${
                  activeTab === 'orderHistory'
                    ? 'bg-pink-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Image
                  src="/like.png"
                  alt="Orders"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">Order & Payment History</h3>
                  <p className="text-xs sm:text-sm opacity-75">View past payments</p>
                </div>
              </button>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="w-full bg-pink-950 hover:bg-pink-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  Logout
                </button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;