function Logo() {
  return (
    <header>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/tibialogo.png`} alt="Page logo" />
      </div>
    </header>
  );
}

export default Logo;
