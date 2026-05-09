export default function EventsPage() {
  const events = [
    {
      category: "Weekly Prayer",
      title: "SHIFTHer Midweek Prayer",
      date: "Every Wednesday",
      time: "5:00 AM EST",
      description:
        "Start the middle of your week in prayer, focus, and spiritual alignment.",
      button: "Prayer Details",
      link: "#",
    },
    {
      category: "App Growth",
      title: "Weekly Decree Release",
      date: "Every Week",
      time: "Available inside the app",
      description:
        "A fresh weekly decree to help you speak truth, silence distractions, and stay anchored in purpose.",
      button: "View Decree",
      link: "/decrees",
    },
    {
      category: "Community",
      title: "Monthly SHIFTHer Focus",
      date: "Monthly",
      time: "New theme each month",
      description:
        "Each month includes a focus area designed to help you grow in discipline, healing, identity, purpose, and spiritual maturity.",
      button: "Explore Resources",
      link: "/resources",
    },
    {
      category: "Gathering",
      title: "SHIFTHer 2026",
      date: "December 3–5, 2026",
      time: "Details coming soon",
      description:
        "A powerful gathering created for women who are ready to level up, heal, grow, and walk boldly in purpose.",
      button: "Stay Updated",
      link: "#",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #2d0f45 0%, #14051f 100%)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          <p
            style={{
              color: "#facc15",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            SHIFTHer Calendar
          </p>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Upcoming Events
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#f3e8ff",
            }}
          >
            Stay connected to upcoming prayer gatherings, app releases, growth
            resources, teachings, and special moments inside the SHIFTHer
            movement.
          </p>
        </div>

        <div
          style={{
            background: "rgba(250, 204, 21, 0.12)",
            border: "1px solid rgba(250, 204, 21, 0.35)",
            borderRadius: "24px",
            padding: "28px",
            marginBottom: "28px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#facc15",
              fontSize: "28px",
              marginBottom: "12px",
            }}
          >
            This Space Keeps You Connected
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#f8f5ff",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Use this page to know what is happening next. As new app moments,
            prayer gatherings, teachings, and SHIFTHer updates are released,
            they will be added here.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {events.map((event) => (
            <div
              key={event.title}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: "22px",
                padding: "26px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
              }}
            >
              <p
                style={{
                  color: "#facc15",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "13px",
                  marginBottom: "10px",
                }}
              >
                {event.category}
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "12px",
                }}
              >
                {event.title}
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  color: "#facc15",
                  fontWeight: "bold",
                  marginBottom: "6px",
                }}
              >
                {event.date}
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "#f3e8ff",
                  marginBottom: "16px",
                }}
              >
                {event.time}
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#f8f5ff",
                  marginBottom: "22px",
                }}
              >
                {event.description}
              </p>

              <a
                href={event.link}
                style={{
                  display: "inline-block",
                  backgroundColor: "#facc15",
                  color: "#2d0f45",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderRadius: "999px",
                  padding: "12px 20px",
                }}
              >
                {event.button} →
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "32px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: "22px",
            padding: "28px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              color: "#facc15",
              marginBottom: "12px",
            }}
          >
            More Dates Will Be Added
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#f8f5ff",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Check back often for new SHIFTHer updates, prayer opportunities,
            resource releases, and upcoming gatherings.
          </p>
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "28px",
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            padding: "12px 22px",
          }}
        >
          ← Back Home
        </a>
      </section>
    </main>
  );
}
