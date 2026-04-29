"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function DecreePage() {
  const [title, setTitle] = useState("");
  const [scripture, setScripture] = useState("");
  const [decree, setDecree] = useState("");
  const [audio, setAudio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("weekly_decrees").insert([
      {
        title,
        scripture,
        decree_text: decree,
        audio_url: audio,
      },
    ]);

    if (error) {
      alert("Error saving decree");
      console.error(error);
    } else {
      alert("Decree saved!");
      setTitle("");
      setScripture("");
      setDecree("");
      setAudio("");
    }
  };

  return (
    <main style={{ padding: "30px" }}>
      <h1>Weekly Decree</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px", maxWidth: "600px" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Scripture"
          value={scripture}
          onChange={(e) => setScripture(e.target.value)}
        />

        <textarea
          placeholder="Write decree..."
          value={decree}
          onChange={(e) => setDecree(e.target.value)}
        />

        <input
          placeholder="Audio URL"
          value={audio}
          onChange={(e) => setAudio(e.target.value)}
        />

        <button type="submit">Save Decree</button>
      </form>
    </main>
  );
}
