import { useRef } from "react";

function MainPage() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (
    <main>
      <h1>Main Page</h1>

      <div>
        <form
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <h3>Sign In</h3>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputRef}
            name="email"
            id="email"
            type="text"
            placeholder="Email or phone"
          />
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            name="password"
            id="password"
            type="text"
            placeholder="Email or phone"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </main>
  );
}

export default MainPage;
