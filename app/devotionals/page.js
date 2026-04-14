export default function DevotionalsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffef4",
        fontFamily: "Arial, sans-serif",
        color: "#0d1b2a",
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #642a9d, #0d1b2a)",
          color: "white",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ffeb3b",
              marginBottom: "16px",
            }}
          >
            SHIFTHer Devotionals
          </p>
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.15",
              margin: "0 0 16px 0",
              maxWidth: "700px",
            }}
          >
            Simple encouragement with spiritual depth
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "700px",
              marginBottom: "28px",
            }}
          >
            This is a space to draw near, reflect deeply, and stay anchored in
            truth as you continue growing in faith, healing, and purpose.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              backgroundColor: "#ffeb3b",
              color: "#0d1b2a",
              borderRadius: "10px",
              padding: "14px 20px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Back to Home
          </a>
        </div>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#642a9d",
              }}
            >
              April 11
            </p>
            <h2 style={{ marginTop: "10px" }}>Draw Near</h2>
            <p style={{ fontWeight: "bold", color: "#0d1b2a" }}>James 4:8</p>
            <p style={{ lineHeight: "1.7" }}>
              Draw near to God, and he will draw near to you.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Drawing near is not about performance. It is about posture. God is
              not asking you to come perfectly. He is asking you to come
              intentionally. Every step toward Him matters.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Reflection: What would it look like for you to make room for God
              daily, even in a simple way?
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#642a9d",
              }}
            >
              April 12
            </p>
            <h2 style={{ marginTop: "10px" }}>Seek Him Wholeheartedly</h2>
            <p style={{ fontWeight: "bold", color: "#0d1b2a" }}>Jeremiah 29:13</p>
            <p style={{ lineHeight: "1.7" }}>
              And ye shall seek me, and find me, when ye shall search for me
              with all your heart.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              A divided heart struggles to stay still. A whole heart turns down
              the noise and chooses pursuit. God is not hiding from you. He
              responds to those who seek Him with sincerity.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Reflection: What distractions have been competing with your focus?
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#642a9d",
              }}
            >
              April 13
            </p>
            <h2 style={{ marginTop: "10px" }}>Faith That Shows Up</h2>
            <p style={{ fontWeight: "bold", color: "#0d1b2a" }}>Hebrews 11:6</p>
            <p style={{ lineHeight: "1.7" }}>
              Faith does not just believe that God can. Faith comes near because
              it trusts that He will meet you there. Your consistency is a sign
              that your heart still believes.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Sometimes growth looks small, but heaven honors every act of
              pursuit. Keep showing up.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Reflection: Where is God calling you to stay consistent?
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#642a9d",
              }}
            >
              April 14
            </p>
            <h2 style={{ marginTop: "10px" }}>Stay Planted</h2>
            <p style={{ fontWeight: "bold", color: "#0d1b2a" }}>Psalm 1:3</p>
            <p style={{ lineHeight: "1.7" }}>
              She shall be like a tree planted by the rivers of water.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Growth does not come from moving constantly. It comes from staying
              rooted in the right place. When you stay planted in God, strength
              is developed beneath the surface before it is seen outwardly.
            </p>
            <p style={{ lineHeight: "1.7" }}>
              Reflection: Where is God calling you to stay planted instead of
              moving?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
