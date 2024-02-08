import touch from "../assets/touch.jpg";

export default function Contact() {
    return (
        <section className="relative">
            <img
                alt="Handshake"
                className="w-full h-auto"
                height="475"
                src={touch}
                style={{
                    aspectRatio: "1904/475",
                    objectFit: "cover",
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="bg-[#17a2b8] text-white px-20 py-6 rounded-full">
                    Get In Touch
                </div>
            </div>
        </section>
    );
}
