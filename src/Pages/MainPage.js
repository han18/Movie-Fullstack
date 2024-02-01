function MainPage() {
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
            name="email"
            id="email"
            type="text"
            placeholder="Email or phone"
          />
          <label htmlFor="password">Password</label>
          <input
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
