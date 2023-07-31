import Navbar from "@/components/Navbar";
import NavbarBottom from "@/components/NavbarBottom";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <Navbar session={session} />
        <NavbarBottom />
      </>
    );
  }

  return redirect("/");
};

export default Dashboard;
