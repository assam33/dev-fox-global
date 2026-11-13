import { services } from "@/data/site";
import { h2, sectionPad } from "@/lib/ui";
import Container from "./Container";
import { ServiceIcon } from "./icons";

export default function Services() {
  return (
    <section id="services" className={sectionPad}>
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-18">
        <div className="lg:sticky lg:top-[calc(72px+2rem)]">
          <h2 className={h2}>What we build</h2>
          <p className="mt-4 max-w-104 text-[1.1rem]">
            Design, development and hosting under one roof, so you deal with one team from start to finish.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block border-b-[1.5px] border-current pb-px font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Talk to us about your idea
          </a>
        </div>

        <ul className="border-t border-line">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid gap-y-[0.6rem] border-b border-line py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-start sm:gap-x-10 sm:gap-y-3 sm:py-[1.9rem]"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-[46px] flex-none place-items-center rounded-xl bg-[#ECEDFD] text-brand">
                  <ServiceIcon name={service.icon} className="size-[22px]" />
                </span>
                <h3 className="text-[1.3rem] font-semibold">{service.title}</h3>
              </div>
              <p className="pt-[0.2rem] max-sm:pl-[calc(46px+1rem)]">{service.text}</p>
            </li>
          ))}
        </ul>
      </Container>  
      
          
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-18">
        <div className="lg:sticky lg:top-[calc(72px+2rem)]">
          <h2 className={h2}>What we Serve</h2>
          <p className="mt-4 max-w-104 text-[1.1rem]">
            IT Support & Services.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block border-b-[1.5px] border-current pb-px font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Talk to us about your problem
          </a>
        </div>

        <ul className="border-t border-line">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid gap-y-[0.6rem] border-b border-line py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-start sm:gap-x-10 sm:gap-y-3 sm:py-[1.9rem]"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-[46px] flex-none place-items-center rounded-xl bg-[#ECEDFD] text-brand">
                  <ServiceIcon name={service.icon} className="size-[22px]" />
                </span>
                <h3 className="text-[1.3rem] font-semibold">{service.title}</h3>
              </div>
              <p className="pt-[0.2rem] max-sm:pl-[calc(46px+1rem)]">{service.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
