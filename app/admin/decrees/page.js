import { currentUser } from "@clerk/nextjs/server";

export default async function AdminDecreesPage() {
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
      <a href="/admin" style={{ color: "#ffeb3b" }}>
        ← Back to Admin
      </a>

      <h1 style={{ color: "#ffeb3b", marginTop: "20px" }}>
        Weekly Decrees
      </h1>

      <form
        style={{
          marginTop: "25px",
          maxWidth: "700px",
          display: "grid",
          gap: "15px",
        }}
      >
        <input placeholder="Decree Title" style={inputStyle} />
        <input placeholder="Scripture Reference" style={inputStyle} />
        <textarea placeholder="Write the weekly decree here..." rows="8" style={inputStyle} />
        <input placeholder="Audio link optional" style={inputStyle} />

        <button type="button" style={buttonStyle}>
          Save Decree
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#ffeb3b",
  color: "#0d1b2a",
  border: "none",
  padding: "14px",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
};
