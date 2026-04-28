import { currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user = await currentUser();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Admin Clerk Test</h1>

      <p>
        Signed in as:{" "}
        {user?.emailAddresses?.[0]?.emailAddress || "No user found"}
      </p>

      <p>
        Role: {user?.publicMetadata?.role || "No role found"}
      </p>
    </main>
  );
}
