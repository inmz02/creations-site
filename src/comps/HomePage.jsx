import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div id="heroSection">
        <img src="src/assets/decor1.png" className="decor left" alt="logo" />

        <div className="mainpart">
          <img src="src/assets/logo.png" className="logoImage" alt="logo" />
          <h1>안녕하세요~! Hello~!</h1>
                  <p>A space filled with my creations to share with the world.</p>
                  <p className="text-red-700">🚫 under construction currently🚫</p>
          <button type="button">view the creations</button>
        </div>

        <img src="src/assets/decor2.png" className="decor right" alt="logo" />
      </div>
    </>
  );
};

export default HomePage;
