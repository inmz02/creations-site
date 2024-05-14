const NavBar = () => {
  return (
    <div className="flex justify-between items-center myNavBar">
      <p>inmz02's creations</p>
      <div className="flex gap-12">
        <div className="flex langBtns">
          <p className="langOn rounded-tl-md rounded-bl-md">en</p>
          <p className="rounded-tr-md rounded-br-md">kr</p>
        </div>
        <p>✧*:･ﾟ✧</p>
        <p>creations</p>
        <p>✧*:･ﾟ✧</p>
        <p>about me</p>
      </div>
    </div>
  );
}

export default NavBar