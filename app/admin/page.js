import { currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (!user || role !== "admin") {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Access Denied</h1>
      </div>
    );
  }

  return (
    <main
      style={{
        padding: "30px",
        backgroundColor: "#0d1b2a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ color: "#ffeb3b", fontSize: "32px" }}>
        SHIFTHer Admin Dashboard
      </h1>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        {[
          { name: "Weekly Decrees", path: "/admin/decrees" },
          { name: "Devotionals", path: "/admin/devotionals" },
          { name: "Resources", path: "/admin/resources" },
          { name: "Events", path: "/admin/events" },
          { name: "Prayer Requests", path: "/admin/prayer-requests" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.path}
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              padding: "24px",
              borderRadius: "16px",
              textDecoration: "none",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h2 style={{ color: "#ffeb3b" }}>{item.name}</h2>
            <p>Manage {item.name.toLowerCase()}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
