import { useState } from "react";
import Map from "./Map";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // basic regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            alert("Name is required");
            return;
        }
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email");
            return;
        }
        if (!formData.subject.trim()) {
            alert("Subject is required");
            return;
        }
        if (formData.message.trim().length < 10) {
            alert("Message must be at least 10 characters long");
            return;
        }

        setLoading(true);

        try {
            // Write your api call here
            await new Promise((resolve) => setTimeout(resolve, 2000));

            alert("✅ Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            alert("❌ Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Map */}
            <Map />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2">
                <input type="text" name="name" placeholder="Your Name"
                    value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 outline-none" required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 outline-none"
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 outline-none"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[100px] p-2 border border-gray-300 outline-none"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`text-dark px-8 py-2 bg-[var(--primary-fair)] transition rounded ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
                        }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
