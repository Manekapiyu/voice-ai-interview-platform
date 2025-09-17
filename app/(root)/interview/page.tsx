import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";


const page = () => {
  return (
    <>
     <h3>Interview generation</h3>

      <Agent userName="You" userId="user1" type="generate"/>
    </>
  );
};

export default page;

 