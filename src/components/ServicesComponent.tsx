import SectionHead from "./SectionHead"
import type { ServicesItem } from "../utils/types"
import { servicesItems } from "../utils/appData"


const ServicesComponent = () => {
    return (
        <section className="wrapper">
            <SectionHead heading="Our Services" subHeadig="Fresh & Organic Beans" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-15">
                {servicesItems.map((item:ServicesItem, index) => {
                    return (
                        <article key={index} className="flex items-center gap-3">
                            <figure className=" ">
                                <img src={item.image} alt="service image" loading="lazy"/>
                            </figure>
                            <div>
                                <h2 className="text-dark text-2xl flex gap-3 capitalize">
                                    <span className="p-2 rounded-full bg-[var(--primary-fair)]">
                                        <item.icon /> 
                                    </span>{" "}
                                    {item.name}
                                </h2>
                                <p className="text-accent">{item.description}</p>
                            </div>
                        </article>
                    );
                })}
            </div>

        </section>
    )
}

export default ServicesComponent