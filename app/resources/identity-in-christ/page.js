export default function IdentityInChristPage() {
  const scriptures = [
    {
      title: "I Am a New Creature",
      verse: "2 Corinthians 5:17",
      scripture:
        "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
      reflection:
        "Your identity is no longer defined by what was. In Christ, you are made new.",
    },
    {
      title: "I Am Chosen",
      verse: "Ephesians 1:4",
      scripture:
        "According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love:",
      reflection:
        "Before people approved of you or rejected you, God had already chosen you in Him.",
    },
    {
      title: "I Am Accepted",
      verse: "Ephesians 1:6",
      scripture:
        "To the praise of the glory of his grace, wherein he hath made us accepted in the beloved.",
      reflection:
        "You do not have to perform for acceptance. In Christ, you are accepted in the beloved.",
    },
    {
      title: "I Am God’s Workmanship",
      verse: "Ephesians 2:10",
      scripture:
        "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.",
      reflection:
        "You are not random. You are God’s workmanship, created with purpose and assignment.",
    },
    {
      title: "I Am a Child of God",
      verse: "John 1:12",
      scripture:
        "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:",
      reflection:
        "Your identity begins with belonging. You are a child of God.",
    },
    {
      title: "I Am Free",
      verse: "John 8:36",
      scripture:
        "If the Son therefore shall make you free, ye shall be free indeed.",
      reflection:
        "Freedom is not just something you hope for. In Christ, freedom is part of your inheritance.",
    },
    {
      title: "I Am More Than a Conqueror",
      verse: "Romans 8:37",
      scripture:
        "Nay, in all these things we are more than conquerors through him that loved us.",
      reflection:
        "You are not just surviving. Through Christ, you overcome.",
    },
    {
      title: "I Am Seated with Christ",
      verse: "Ephesians 2:6",
      scripture:
        "And hath raised us up together, and made us sit together in heavenly places in Christ Jesus:",
      reflection:
        "You are not beneath what God has already raised you above.",
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
          maxWidth: "1000px",
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
            Scripture Guide
          </p>

          <h1
            style={{
              fontSize: "38px",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            Identity in Christ Scripture Guide
          </h1>

          <p style={introText}>
            Your identity must be rooted in Christ before it is shaped by
            circumstances, opinions, trauma, titles, success, or failure. Use
            this scripture guide to remind yourself who God says you are.
          </p>

          <p style={introText}>
            Read each scripture slowly. Speak it aloud. Let the Word correct
            every false identity and strengthen who you are becoming in Christ.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {scriptures.map((item) => (
            <div
              key={item.verse}
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
                  marginBottom: "8px",
                }}
              >
                {item.verse}
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h2>

              <p style={scriptureText}>“{item.scripture}”</p>

              <p style={reflectionText}>
                <strong>Reflection:</strong> {item.reflection}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "rgba(250, 204, 21, 0.12)",
            border: "1px solid rgba(250, 204, 21, 0.35)",
            borderRadius: "22px",
            padding: "28px",
            marginTop: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              color: "#facc15",
              marginBottom: "12px",
            }}
          >
            Identity Declaration
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#f8f5ff",
            }}
          >
            I am who God says I am. I am chosen, accepted, redeemed, loved, and
            made new in Christ. I reject every false identity, every lie, and
            every label that does not agree with the Word of God. My identity is
            rooted in Christ, and I will stand firm in who He has called me to
            be.
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
  marginBottom: "18px",
};

const scriptureText = {
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#f8f5ff",
  marginBottom: "16px",
  fontStyle: "italic",
};

const reflectionText = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#f3e8ff",
};
