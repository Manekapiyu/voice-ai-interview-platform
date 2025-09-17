import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

interface AuthLayoutProps {
  children: ReactNode;
}


const AuthLayout = async ({ children }: AuthLayoutProps) => {
 
  const user = await isAuthenticated();


  if (!user) {
    redirect("/sign-in");
  }

  
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
