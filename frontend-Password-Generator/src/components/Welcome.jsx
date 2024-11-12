
// import { useHistory } from "react-router-dom"; // if using react-router for navigation

const Welcome = () => {
//   const history = useHistory();

  // Logout handler - this can be replaced with actual logout logic
  const handleLogout = () => {
    // Clear user session (or any logout action you need)
    localStorage.removeItem("user"); // or use your preferred method to clear session
    
    // Redirect to login page (or any other page after logout)
    history.push("/login");
  };

  return (
    <div className="h-screen bg-[#111827] text-white flex flex-col justify-center items-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to SecurePass</h1>
        <p className="text-lg mb-6">You have successfully logged in! 🎉</p>
        <p className="text-sm text-gray-300 mb-8">
          You are now able to access your password manager, generate secure passwords, and much more.
        </p>

        <button
          onClick={handleLogout}
          className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Welcome;
