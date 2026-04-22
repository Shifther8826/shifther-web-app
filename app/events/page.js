export default function EventsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#ffeb3b",
            fontSize: "36px",
            marginBottom: "20px",
          }}
        >
          Upcoming Events
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "16px",
            marginBottom: "30px",
          }}
        >
          Stay connected with what’s happening in SHIFTHer.
        </p>

        {/* SHIFTHer 2026 Card */}
        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#ffeb3b" }}>SHIFTHer 2026</h2>

          <p style={{ color: "white", margin: "10px 0 20px 0" }}>
            A gathering for women ready to grow, heal, and move into what is next.
          </p>

          <img
            src="/shifther-2026-flyer.png"
            alt="SHIFTHer 2026"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <a
            href="https://forms.gle/xWpN5UGEktvpGQx29"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#ffeb3b",
              color: "#0d1b2a",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Get Updates
          </a>
        </div>
        {/* Midweek Prayer */}
        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#ffeb3b" }}>
{/* Midweek Prayer */}
<div
  style={{
    padding: "24px",
    borderRadius: "16px",
    backgroundColor: "rgba(255,255,255,0.06)",
    marginBottom: "30px",
  }}
>
  <h2 style={{ color: "#ffeb3b" }}>
    SHIFTHer Midweek Prayer
  </h2>

  <p
    style={{
      color: "white",
      margin: "10px 0 15px 0",
      fontSize: "16px",
    }}
  >
    Join us for a time of prayer, alignment, and spiritual refreshing in the middle of your week.
  </p>

  <p
    style={{
      color: "#d9d9d9",
      fontSize: "15px",
      marginBottom: "20px",
    }}
  >
    Wednesdays • 5:00 AM EST
    <br />
    Virtual Prayer Gathering
  </p>

  <a
    href="https://us02web.zoom.us/j/89531120046"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#642a9d",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    Get Prayer Access
  </a>
</div>
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "underline",
          }}
        >
          ← Back to Home
        </a>
      </section>
    </main>
  );
}
