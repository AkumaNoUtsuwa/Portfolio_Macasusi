export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col items-center pt-24 text-center px-4">
            <h1 className="text-yellow-100 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Contact Me
            </h1>

            <div className="mt-10 space-y-6 text-yellow-100 text-lg sm:text-xl md:text-2xl leading-relaxed">

                <p>
                    <a
                        href="https://www.facebook.com/karlmacasusi"
                        target="_blank"
                        className="hover:text-yellow-300 transition"
                    >
                        Facebook: Karl Macasusi
                    </a>
                </p>

                <p>
                    <a
                        href="https://www.instagram.com/akumanoutsuwa/"
                        target="_blank"
                        className="hover:text-yellow-300 transition"
                    >
                        Instagram: akumanoutsuwa
                    </a>
                </p>

                <p>
                    Gmail: karlmacasusi717@gmail.com
                </p>

                <p>
                    <a
                        href="https://www.artstation.com/akumanoutsuwa"
                        target="_blank"
                        className="hover:text-yellow-300 transition"
                    >
                        ArtStation: Akuma
                    </a>
                </p>
            </div>
        </div>
    );
}