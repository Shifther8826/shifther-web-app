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

          <div style={card}><p>May 1</p><h2>What Is Distracting You?</h2><p><b>Hebrews 12:1</b></p><p>What has your attention is shaping your direction.</p><p><b>Reflection:</b> What has been taking your attention?</p></div>

          <div style={card}><p>May 2</p><h2>The Cost of Distraction</h2><p><b>Luke 10:41-42</b></p><p>Distraction always costs something.</p><p><b>Reflection:</b> What is it costing you?</p></div>

          <div style={card}><p>May 3</p><h2>Subtle Distractions</h2><p><b>Song of Solomon 2:15</b></p><p>The small things pull you away slowly.</p><p><b>Reflection:</b> What small distractions are present?</p></div>

          <div style={card}><p>May 4</p><h2>Emotional Distractions</h2><p><b>Proverbs 4:23</b></p><p>Your emotions must be governed.</p><p><b>Reflection:</b> What emotion is leading you?</p></div>

          <div style={card}><p>May 5</p><h2>Busyness vs Purpose</h2><p><b>1 Corinthians 7:35</b></p><p>Being busy is not the same as being aligned.</p><p><b>Reflection:</b> Are you aligned or just active?</p></div>

          <div style={card}><p>May 6</p><h2>When Good Becomes Distraction</h2><p><b>Ecclesiastes 3:1</b></p><p>Not everything good is meant for now.</p><p><b>Reflection:</b> What good thing is out of season?</p></div>

          <div style={card}><p>May 7</p><h2>The Noise Around You</h2><p><b>1 Kings 19:12</b></p><p>God is not always in the noise.</p><p><b>Reflection:</b> What noise do you need to quiet?</p></div>

          <div style={card}><p>May 8</p><h2>The Battle of Thoughts</h2><p><b>2 Corinthians 10:5</b></p><p>Your thoughts can pull your focus.</p><p><b>Reflection:</b> What thoughts need to be cast down?</p></div>

          <div style={card}><p>May 9</p><h2>Overthinking</h2><p><b>Philippians 4:8</b></p><p>Overthinking leads to delay.</p><p><b>Reflection:</b> What are you overprocessing?</p></div>

          <div style={card}><p>May 10</p><h2>Fear as Distraction</h2><p><b>2 Timothy 1:7</b></p><p>Fear keeps you from moving forward.</p><p><b>Reflection:</b> Where has fear slowed you down?</p></div>

        </div>
      </section>
    </main>
  );
}

const card = {
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
};
