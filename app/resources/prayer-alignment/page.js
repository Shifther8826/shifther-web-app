"use client";

const dailyPrayers = [
  {
    day: "Day 1",
    title: "Alignment of the Heart",
    scripture: "Psalm 51:10",
    prayer: [
      "Father,",
      "Today, I ask You to align my heart with Yours. Search me and reveal anything in me that is divided, distracted, wounded, or resistant to Your will.",
      "Create in me a clean heart. Renew the right spirit within me. Remove anything that has been pulling my affections away from You.",
      "Teach me to desire what You desire. Help me love what You love and reject what does not please You.",
      "I surrender my emotions, motives, desires, and hidden places to You. Bring my heart back into full agreement with Your purpose.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "Where does my heart need to come back into alignment?",
      "What desire do I need to surrender to God?",
      "What is God revealing about my motives today?",
    ],
    declaration:
      "My heart belongs to God. I will not be led by divided desires. I choose a clean heart, a right spirit, and full alignment with the will of God.",
  },
  {
    day: "Day 2",
    title: "Alignment of the Mind",
    scripture: "Romans 12:2",
    prayer: [
      "Father,",
      "Today, I ask You to align my mind with Your truth. Renew my thoughts and deliver me from patterns of fear, confusion, comparison, and defeat.",
      "Where my thinking has been shaped by old cycles, heal me. Where my mind has been cluttered by distraction, clear me. Where lies have taken root, replace them with Your Word.",
      "Teach me to think from truth and not trauma. Teach me to meditate on what is pure, honest, just, lovely, and of good report.",
      "I bring every thought into obedience to Christ. Let my mind agree with who You are and what You have spoken.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "What thought pattern needs to be renewed?",
      "What lie do I need to replace with truth?",
      "What scripture can I meditate on today?",
    ],
    declaration:
      "My mind is being renewed by the Word of God. I will not agree with lies, fear, or confusion. My thoughts are coming into alignment with truth.",
  },
  {
    day: "Day 3",
    title: "Alignment of Decisions",
    scripture: "Proverbs 3:5-6",
    prayer: [
      "Father,",
      "Today, I ask You to align my decisions with Your wisdom. I do not want to move ahead of You, behind You, or outside of Your will.",
      "Help me trust You with all my heart and not lean on my own understanding. In every choice, teach me to acknowledge You.",
      "Expose decisions that are being led by pressure, fear, pride, impatience, or people-pleasing. Give me the courage to choose obedience over convenience.",
      "Order my decisions so that my life reflects Your direction. Lead me in the path that brings peace, clarity, and purpose.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "What decision needs God’s wisdom right now?",
      "Where have I been leaning on my own understanding?",
      "What choice would reflect obedience today?",
    ],
    declaration:
      "My decisions are submitted to God. I will not be rushed by pressure or moved by fear. I choose wisdom, obedience, and divine direction.",
  },
  {
    day: "Day 4",
    title: "Alignment of Steps",
    scripture: "Psalm 37:23",
    prayer: [
      "Father,",
      "Today, I ask You to align my steps with Your purpose. Order my path and keep me from walking into what You have not assigned to me.",
      "Where I have been delayed, strengthen me. Where I have been distracted, refocus me. Where I have been hesitant, give me courage to move.",
      "Let my steps be intentional. Let my movement be obedient. Let my pace be governed by Your timing and not by comparison.",
      "I trust You to lead me one step at a time. I will not despise small steps when they are ordered by You.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "What step has God been asking me to take?",
      "Where have I delayed movement?",
      "What small act of obedience can I do today?",
    ],
    declaration:
      "My steps are ordered by the Lord. I will move with obedience, peace, and confidence. I will not delay what God has told me to do.",
  },
  {
    day: "Day 5",
    title: "Alignment of Discipline",
    scripture: "1 Corinthians 9:27",
    prayer: [
      "Father,",
      "Today, I ask You to align my discipline with my purpose. Help me stop expecting transformation without structure.",
      "Teach me to steward my time, attention, habits, and energy well. Give me strength to follow through even when my emotions shift.",
      "Expose where I have been inconsistent, distracted, or casual with what You have placed in my hands. Help me build rhythms that support obedience.",
      "I receive the grace to be disciplined, focused, and faithful. Let my daily choices agree with my assignment.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "Where do I need more discipline?",
      "What habit is working against my purpose?",
      "What structure can I build today?",
    ],
    declaration:
      "Discipline protects my purpose. I will not be governed by emotion or inconsistency. I choose structure, focus, and faithful stewardship.",
  },
  {
    day: "Day 6",
    title: "Alignment of Obedience",
    scripture: "John 14:15",
    prayer: [
      "Father,",
      "Today, I ask You to align my obedience with Your instruction. Help me not only hear Your Word, but respond to it.",
      "Forgive me for the places where I have delayed, negotiated, or avoided what You asked of me. Give me a willing heart and a surrendered yes.",
      "Remove the fear that keeps me stuck. Remove the excuses that keep me circling. Remove the distractions that keep me from following through.",
      "I choose obedience over comfort. I choose Your will over my preference. I choose surrender over resistance.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "What instruction have I delayed obeying?",
      "What excuse do I need to release?",
      "What does obedience look like today?",
    ],
    declaration:
      "I choose obedience. I will not delay, negotiate, or resist what God has spoken. My yes belongs to Him.",
  },
  {
    day: "Day 7",
    title: "Alignment of Purpose",
    scripture: "Ephesians 2:10",
    prayer: [
      "Father,",
      "Today, I ask You to align me with purpose. Remind me that I am Your workmanship, created in Christ Jesus unto good works.",
      "Help me stop comparing my path to someone else’s. Help me stop minimizing what You placed inside of me. Help me stop shrinking from responsibility.",
      "Bring clarity to my assignment. Strengthen my confidence. Awaken the gifts, wisdom, and obedience needed for this season.",
      "Let my life produce what You intended. Let my yes bring You glory. Let my purpose remain covered, disciplined, and surrendered.",
      "In Jesus’ name,",
      "Amen.",
    ],
    reflection: [
      "What part of my purpose needs renewed focus?",
      "Where have I been comparing or minimizing myself?",
      "What is one step I can take toward purpose today?",
    ],
    declaration:
      "I am God’s workmanship. I am created with purpose. I will not shrink, compare, or drift. I choose alignment with the assignment God has placed on my life.",
  },
];

function getDailyPrayer() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % dailyPrayers.length;

  return dailyPrayers[index];
}

export default function PrayerAlignmentPage() {
  const todayPrayer = getDailyPrayer();

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
        <div style={card}>
          <p style={label}>Daily Prayer Guide</p>

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
            This prayer changes daily to help you bring your heart, mind,
            decisions, steps, discipline, obedience, and purpose back into
            alignment with God.
          </p>

          <div style={dailyBadge}>
            Today’s Prayer: {todayPrayer.day} — {todayPrayer.title}
          </div>
        </div>

        <div style={prayerBox}>
          <p style={label}>{todayPrayer.scripture}</p>

          <h2 style={yellowHeading}>{todayPrayer.title}</h2>

          {todayPrayer.prayer.map((line, index) => (
            <p key={index} style={prayerText}>
              {line}
            </p>
          ))}
        </div>

        <div style={reflectionBox}>
          <h2 style={yellowHeading}>Reflection Questions</h2>

          <ul style={listStyle}>
            {todayPrayer.reflection.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>

        <div style={declarationBox}>
          <h2 style={yellowHeading}>Declaration</h2>
          <p style={prayerText}>{todayPrayer.declaration}</p>
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

const card = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  marginBottom: "26px",
};

const label = {
  color: "#facc15",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "10px",
};

const introText = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#f3e8ff",
};

const dailyBadge = {
  display: "inline-block",
  marginTop: "18px",
  background: "rgba(250, 204, 21, 0.12)",
  border: "1px solid rgba(250, 204, 21, 0.35)",
  color: "#facc15",
  borderRadius: "999px",
  padding: "10px 16px",
  fontWeight: "bold",
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
