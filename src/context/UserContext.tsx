import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types/User";
import { useRouter } from "next/router";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  refetchUser: () => void; // Add refetchUser method
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data from the backend
  const handleUser = async () => {
    setIsLoading(false);
    const user = await getCurrentUser();
    console.log("context", user);
    setUser(user);
    setIsLoading(true);
    if (user) {
      const router = useRouter();
      router.replace(router.asPath); // This will re-fetch data and re-render the current page
      console.log("user context", user);
    }
  };

  // Run handleUser only on mount (empty dependency array)
  useEffect(() => {
    handleUser();
  }, []); // This will run only once when the component mounts

  // Add refetch function to allow manual refetching of user data
  const refetchUser = () => {
    handleUser(); // Trigger the refetch when called
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, refetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook to access user context
export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
