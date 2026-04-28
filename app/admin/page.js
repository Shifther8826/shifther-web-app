import { currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Please sign in first.</h1>
      </div>
    );
  }

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

      <p style={{ marginBottom: "30px" }}>
        Welcome to your private control center.
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <div style={cardStyle}>
          <h2 style={titleStyle}>Weekly Decrees</h2>
          <p>Manage weekly decrees here.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={titleStyle}>Devotionals</h2>
          <p>Manage devotionals here.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={titleStyle}>Resources</h2>
          <p>Manage resources here.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={titleStyle}>Events</h2>
          <p>Manage events here.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={titleStyle}>Prayer Requests</h2>
          <p>View prayer requests here.</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.08)",
  padding: "24px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.15)",
};

const titleStyle = {
  color: "#ffeb3b",
};
