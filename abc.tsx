// "use client";

// import { useState } from "react";
// import { ChevronDown, HelpCircle } from "lucide-react";

// import { faqSectionData } from "@/data/faq";

// export default function FAQSection() {
//     const [activeId, setActiveId] = useState<number | null>(
//         faqSectionData.items[0]?.id ?? null,
//     );

//     const handleToggle = (id: number) => {
//         setActiveId((currentId) => (currentId === id ? null : id));
//     };

//     return (
//         <section className="relative overflow-hidden py-16 lg:py-20">
//             {/* Background decorations */}
//             <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[130px]" />

//             <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary-soft/35 blur-[130px]" />

//             <div className="container relative mx-auto px-6">
//                 {/* Section header */}
//                 <div className="mx-auto max-w-3xl text-center">
//                     <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
//                         <HelpCircle className="h-4 w-4" />

//                         {faqSectionData.badge}
//                     </span>

//                     <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
//                         {faqSectionData.title}
//                     </h2>

//                     <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
//                         {faqSectionData.description}
//                     </p>
//                 </div>

//                 {/* FAQ accordion */}
//                 <div className="mx-auto mt-12 max-w-4xl space-y-4">
//                     {faqSectionData.items.map((item, index) => {
//                         const isActive = activeId === item.id;
//                         const contentId = `faq-answer-${item.id}`;

//                         return (
//                             <article
//                                 key={item.id}
//                                 className={`overflow-hidden rounded-2xl border bg-background transition-all duration-300 ${isActive
//                                     ? "border-primary/25 shadow-[0_18px_45px_-30px_rgba(15,61,46,0.45)]"
//                                     : "border-border/70 hover:border-primary/20"
//                                     }`}
//                             >
//                                 <button
//                                     type="button"
//                                     aria-expanded={isActive}
//                                     aria-controls={contentId}
//                                     onClick={() => handleToggle(item.id)}
//                                     className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
//                                 >
//                                     <div className="flex items-start gap-4">
//                                         <span
//                                             className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${isActive
//                                                 ? "bg-primary text-white"
//                                                 : "bg-primary-soft text-primary"
//                                                 }`}
//                                         >
//                                             {String(index + 1).padStart(2, "0")}
//                                         </span>

//                                         <h3
//                                             className={`pt-1 text-base font-semibold leading-6 transition-colors duration-300 sm:text-lg ${isActive
//                                                 ? "text-primary"
//                                                 : "text-foreground"
//                                                 }`}
//                                         >
//                                             {item.question}
//                                         </h3>
//                                     </div>

//                                     <span
//                                         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isActive
//                                             ? "rotate-180 border-primary bg-primary text-white"
//                                             : "border-primary/15 bg-primary-soft text-primary"
//                                             }`}
//                                     >
//                                         <ChevronDown className="h-4 w-4" />
//                                     </span>
//                                 </button>

//                                 <div
//                                     id={contentId}
//                                     className={`grid transition-all duration-300 ease-in-out ${isActive
//                                         ? "grid-rows-[1fr] opacity-100"
//                                         : "grid-rows-[0fr] opacity-0"
//                                         }`}
//                                 >
//                                     <div className="overflow-hidden">
//                                         <div className="border-t border-primary/10 px-5 pb-6 pt-5 sm:px-6 sm:pl-[76px]">
//                                             <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
//                                                 {item.answer}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </article>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }

