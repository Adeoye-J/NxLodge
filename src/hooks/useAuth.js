export const useAuth = () => {
  const token = localStorage.getItem('token'); // or session, context, etc.
  return {
    isLoggedIn: !!token
  };
};
