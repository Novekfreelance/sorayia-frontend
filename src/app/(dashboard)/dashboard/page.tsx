import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <main>
        <h1 className="text-7xl-600">Welcome to your dashboard</h1>
      </main>
    );
  }

  return (
    <main>
      <div>Please login</div>
    </main>
  );
};

export default Dashboard;
