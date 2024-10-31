"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const signIn = async () => await gitHubSignIn();
  const signOut = async () => await firebaseSignOut();
  console.log(user);
  return (
    <main>
      <h1>Week 9 Demo</h1>
      <h2>Login Page</h2>
      {user ? ( // If user is logged in, show the user's name and a logout button
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        // If user is not logged in, show a login button
        <div>
          <p>You are not logged in.</p>
          <button onClick={signIn}>Login with GitHub</button>
        </div>
      )}
      ;
    </main>
  );
}
