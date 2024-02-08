import vial from "../assets/vial.png";
import capsules from "../assets/capsules.png";
import sachets from "../assets/sachets.png";
import syrups from "../assets/syrups.png";
import drops from "../assets/drops.png";

export default function Dosage() {
    return (
        <div className="relative bg-[url('/background-image-url.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative flex flex-col items-center justify-center text-white py-16">
                <h2 className="text-5xl font-bold mb-4">Our</h2>
                <h1 className="text-7xl font-bold mb-8">Dosage Forms</h1>
                <div className="grid grid-cols-5 gap-14">
                    <div className="flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 p-8 rounded-lg flex flex-col items-center">
                            <img className="text-white h-45 w-45" src={vial} />
                            <span className="mt-2 ">VIALS</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 p-8 rounded-lg flex flex-col items-center">
                            <img
                                className="text-white h-45 w-45"
                                src={capsules}
                            />
                            <span className="mt-2">CAPSULES</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 p-8 rounded-lg flex flex-col items-center">
                            <img
                                className="text-white h-45 w-45"
                                src={sachets}
                            />
                            <span className="mt-2">SACHETS</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 p-8 rounded-lg flex flex-col items-center">
                            <img
                                className="text-white h-45 w-45"
                                src={syrups}
                            />
                            <span className="mt-2">SYRUPS</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 p-8 rounded-lg flex flex-col items-center">
                            <img className="text-white h-45 w-45" src={drops} />
                            <span className="mt-2 text-center">DROPS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
