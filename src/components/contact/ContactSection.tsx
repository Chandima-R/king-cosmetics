import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-20">

            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start px-10 md:px-20 lg:px-40 ">
                <ContactDetails />
                <ContactForm />

            </div>

        </section>
    )
}