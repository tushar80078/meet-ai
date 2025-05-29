import { auth } from "@/lib/auth";
import HomeView from "@/modules/home/views/home-views";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  return <HomeView />;
};

export default HomePage;
