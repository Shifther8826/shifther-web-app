import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== "admin") {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  return (
    <main style={{ padding: "30px", backgroundColor: "#0d1b2a", minHeight: "100vh", color: "white" }}>
      <h1 style={{ color: "#ffeb3b", fontSize: "32px" }}>SHIFTHer Admin Dashboard</h1>
      <p style={{ marginBottom: "30px" }}>Welcome, Michelle. This is your private control center.</p>

      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {[
          "Weekly Decrees",
          "Devotionals",
          "Resources",
          "Events",
          "Prayer Requests",
        ].map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h2 style={{ color: "#ffeb3b" }}>{item}</h2>
            <p>Manage {item.toLowerCase()} here.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
