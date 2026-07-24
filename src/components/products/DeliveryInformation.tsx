import { Truck, Clock3, BadgeDollarSign, PackageCheck, MapPin } from "lucide-react";

const deliveryItems = [

    {
        id: 1,
        icon: Truck,
        title: "Islandwide Delivery",
        description:
            "Delivery is available to locations across Sri Lanka.",
    },
    {
        id: 2,
        icon: Clock3,
        title: "Estimated Delivery Time",
        description:
            "Orders are generally delivered within 2–5 working days.",
    },
    {
        id: 3,
        icon: BadgeDollarSign,
        title: "Delivery Charges",
        description:
            "Delivery charges may vary depending on the destination and order size.",
    },
    {
        id: 4,
        icon: PackageCheck,
        title: "Secure Packaging",
        description:
            "Products are carefully packed to reduce the risk of damage during delivery.",
    },

]

export default function DeliveryInformation() {

    return (

        <section className="relative overflow-hidden bg-primary-soft/50 py-20 sm:py-24">

            <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary-light/20 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary-light/20 blur-[120px]" />

            <div className="container relative mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                        <MapPin className="h-4 w-4" />
                        Delivery Information
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
                        Delivered Safely to Your Doorstep
                    </h2>

                    <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                        We make every effort to prepare, pack and deliver your order
                        safely and efficiently.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {deliveryItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.id}
                                className="rounded-[1.75rem] bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-foreground">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
                    Delivery times may vary due to public holidays, weather conditions,
                    courier delays or remote delivery locations.
                </p>
            </div>

        </section>

    )

}