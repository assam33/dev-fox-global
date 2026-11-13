import { stack } from "@/data/site";
import { h2, sectionPad } from "@/lib/ui";
import Container from "./Container";

export default function Stack() {
  return (
    <section id="stack" className={sectionPad}>
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-18">
        <div className="lg:sticky lg:top-[calc(72px+2rem)]">
          <h2 className={h2}>Technology we work with</h2>
          <p className="mt-4 max-w-104 text-[1.1rem]">
            We choose tools based on your project, your team and your budget, not on what is fashionable.
          </p>
        </div>

        <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {stack.map((group) => (
            <div key={group.title} className="border-t-2 border-ink pt-[1.1rem]">
              <dt className="font-head text-[1.15rem] font-semibold text-ink">{group.title}</dt>
              <dd className="mt-2">{group.items}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
