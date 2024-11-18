import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const Home = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="h-screen bg-[#111827] text-white flex flex-col justify-center items-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to SecurePass</h1>
        <p className="text-lg mb-6">You have successfully logged in! 🎉</p>
        <motion.div
          className="p-4 mb-6 flex flex-col items-start bg-blue-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Profile Information
          </h3>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Name:</span> {user.name}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Email:</span> {user.email}
          </p>
        </motion.div>

        <motion.div
          className="p-4 mb-6 flex flex-col items-start bg-blue-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Account Activity
          </h3>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Joined:</span>
            {new Date(user.createdAt).toLocaleDateString("en-UK", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Last Login:</span> 
            {user.lastLogin ? formatDate(user.lastLogin) : "You just signed up!"}
          </p>
        </motion.div>

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

export default Home;
