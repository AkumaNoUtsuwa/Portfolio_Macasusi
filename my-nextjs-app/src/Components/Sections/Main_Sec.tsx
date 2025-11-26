export default function HeroSection() {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center pt-20 text-center px-4">
            <h1
                className="
                    text-yellow-100
                    text-4xl sm:text-5xl md:text-6xl
                    font-bold
                    leading-tight md:leading-snug

            ">Welcome to my page</h1>
            <p className="text-yellow-100
                text-lg sm:text-xl md:text-2xl
                max-w-3xl
                mt-6
                leading-relaxed">
               Hello! Welcome to my Portfolio website! I'm Karl a 3D artists and concept artist. Here, you can explore my works, learn more about me,
               and see the projects I've created throughout my journey.
           </p>
        </div>
    )
}