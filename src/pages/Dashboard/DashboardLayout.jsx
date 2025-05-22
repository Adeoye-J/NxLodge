import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar, TopNav, etc. */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
