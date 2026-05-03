// Header Component - Displays the blog header with name passed as prop

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;