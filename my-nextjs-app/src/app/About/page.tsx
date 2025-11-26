export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center pt-24 text-center px-4">
            <h1 className="text-yellow-100 text-4xl sm:text-5xl md:text-6xl font-bold">
                About Me
            </h1>

            <img
                src="/Profile.png"
                alt="Profile"
                className="
                    about-img
                    w-40 h-40
                    sm:w-52 sm:h-52
                    md:w-64 md:h-64
                    mt-6
                    rounded-3xl
                    object-cover
                "
            />
            <p className="text-yellow-100 text-2xl max-w-4xl">
                I'm Karl a 3D artists and concept artist. I am a passionate and motivated Concept Artist with a vast knowledge on visual storytelling and design.
                As a new graduate, I have honed my skills in designing characters and environments, 2D and 3D art with the use of my academic projects and personal artwork.
                I’m eager to give life to many imaginations and contribute to creative teams that prioritize imaginations and world-building.
                My attention to detail, adaptability, and collaborative mindset, I’m excited to grow as an artist and refine my craft to meet industry standards.
            </p>
        </div>
    )
}