
import bgImage from "../assets/bg-image.jpg";

const SpecialOffer = () => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    };
    return (
        <section
            aria-label="special sunday offer"
            className="w-screen block-border-shape py-32 relative special-offer"
            style={{ backgroundImage: `url(${bgImage})` }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#301e1ad7] z-10" />

            {/* Content Container */}
            <article className="relative z-20 flex flex-col items-center justify-center text-white">
                <h3 className="text-4xl text-fair font-light">
                    <strong>50% OFF</strong>
                </h3>
                <h2 className="text-4xl md:text-5xl text-white font-bold mt-2">
                    Sunday Special Offer
                </h2>
                <p className="mt-4 text-sm md:text-base">
                    Only for sunday from 1st Jan to 30 Jan 2026
                </p>
                <form onSubmit={handleFormSubmit} className="bg-white pl-4 flex mt-8 w-full max-w-sm overflow-hidden">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="flex-1 border-none outline-none text-dark bg-transparent px-2 py-3"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 text-fair bg-[var(--primary-dark)]  font-bold hover:opacity-90 transition-opacity"
                    >
                        Sign Up
                    </button>
                </form>
            </article>
        </section>
    );
};


export default SpecialOffer