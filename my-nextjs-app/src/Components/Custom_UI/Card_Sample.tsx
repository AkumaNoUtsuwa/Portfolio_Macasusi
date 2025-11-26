import { WorkCard } from "@/app/page";

export default function CardSample({ title, description, image }: WorkCard) {
    return (
        <div
            className="
                bg-gray-900 bg-opacity-40 backdrop-blur-md
                p-4
                w-full max-w-xs sm:max-w-sm md:w-80
                rounded-xl
                text-center text-yellow-100
                shadow-lg
                transition-transform duration-300
                hover:scale-105 hover:shadow-2xl
            "
        >
            <img
                src={image}
                alt={title}
                className="
                    w-full
                    h-48 sm:h-56 md:h-64
                    object-cover
                    rounded-lg
                    mb-3
                    transition-transform duration-300
                    hover:scale-110
                "
            />

            <h2 className="text-xl font-bold leading-tight">{title}</h2>

            <p className="text-sm mt-2 leading-relaxed px-1">
                {description}
            </p>
        </div>
    );
}