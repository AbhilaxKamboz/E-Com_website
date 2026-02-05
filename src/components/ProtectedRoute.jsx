import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    // if user is not login then redirect to  login page
    return <Navigate to="/login" replace />;
  }

  // if user login then render page render
  return children;
}
