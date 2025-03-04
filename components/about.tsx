import { CircleArrowRight, Files, Settings } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section>
            <div className="container mx-auto relative py-24">
                <div className="mx-auto flex max-w-7xl flex-wrap-reverse items-center">
                    <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
                        <div>
                            <div className="relative w-full max-w-lg">

                                <div className="relative ">
                                    <img className="mx-auto rounded-lg object-cover object-center" alt="hero"
                                        src="/header.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
                        <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                            Your tagline
                        </span>
                        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-5xl">
                            Medium length display headline.
                        </h1>
                        <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                            Free and Premium themes, UI Kits, templates and landing pages built
                            with Tailwind CSS, HTML & Next.js.
                        </p>
                        <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                            <dl className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                <div>
                                    <dt
                                        className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture size-6" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <circle cx="12" cy="12" r="9"></circle>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                                        </svg>
                                    </dt>
                                    <dd className="grow">
                                        <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                                            Short title
                                        </h2>
                                        <p className="text-base leading-relaxed text-gray-400">
                                            Explain 2 great feature here. Information about the feature.
                                        </p>
                                        <a href="#"
                                            className="mt-6 inline-flex items-center font-semibold text-blue-500 hover:text-gray-600 md:mb-2 lg:mb-0"
                                            title="read more">
                                            Learn More
                                            <svg className="ml-2 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                                                fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt
                                        className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture size-6" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <circle cx="12" cy="12" r="9"></circle>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                                        </svg>
                                    </dt>
                                    <dd className="grow">
                                        <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                                            Short title
                                        </h2>
                                        <p className="text-base leading-relaxed text-gray-400">
                                            Explain 2 great feature here. Information about the feature.
                                        </p>
                                        <a href="#"
                                            className="mt-6 inline-flex items-center font-semibold text-blue-500 hover:text-gray-600 md:mb-2 lg:mb-0"
                                            title="read more">
                                            Learn More
                                            <svg className="ml-2 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                                                fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

