import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        title: "Visit Us",
        value: [
            "Green Blue Nature (Pvt) Ltd",
            "Udu pussellawa, Badulla, ",
            "Sri Lanka",
        ],
    },
    {
        icon: Phone,
        title: "Call Us",
        value: ["+94 77 314 5296", "+94 71 345 5304"],
    },
    {
        icon: Mail,
        title: "Email Us",
        value: ["greenbluenaturesl@gmail.com"],
    },
    {
        icon: Clock3,
        title: "Working Hours",
        value: [
            "Monday - Friday",
            "8:30 AM - 5:30 PM",
        ],
    },
];

export default function ContactDetails() {
    return (
        <div className="h-full grid grid-cols-1 content-between">

            <div>
                <span className="inline-flex items-center rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Contact Informaation
                </span>

                {/* <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                    We'd Love to
                    <span className="text-primary"> Hear From you</span>
                </h1> */}

                <h2 className="mt-5 text-2xl font-bold text-primary lg:text-5xl">
                    Get In Touch <br />
                    <span className="text-foreground"> With Us</span>

                </h2>

                <p className="mt-4 max-w-lg text-sm text-muted-foreground">
                    Whether you have questions about our natural beauty
                    products, wholesale inquiries, or simply need assistance,
                    our friendly team is always ready to help.
                </p>
            </div>



            <div className="grid grid-col-0 md:grid-cols-2 gap-2 mt-3 md:mt-0">
                {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="group flex gap-3 rounded-3xl border border-border bg-background px-2 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                        >

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                <Icon className="h-4 w-4" />
                            </div>

                            <div>
                                <h3 className="text-xs text-gray-400">
                                    {item.title}
                                </h3>

                                <div className="mt-2">
                                    {item.value.map((line) => (
                                        <p
                                            key={line}
                                            className="text-sm font-semibold text-muted-foreground"
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>



                        </div>
                    )
                })}
            </div>

        </div>
    )
}

