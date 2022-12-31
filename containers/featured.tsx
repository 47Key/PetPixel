import React, { useEffect } from 'react';

export const Featured: React.FC = () => {
    useEffect(() => {
        const scrollElements = document.querySelectorAll(".js-scroll");
        const elementInView = (element: any, dividend = 1) => {
            const elementTop = element.getBoundingClientRect().top;
                return (
                    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
                );
        };
        const elementOutofView = (element: any) => {
            const elementTop = element.getBoundingClientRect().top;

            return (
                elementTop > (window.innerHeight || document.documentElement.clientHeight)
            );
        };
        const displayScrollElement = (element: any) => {
            element.classList.add("scrolled");
        };
        const hideScrollElement = (element: any) => {
            element.classList.remove("scrolled");
        };
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    hideScrollElement(el)
                }
            })
        }
        window.addEventListener("scroll", () => {
            handleScrollAnimation();
        });
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center text-gray-900">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Transform Your Pet into a Work of Art with Our AI Image Generation</h2>
                    <a href="#" className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        Learn more about inner source
                        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
                <div className="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
                    <div className="flex mb-2 md:flex-col md:mb-0">
                        <img id="left-featured" className="js-scroll slide-left mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="dog-king.jpg" alt="A renaissance style portrait of a dog king wearing a crown" />
                        <div>
                            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Work of Art</h3>
                            <p className="text-gray-500 dark:text-gray-400">Our team of skilled artists and AI experts will turn your images into stunning works of art that you'll love to share with your friends and family. Whether you want to transform your pet into a regal masterpiece or an anime character, we've got you covered.</p>
                        </div>
                    </div>
                    <div className="flex mb-2 md:flex-col md:mb-0">
                        <img id="middle-featured" className="js-scroll fade-in-bottom mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="cat-queen.jpg" alt="A renaissance style portrait of a cat queen wearing a crown" />
                        <div>
                            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Extraordinary Results</h3>
                            <p className="text-gray-500 dark:text-gray-400">Our advanced AI technology allows us to generate high-quality images that are indistinguishable from those created by hand. With just a few clicks, you can turn your ordinary images into extraordinary works of art that will blow your mind."</p>
                        </div>
                    </div>
                    <div className="flex md:flex-col">
                        <img id="right-featured" className="js-scroll slide-right mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="bird-royalty.jpg" alt="A renaissance style portrait of a royal bird wearing a fancy vest, surrounded by a golden picture frame" />
                        <div>
                            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">One of a Kind</h3>
                            <p className="text-gray-500 dark:text-gray-400">Don't settle for ordinary images when you can have something truly unique and memorable. With our AI image-to-image generation service, you can transform your images into one-of-a-kind works of art that will stand out from the crowd. So why wait? Try our service today and see the magic for yourself!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
