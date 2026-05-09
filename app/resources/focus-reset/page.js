export default function FocusResetPage() {
  const resetDays = [
    {
      day: "Day 1",
      title: "Recognize the Distraction",
      scripture: "Hebrews 12:1",
      focus:
        "Before you can reset your focus, you must be honest about what has been pulling your attention away.",
      reflection:
        "What has been distracting you the most in this season? Is it fear, busyness, comparison, discouragement, procrastination, or something else?",
      action:
        "Write down three distractions you need to confront and one thing you will do today to reduce their access to your attention.",
    },
    {
      day: "Day 2",
      title: "Return to Focus",
      scripture: "Isaiah 26:3",
      focus:
        "Focus is not just about concentration. It is about returning your mind to what God has called you to steward.",
      reflection:
        "Where have your thoughts been scattered? What do you need to bring back into alignment?",
      action:
        "Choose one priority for today and give it your full attention before moving to anything else.",
    },
    {
      day: "Day 3",
      title: "Reset Your Mind",
      scripture: "Romans 12:2",
      focus:
        "A focused life requires a renewed mind. You cannot carry old thinking into a new level of obedience.",
      reflection:
        "What thought pattern has been working against your growth?",
      action:
        "Replace one limiting thought with one truth from God’s Word and speak it aloud throughout the day.",
    },
    {
      day: "Day 4",
      title: "Rebuild Discipline",
      scripture: "1 Corinthians 9:27",
      focus:
        "Discipline gives structure to what you say you desire. It protects your purpose from emotional inconsistency.",
      reflection:
        "Where do you need more structure in your daily life?",
      action:
        "Create one simple discipline for today. Keep it small, clear, and measurable.",
    },
    {
      day: "Day 5",
      title: "Protect Your Peace",
      scripture: "Philippians 4:7",
      focus:
        "Peace must be guarded. Every open door does not deserve access to your heart, mind, or time.",
      reflection:
        "What has been disturbing your peace that you need to set boundaries around?",
      action:
        "Identify one boundary you need to honor today and follow through with it.",
    },
    {
      day: "Day 6",
      title: "Choose Obedience",
      scripture: "John 14:15",
      focus:
        "Focus becomes powerful when it is connected to obedience. The goal is not just productivity; the goal is alignment.",
      reflection:
        "What step of obedience have you delayed or avoided?",
      action:
        "Take one small step today toward what God has already instructed you to do.",
    },
    {
      day: "Day 7",
      title: "Commit to Consistency",
      scripture: "Galatians 6:9",
      focus:
        "One focused day is good, but consistent focus produces transformation over time.",
      reflection:
        "What rhythm do you need to continue after this reset is complete?",
      action:
        "Write a simple commitment statement for how you will protect your focus moving forward.",
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
            Focus Reset
          </p>

          <h1
            style={{
              fontSize: "38px",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            7-Day Focus Reset
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#f3e8ff",
              marginBottom: "18px",
            }}
          >
            This 7-day reset was created to help you pause, refocus, and return
            to intentional growth. You do not have to start on a Monday. You do
            not have to wait for a perfect moment. Start where you are and give
            God your attention again.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#f3e8ff",
            }}
          >
            Move through one day at a time. Read the focus, reflect honestly,
            and complete the action step before moving to the next day.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {resetDays.map((item) => (
            <div
              key={item.day}
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
                {item.day}
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#facc15",
                  fontWeight: "bold",
                  marginBottom: "14px",
                }}
              >
                Scripture: {item.scripture}
              </p>

              <p style={textStyle}>
                <strong>Focus:</strong> {item.focus}
              </p>

              <p style={textStyle}>
                <strong>Reflection:</strong> {item.reflection}
              </p>

              <p style={textStyle}>
                <strong>Action Step:</strong> {item.action}
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
            Closing Declaration
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#f8f5ff",
            }}
          >
            I am returning to focus. I will not allow distraction to govern my
            attention, my obedience, or my purpose. I choose alignment,
            discipline, peace, and consistency. I will keep showing up for what
            God has placed in my hands.
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

const textStyle = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#f8f5ff",
  marginBottom: "14px",
};
