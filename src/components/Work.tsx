import { projects, type ProjectTone } from "@/data/site";
import { h2, sectionPad } from "@/lib/ui";
import Container from "./Container";
import { ProjectIcon } from "./icons";

const tones: Record<ProjectTone, string> = {
  blue: "bg-[#DCE7FF] text-[#2349A8]",
  teal: "bg-[#D5F0EA] text-[#176B5A]",
  violet: "bg-[#E8DEFC] text-[#5B2DB0]",
  slate: "bg-[#DDE1EE] text-[#2F3A66]",
};

export default function Work() {
  return (
    <section id="work" className={`bg-paper ${sectionPad}`}>
      <Container>
        <div className="mb-10 max-w-152 lg:mb-14">
          <h2 className={h2}>Selected work</h2>
          <p className="mt-4 text-[1.1rem]">
            The kinds of products we build, across finance, healthcare, education and logistics. Click an image to
            visit the live website.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title}>
              {/* The whole image is a link to the project's live website */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the ${project.title} website (opens in a new tab)`}
                className={`group relative grid h-[210px] place-items-center overflow-hidden rounded-[20px] transition-shadow duration-200 hover:shadow-[0_18px_36px_-20px_rgba(21,25,52,0.45)] sm:h-[250px] ${tones[project.tone]}`}
              >
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-[0.85rem] py-[0.3rem] text-[0.88rem] font-semibold text-ink">
                  {project.sector}
                </span>
                <ProjectIcon
                  name={project.icon}
                  className="size-21 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-[0.9rem] py-[0.4rem] text-[0.88rem] font-semibold text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                  Visit website
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
              </a>
              <h3 className="mt-5 text-[1.4rem] font-semibold">{project.title}</h3>
              <p className="mt-2">{project.text}</p>
              <p className="mt-[0.85rem] border-t border-line pt-[0.85rem] text-[0.95rem] text-muted">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
