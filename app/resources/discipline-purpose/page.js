export default function DisciplinePurposePage() {
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
          maxWidth: "950px",
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
            Worksheet
          </p>

          <h1
            style={{
              fontSize: "38px",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            Discipline Protects Purpose Worksheet
          </h1>

          <p style={introText}>
            Discipline protects your purpose, peace, progress, and obedience.
            Desire alone will not produce transformation. Discipline brings
            structure to what you say you want.
          </p>

          <p style={introText}>
            Use this worksheet slowly and honestly. This is not about shame.
            This is about alignment.
          </p>
        </div>

        <div style={highlightBox}>
          <h2 style={yellowHeading}>Core Statement</h2>
          <p style={largeText}>
            Discipline is the bridge between what you desire and what you
            actually become.
          </p>
        </div>

        <WorksheetSection
          number="1"
          title="What Discipline Is Protecting"
          description="Discipline is not punishment. Discipline is protection. It protects what God has placed in you from distraction, inconsistency, and emotional decision-making."
          questions={[
            "What has God placed in my hands that needs protection?",
            "What part of my purpose has been exposed to inconsistency?",
            "What do I keep saying I want, but have not yet built structure around?",
          ]}
        />

        <WorksheetSection
          number="2"
          title="Where I Need Structure"
          description="Structure helps your yes become visible. When there is no structure, desire often stays in the heart but never becomes movement."
          questions={[
            "Where do I need more structure in my daily life?",
            "What area feels scattered, delayed, or out of order?",
            "What simple rhythm would help me move forward this week?",
          ]}
        />

        <WorksheetSection
          number="3"
          title="Old Patterns I Must Stop Protecting"
          description="You cannot keep asking for a new life while protecting old patterns. Some patterns must be confronted so transformation can continue."
          questions={[
            "What old pattern have I been making excuses for?",
            "What behavior keeps interrupting my progress?",
            "What do I need to stop protecting so I can grow?",
          ]}
        />

        <WorksheetSection
          number="4"
          title="One Discipline I Can Start This Week"
          description="You do not have to change everything at once. Start with one discipline that is clear, realistic, and connected to your growth."
          questions={[
            "What is one discipline I can start this week?",
            "When will I do it?",
            "How will I know I followed through?",
          ]}
        />

        <WorksheetSection
          number="5"
          title="My Commitment Statement"
          description="Write a simple commitment statement that gives language to your decision. Speak it aloud and return to it when your emotions shift."
          questions={[
            "What am I committing to protect?",
            "What discipline am I choosing to practice?",
            "What will this discipline produce in my life if I stay consistent?",
          ]}
        />

        <div style={highlightBox}>
          <h2 style={yellowHeading}>Declaration</h2>
          <p style={largeText}>
            I will not let my purpose go uncovered. I choose discipline,
            structure, obedience, and consistency. I will stop protecting old
            patterns and start building the rhythms that support my next level.
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

function WorksheetSection({ number, title, description, questions }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        borderRadius: "22px",
        padding: "28px",
        boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
        marginBottom: "24px",
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
        Section {number}
      </p>

      <h2
        style={{
          fontSize: "26px",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.7",
          color: "#f3e8ff",
          marginBottom: "18px",
        }}
      >
        {description}
      </p>

      <div>
        {questions.map((question) => (
          <div
            key={question}
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "16px",
              padding: "18px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#f8f5ff",
                marginBottom: "12px",
                fontWeight: "bold",
              }}
            >
              {question}
            </p>

            <div
              style={{
                minHeight: "70px",
                borderBottom: "1px solid rgba(255,255,255,0.35)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const introText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f3e8ff",
  marginBottom: "18px",
};

const highlightBox = {
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  borderRadius: "22px",
  padding: "28px",
  marginBottom: "24px",
};

const yellowHeading = {
  fontSize: "26px",
  color: "#facc15",
  marginBottom: "12px",
};

const largeText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f8f5ff",
};
