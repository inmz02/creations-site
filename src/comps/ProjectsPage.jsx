import NavBar from "./NavBar";

const CreationsPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="projectHero">
          <img src="src/assets/logo.png" className="logoImage" alt="logo" />
          <h1>My Creations~!</h1>
        </div>
        <div className="allProjectsContainer">
          <div className="projectWrapper">
            <figure>
              <img src="src/assets/testImage.png" alt="" />
            </figure>
            <h2>PLAVE Photocard Widget</h2>
            <button type="button">view</button>
          </div>
          <div className="projectWrapper">
            <figure>
              <img src="src/assets/testImage.png" alt="" />
            </figure>
            <h2>PLAVE Photocard Widget</h2>
            <button type="button">view</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationsPage;
