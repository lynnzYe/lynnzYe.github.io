import SocialLinks from "./SocialLinks";

const Brief = () => {
  return (
    <div className="home-brief">
      <h1 className="home-brief__name">
        <span>Linzan</span>&nbsp;
        <span>Ye</span>
      </h1>
      <p className="home-brief__intro">
        <span>Hello! I&apos;m Linzan (Lynn).</span>
        <span>I am obsessed with music.</span>
        <span>I am also an engineer and researcher.</span>
        <span className="home-brief__quote">
          <i>“Music as moments of transcendence”</i>
        </span>
      </p>
      <SocialLinks
        twitterUrl="https://x.com/0Kurono_0"
        githubUrl="https://github.com/lynnzye/"
        emailAddress="kurono_s@outlook.com"
      />
    </div>
  );
};

export default Brief;
