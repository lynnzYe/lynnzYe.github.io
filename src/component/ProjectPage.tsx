import React, { ReactNode } from "react";
import "./ProjectPage.css";

interface ProjectAction {
  href: string;
  label: string;
  icon?: ReactNode;
}

interface ProjectPageProps {
  title: string;
  subtitle?: string;
  author?: string;
  authorUrl?: string;
  date?: string;
  banner?: string;
  bannerAlt?: string;
  actions?: ProjectAction[];
  children: ReactNode;
}

/**
 * Shared shell for project pages. New projects only need metadata, actions,
 * a banner, and their unique sections—no repeated title/button/banner markup.
 */
const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  subtitle,
  author,
  authorUrl,
  date,
  banner,
  bannerAlt = "Project banner",
  actions = [],
  children,
}) => {
  return (
    <div className="project-page">
      <main className="project-page__main">
        <header className="project-page__header">
          <h1>{title}</h1>
          {subtitle ? <p className="project-page__subtitle">{subtitle}</p> : null}
          {author || date ? (
            <div className="project-page__meta">
              {author ? (
                authorUrl ? (
                  <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                    {author}
                  </a>
                ) : <span>{author}</span>
              ) : null}
              {date ? <span>{date}</span> : null}
            </div>
          ) : null}
          {actions.length > 0 ? (
            <div className="project-page__actions">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-page__action"
                >
                  {action.icon}
                  <span>{action.label}</span>
                </a>
              ))}
            </div>
          ) : null}
        </header>

        {banner ? (
          <figure className="project-page__banner">
            <img src={banner} alt={bannerAlt} />
          </figure>
        ) : null}

        <div className="project-page__body">{children}</div>
      </main>
    </div>
  );
};

export default ProjectPage;
