"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  return (
    <main>
      <h1>Week 9 Demo</h1>
      <h2>Secure Page</h2>
    </main>
  );
}
