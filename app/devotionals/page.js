export default function DevotionalsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fffef4", fontFamily: "Arial, sans-serif", color: "#0d1b2a" }}>
      
      <section style={{ background: "linear-gradient(135deg, #642a9d, #0d1b2a)", color: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1>SHIFTHer Devotionals</h1>
          <p>31 Days of Focus, Faith, and Alignment</p>
        </div>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>

          {/* DAY 1 */}
          <div style={{ backgroundColor: "white", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <p>May 1</p>
            <h2>What Is Distracting You?</h2>
            <p><b>Hebrews 12:1</b></p>
            <p>Distraction is not always obvious. Sometimes it doesn’t look like sin—it looks like normal life. What has your attention is shaping your direction.</p>
            <p><b>Reflection:</b> What has been taking your attention more than it should?</p>
          </div>

          {/* DAY 2 */}
          <div style={{ backgroundColor: "white", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <p>May 2</p>
            <h2>The Cost of Distraction</h2>
            <p><b>Luke 10:41-42</b></p>
            <p>Distraction always costs something. It may not feel heavy now, but it will show up later in missed moments and lost clarity.</p>
            <p><b>Reflection:</b> What is distraction costing you?</p>
          </div>

          {/* DAY 3 */}
          <div style={{ backgroundColor: "white", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <p>May 3</p>
            <h2>Subtle Distractions</h2>
            <p><b>Song of Solomon 2:15</b></p>
            <p>It is often the small things that pull you away slowly. What seems harmless can still shift your focus over time.</p>
            <p><b>Reflection:</b> What small distractions have you been ignoring?</p>
          </div>

          {/* DAY 4 */}
          <div style={{ backgroundColor: "white", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <p>May 4</p>
            <h2>Emotional Distractions</h2>
            <p><b>Proverbs 4:23</b></p>
            <p>Your emotions are real, but they cannot lead you. When feelings take over, focus is lost.</p>
            <p><b>Reflection:</b> What emotion has been influencing your decisions?</p>
          </div>

          {/* DAY 5 */}
          <div style={{ backgroundColor: "white", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <p>May 5</p>
            <h2>Busyness vs Purpose</h2>
            <p><b>1 Corinthians 7:35</b></p>
            <p>You can be busy and still not be aligned. Purpose requires focus, not just movement.</p>
            <p><b>Reflection:</b> Are you busy or are you moving with purpose?</p>
          </div>

        </div>
      </section>
    </main>
  );
}
