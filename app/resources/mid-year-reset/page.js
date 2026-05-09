export default function MidYearResetPage() {
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
            Reflection Sheet
          </p>

          <h1
            style={{
              fontSize: "38px",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            Mid-Year Reset Reflection Sheet
          </h1>

          <p style={introText}>
            Reset is not starting over. Reset is returning to alignment. This
            reflection sheet was created to help you pause, review where you
            are, identify where you may have drifted, and recommit to the next
            part of your journey with clarity and intention.
          </p>

          <p style={introText}>
            Move through each section slowly. Be honest, but do not condemn
            yourself. Reflection is not for shame. Reflection is for growth.
          </p>
        </div>

        <ReflectionSection
          number="1"
          title="Reflect Honestly"
          description="Before you can reset, you must be willing to look honestly at where you are."
          questions={[
            "What has gone well for me so far this year?",
            "Where have I seen growth, even if it has been small?",
            "What have I learned about myself in this season?",
          ]}
        />

        <ReflectionSection
          number="2"
          title="Identify Drift"
          description="Drift does not always happen loudly. Sometimes it happens through distraction, delay, discouragement, or lack of structure."
          questions={[
            "Where have I drifted from what I said I wanted?",
            "What habits, patterns, or distractions pulled me off course?",
            "What area of my life needs attention again?",
          ]}
        />

        <ReflectionSection
          number="3"
          title="Realign Priorities"
          description="Realignment means putting first things first again. It is choosing what matters over what simply demands attention."
          questions={[
            "What needs to become a priority again?",
            "What do I need to release so I can focus better?",
            "What does obedience look like for me in this next season?",
          ]}
        />

        <ReflectionSection
          number="4"
          title="Rebuild Rhythm"
          description="Momentum is protected by rhythm. A rhythm gives your growth a place to live."
          questions={[
            "What daily or weekly rhythm would help me stay consistent?",
            "What spiritual discipline do I need to strengthen?",
            "What practical discipline do I need to rebuild?",
          ]}
        />

        <ReflectionSection
          number="5"
          title="Recommit with Intention"
          description="A reset becomes powerful when it leads to a clear commitment."
          questions={[
            "What am I recommitting to for the next part of the year?",
            "What one step will I take this week?",
            "What will I do differently so I do not keep repeating the same cycle?",
          ]}
        />

        <div style={highlightBox}>
          <h2 style={yellowHeading}>My Reset Declaration</h2>
          <p style={largeText}>
            I am not behind. I am returning to alignment. I choose to reflect
            honestly, release what has been pulling me away, and recommit to the
            purpose, discipline, and obedience required for my next season. I
            will not drift through the rest of this year. I will move with
            intention.
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

function ReflectionSection({ number, title, description, questions }) {
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
