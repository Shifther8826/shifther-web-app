export default function HowToUsePage() {
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
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
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
          Start Here
        </p>

        <h1
          style={{
            fontSize: "38px",
            lineHeight: "1.1",
            marginBottom: "18px",
          }}
        >
          How to Use the SHIFTHer App
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#f3e8ff",
            marginBottom: "28px",
          }}
        >
          Welcome to the SHIFTHer App. This space was created to help you stay
          focused, grow spiritually, build discipline, and keep taking
          intentional steps toward the woman God has called you to become.
        </p>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>1. Begin with Today’s Focus</h2>
          <p style={textStyle}>
            Start each visit with Today’s Focus. This gives you a simple point
            of reflection so you can center your thoughts, check your heart, and
            move through the day with intention.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>2. Read the Daily Devotional</h2>
          <p style={textStyle}>
            The devotional section is designed to help you grow through
            scripture, reflection, and practical application. Do not rush
            through it. Read slowly, pray through what speaks to you, and ask
            God what He is revealing.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>3. Use the Weekly Decree</h2>
          <p style={textStyle}>
            The Weekly Decree is there to help you speak truth over your life.
            Read it aloud, listen to the audio when available, and allow the
            words to strengthen your faith and renew your mind.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>4. Visit the Resource Center</h2>
          <p style={textStyle}>
            The Resource Center gives you tools, worksheets, prayer guides, and
            reflection sheets to support your growth. Come back here whenever
            you need direction, structure, or a reset.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>5. Submit Prayer Requests</h2>
          <p style={textStyle}>
            When you need prayer, use the prayer request area. You do not have
            to carry everything alone. This app was created to help you stay
            connected, covered, and encouraged.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>6. Keep Showing Up</h2>
          <p style={textStyle}>
            Transformation does not happen because you opened the app one time.
            It happens when you keep showing up, keep reflecting, keep praying,
            and keep taking steps of obedience.
          </p>
        </div>

        <div
          style={{
            background: "rgba(250, 204, 21, 0.12)",
            border: "1px solid rgba(250, 204, 21, 0.35)",
            borderRadius: "18px",
            padding: "24px",
            marginTop: "30px",
          }}
        >
          <h2 style={{ ...headingStyle, color: "#facc15" }}>
            Simple App Rhythm
          </h2>
          <ul style={{ ...textStyle, paddingLeft: "22px" }}>
            <li>Open the app daily.</li>
            <li>Read Today’s Focus.</li>
            <li>Complete the devotional or reflection.</li>
            <li>Speak the Weekly Decree aloud.</li>
            <li>Use one resource each week.</li>
            <li>Take one step of obedience.</li>
          </ul>
        </div>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#f3e8ff",
            marginTop: "30px",
          }}
        >
          Remember, this app is not about perfection. It is about alignment,
          consistency, healing, discipline, and forward movement. Keep shifting.
        </p>

        <a
          href="/resources"
          style={{
            display: "inline-block",
            marginTop: "28px",
            backgroundColor: "#facc15",
            color: "#2d0f45",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            padding: "12px 22px",
          }}
        >
          ← Back to Resource Center
        </a>
      </section>
    </main>
  );
}

const sectionStyle = {
  marginBottom: "26px",
};

const headingStyle = {
  fontSize: "24px",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#f8f5ff",
};
