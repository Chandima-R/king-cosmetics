"use client"

import { useState } from "react";

export default function ContactForm() {

    const [isSumbmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    return (

        <div className="p-3 lg:p-5 w-full h-full border border-border rounded-3xl">

            <form className="space-y-3 grid grid-cols-2 gap-2">

                <div className="col-span-2 md:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                        Full Name
                    </label>
                    <input
                        required
                        placeholder="John Doe"
                        type="text"
                        className="h-10 text-sm w-full rounded-2xl border border-border bg-white px-5 outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                        Email
                    </label>
                    <input
                        required
                        placeholder="john@example.com"
                        type="email"
                        className="h-10 text-sm w-full rounded-2xl border border-border bg-white px-5 outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                        Phone Number
                    </label>
                    <input
                        required
                        placeholder="+94 77 123 4567"
                        type="tel"
                        className="h-10 text-sm w-full rounded-2xl border border-border bg-white px-5 outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" />

                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                        Subject
                    </label>
                    <input
                        required
                        placeholder="How can we help?"
                        type="text"
                        className="h-10 text-sm w-full rounded-2xl border border-border bg-white px-5 outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" />

                </div>

                <div className="col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                        Message
                    </label>
                    <textarea
                        required
                        rows={6}
                        placeholder="Write your message..."
                        className="w-full text-sm resize-none rounded-2xl border border-border bg-white px-5 py-4 outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                </div>

                <button type="submit" className="group col-span-2
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  bg-primary
                  px-7 py-2
                  font-semibold text-white
                  shadow-[0_10px_30px_rgba(63,116,28,0.20)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-primary-hover
                  text-sm"
                >Submit</button>

            </form>

        </div>

    )

}