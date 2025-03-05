const HomeTab: React.FC = () => {
    return (
      <div className="hero">
        <h1 data-testid="home-title">Welcome to My Portfolio</h1>
        <p data-testid="home-text">
          I'm Nina. I'm a passionate developer who loves building sleek and efficient web applications.
          I'm currently a software developer at JP Morgan Chase Bank.
          Browse through my projects and get in touch if you want to collaborate or chat!
        </p>

        <h2 data-testid="contact-me">Contact Me!</h2>
            <p className="black-jawn" data-testid="email">update@email.com • &nbsp;
            <a href="https://github.com/NinaEmiko" target="_blank" rel="noopener noreferrer" data-testid="github-repo-link">
                Github Repo
            </a>
            &nbsp; • &nbsp;
            <a href="http://linkedin.com/in/nina-mcnair" target="_blank" rel="noopener noreferrer" data-testid="linkedin-link">
                LinkedIn
            </a>
            </p>
      </div>
    );
  };

export default HomeTab;