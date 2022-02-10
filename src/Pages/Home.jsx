import React from "react";

function Home() {
  return (
    <div className="text-center">
      <h1>
        <a href="/admin">Admin View</a>
      </h1>
      <h1>
        <a href="/faculty">Faculty View</a>
      </h1>
      <h1>
        <a href="/student">Student View</a>
      </h1>

      <h1>
        <a href="/login">Log In</a>
      </h1>
    </div>
  );
}

export default Home;
