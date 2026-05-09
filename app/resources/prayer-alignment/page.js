export default function PrayerAlignmentPage() {
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
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            marginBottom: "26px",
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
            Prayer Guide
          </p>

          <h1
            style={{
              fontSize: "38px",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            Prayer for Alignment
          </h1>

          <p style={introText}>
            Alignment is the place where your heart, thoughts, decisions, and
            steps come back under the leadership of God. Use this prayer when
            you feel scattered, distracted, delayed, or pulled away from what
            God has called you to steward.
          </p>
        </div>

        <div style={prayerBox}>
          <h2 style={yellowHeading}>Prayer</h2>

          <p style={prayerText}>Father,</p>

          <p style={prayerText}>
            I come before You asking You to bring me back into alignment. Align
            my heart with Your will. Align my thoughts with Your truth. Align my
            decisions with Your wisdom. Align my steps with Your purpose.
          </p>

          <p style={prayerText}>
            Where I have been distracted, refocus me. Where I have been delayed,
            strengthen me. Where I have been discouraged, revive me. Where I
            have been moving in my own strength, teach me to depend on You
            again.
          </p>

          <p style={prayerText}>
            Father, remove anything that is pulling me away from obedience.
            Expose the patterns, habits, relationships, fears, and thoughts that
            are working against my growth.
          </p>

          <p style={prayerText}>
            Give me the discipline to protect what You have placed in my hands.
            Give me the courage to obey even when it is uncomfortable. Give me
            the wisdom to know what needs my attention and what needs to be
            released.
          </p>

          <p style={prayerText}>
            I surrender my plans, my timing, my emotions, and my desires to You.
            I do not want movement without alignment. I do not want progress
            without purpose. I do not want open doors that pull me away from Your
            will.
          </p>

          <p style={prayerText}>
            Lead me, correct me, strengthen me, and settle me. Help me walk in
            clarity, peace, discipline, obedience, and faith.
          </p>

          <p style={prayerText}>
            Today, I choose alignment. I choose Your way. I choose Your timing. I
            choose to trust You with every step.
          </p>

          <p style={prayerText}>In Jesus’ name,</p>

          <p style={prayerText}>Amen.</p>
        </div>

        <div style={reflectionBox}>
          <h2 style={yellowHeading}>Reflection Questions</h2>

          <ul style={listStyle}>
            <li>Where do I feel out of alignment right now?</li>
            <li>What has been pulling my attention away from obedience?</li>
            <li>What do I need to surrender back to God?</li>
            <li>What is one step I can take today to realign?</li>
          </ul>
        </div>

        <div style={declarationBox}>
          <h2 style={yellowHeading}>Declaration</h2>
          <p style={prayerText}>
            I am coming back into alignment. My heart belongs to God. My steps
            are ordered by God. My focus is returning. My obedience is
            strengthening. I will not be led by distraction. I will be led by
            God.
          </p>
        </div>

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

const introText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f3e8ff",
};

const prayerBox = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  marginBottom: "26px",
};

const reflectionBox = {
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  borderRadius: "22px",
  padding: "28px",
  marginBottom: "24px",
};

const declarationBox = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "22px",
  padding: "28px",
  marginBottom: "24px",
};

const yellowHeading = {
  fontSize: "26px",
  color: "#facc15",
  marginBottom: "16px",
};

const prayerText = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#f8f5ff",
  marginBottom: "18px",
};

const listStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#f8f5ff",
  paddingLeft: "22px",
};
