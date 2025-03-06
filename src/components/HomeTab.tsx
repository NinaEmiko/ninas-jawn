const HomeTab: React.FC = () => {
    return (
      <div className="hero">
        <h1 data-testid="home-title">Welcome to My Portfolio</h1>
        <p data-testid="home-text">
          Hello! I'm Nina. I'm a passionate full-stack software developer at JP Morgan Chase Bank.
          Browse through my projects and take a look around. I'm excited to hear what you think!
        </p>

        <h2 data-testid="contact-me">Contact Info</h2>
            <a href="https://github.com/NinaEmiko" target="_blank" rel="noopener noreferrer" data-testid="github-repo-link">
                Github
            </a>
            &nbsp; • &nbsp;
            <a href="http://linkedin.com/in/nina-mcnair" target="_blank" rel="noopener noreferrer" data-testid="linkedin-link">
                LinkedIn
            </a>
      </div>
    );
  };

export default HomeTab;