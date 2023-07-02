
import { useEffect, useState } from 'react';
import {auth} from '../../config/firebase'// Assuming you have set up Firebase and imported the auth object
import Login from './Login';


const AuthenticatedPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    // User is not logged in, you can redirect or show a login page
    return <Login />;
  }

  // User is logged in, show the authenticated page
  return <div>Welcome, {user.email}!</div>;
};

export default AuthenticatedPage;
