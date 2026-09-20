import ProjectPage from "../component/ProjectPage";

/**
 * Copy this file for a new project, update the metadata and sections, then add
 * the new route and project-card entry. Shared spacing, typography, buttons,
 * and banner behavior live in ProjectPage.
 */
export default function Template() {
  return (
    <ProjectPage
      title="Project title"
      subtitle="One clear sentence describing the project."
      author="Linzan Ye"
      authorUrl="https://github.com/lynnzYe"
      date="Year – Present"
      actions={[
        { href: "https://example.com", label: "Project link" },
      ]}
    >
      <section>
        <h2>Overview</h2>
        <p>Explain the motivation and what the project makes possible.</p>
      </section>

      <section>
        <h2>Method</h2>
        <p>Describe the system, research process, or implementation.</p>
      </section>

      <section>
        <h2>Results</h2>
        <p>Summarize the outcome, evaluation, or next steps.</p>
      </section>
    </ProjectPage>
  );
}
