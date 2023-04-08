import React from "react";
function Home() {
  return (
    <div className="text-warning bg-dark justify-content-center align-items-center">
      {/* <!--Landing page--> */}

      <h1>Welcome to the Joel Hilton Film Collection</h1>

      <img
        className="justify-content-center
        align-items-center"
        src="JoelHiltonHeadshot.jpg"
        alt="The math, myth and legend"
        height="400"
      />
      <br />
      <h3>This is the home of the world's most stupendous list of films</h3>
    </div>
  );
}

export default Home;
