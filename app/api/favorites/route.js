import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  }

  const body = await request.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data: existing } = await supabase
    .from("favorite_decrees")
    .select("id")
    .eq("user_id", userId)
    .eq("decree_id", body.decree_id)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from("favorite_decrees")
      .delete()
      .eq("id", existing.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, saved: false, message: "Removed from saved decrees" });
  }

  const { error } = await supabase.from("favorite_decrees").insert([
    {
      user_id: userId,
      decree_id: body.decree_id,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, saved: true, message: "Saved ❤️" });
}
