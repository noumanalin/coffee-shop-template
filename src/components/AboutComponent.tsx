import { Link } from "react-router-dom"
import SectionHead from "./SectionHead"
import aboutImage from '../assets/about.png'
import { Check } from "lucide-react"



const AboutComponent = () => {
    return (
        <section className="wrapper">
            <SectionHead heading="About Us" subHeadig="serving since 1950" />

            <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-left lg:grid-cols-3 gap-12 md:gap-4 my-15">
                {/* 1 */}
                <article className="">
                    <h2 className="text-4xl capitalize text-dark"><strong>Our story</strong></h2>
                    <p className="text-dark my-4">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                    <p className="text-accent mb-5">Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                        nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore
                        eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod

                    </p>
                    <Link to={'/'} className="px-5 py-2 text-white bg-[var(--primary-dark)]">Learn More</Link>
                </article>
                {/* 2 */}
                <figure>
                    <img src={aboutImage} alt={'Coffee Image'} />
                </figure>

                {/* 3 */}
                <article>
                    <h2 className="text-4xl capitalize text-dark"><strong>Our Vision</strong></h2>
                    <p className="text-accent my-4">Invidunt lorem justo sanctus clita. Erat lorem 
                        labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. 
                        Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                        </p>
                    <ul className="my-5">
                        <li className="flex gap-3"><Check className="text-fair font-semibold"/> <span className="text-dark">Lorem ipsum dolor sit amet</span></li>
                        <li className="flex gap-3"><Check className="text-fair font-semibold"/> <span className="text-dark">Lorem ipsum dolor sit amet</span></li>
                        <li className="flex gap-3"><Check className="text-fair font-semibold"/> <span className="text-dark">Lorem ipsum dolor sit amet</span></li>
                    </ul>
                    <div className="text-left ">
                        <Link to={'/'} className=" px-5 py-2 text-dark bg-[var(--primary-fair)]">Learn More</Link>
                    </div>


                </article>
            </div>

        </section>
    )
}

export default AboutComponent