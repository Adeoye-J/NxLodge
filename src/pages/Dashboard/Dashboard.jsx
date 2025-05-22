import React from 'react'
import {Routes, Route} from 'react-router-dom'

const Dashboard = () => {

    return (
        <div>
            {/* <div className="flex flex-col items-center mt-10 mb-4">
                <h1 className='text-2xl md:text-3xl font-bold text-center mb-2 font-sansita text-blue-950'><span className='text-blue-600'>Dashboard</span></h1>
                <div className="h-0.5 w-[150px] rounded-xl bg-blue-950"></div>
            </div>
            <p className='max-sm:text-sm text-center text-gray-600 mb-5 font-semibold italic'>Welcome to your dashboard. Here you can manage your properties and view statistics.</p> */}



            {/* Dashboard layout and routes - Sidebar and content area */}

            {/* routes go Here */}

            <Routes>
                <Route path="/" element={<div>Dashboard Home</div>} />
                <Route path="/properties" element={<div>Properties</div>} />
                <Route path="/users" element={<div>Users</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
                <Route path="/reports" element={<div>Reports</div>} />
                <Route path="/notifications" element={<div>Notifications</div>} />
                <Route path="/messages" element={<div>Messages</div>} />
                <Route path="/profile" element={<div>Profile</div>} />
                <Route path="/help" element={<div>Help</div>} />
                <Route path="/logout" element={<div>Logout</div>} />
                <Route path="/analytics" element={<div>Analytics</div>} />
                <Route path="/feedback" element={<div>Feedback</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
                <Route path="/support" element={<div>Support</div>} />
                <Route path="/billing" element={<div>Billing</div>} />
                <Route path="/subscriptions" element={<div>Subscriptions</div>} />
                <Route path="/integrations" element={<div>Integrations</div>} />
                <Route path="/api" element={<div>API</div>} />
                <Route path="/webhooks" element={<div>Webhooks</div>} />
                <Route path="/audit-log" element={<div>Audit Log</div>} />
                <Route path="/user-management" element={<div>User Management</div>} />
                <Route path="/role-management" element={<div>Role Management</div>} />
                <Route path="/permissions" element={<div>Permissions</div>} />
                <Route path="/access-control" element={<div>Access Control</div>} />
            </Routes>
        </div>
    )
}

export default Dashboard