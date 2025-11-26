import CardSample from "@/Components/Custom_UI/Card_Sample";

export interface WorkCard {
    title: string;
    description: string;
    image: string;
}

export default function WorkPage() {
    const works: WorkCard[] = [
        {
            title: "Sauron",
            description: "One of my best 3D landscapes: Sauron's tower from Lord of The Rings.",
            image: "Projects/Sauron.png",
        },
        {
            title: "Weapons",
            description: "A dark medieval fantasy weapon collection I designed and modeled.",
            image: "Projects/WEAPON.png",
        },
        {
            title: "Kaiju:02",
            description: "My first concept art created for my personal project.",
            image: "Projects/2.png",
        },
    ];

    return (
        <div className="min-h-screen text-center pt-24 px-4">
            <h1 className="text-yellow-100 text-4xl sm:text-5xl md:text-6xl font-bold">
                My Works
            </h1>

            <div
                className="
                    flex flex-wrap
                    justify-center
                    gap-8
                    mt-12
                "
            >
                {works.map((work, index) => (
                    <CardSample
                        key={index}
                        title={work.title}
                        description={work.description}
                        image={work.image}
                    />
                ))}
            </div>
        </div>
    );
}