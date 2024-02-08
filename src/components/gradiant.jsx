import animal from "../assets/animal.png";
import human from "../assets/human.png";
import aqua from "../assets/aqua.png";
import agriculture from "../assets/agriculture.png";

export default function Gradiant() {
    return (
        <div className="bg-[#004643] text-white py-16 px-8">
            <h2 className="text-5xl font-bold mb-10 text-center">
                Our Segments
            </h2>
            <div className="flex justify-center space-x-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                    <img
                        alt="Human Health"
                        className="rounded-full mb-4 mx-auto"
                        height="170"
                        src={human}
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width="170"
                    />
                    <h3 className="text-xl font-semibold">Human Health</h3>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                    <img
                        alt="Animal Health"
                        className="rounded-full mb-4 mx-auto"
                        height="170"
                        src={animal}
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width="170"
                    />
                    <h3 className="text-xl font-semibold">Animal Health</h3>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                    <img
                        alt="Aquaculture"
                        className="rounded-full mb-4 mx-auto"
                        height="170"
                        src={aqua}
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width="170"
                    />
                    <h3 className="text-xl font-semibold">Aquaculture</h3>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                    <img
                        alt="Agriculture"
                        className="rounded-full mb-4 mx-auto"
                        height="170"
                        src={agriculture}
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width="170"
                    />
                    <h3 className="text-xl font-semibold">Agriculture</h3>
                </div>
            </div>
        </div>
    );
}
