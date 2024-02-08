import worldmap from "../assets/worldmap.mp4";

export default function Worldmap() {
    return (
        <div>
            <video className="videoTag" autoPlay loop>
                <source src={worldmap} type="video/mp4" />
            </video>
        </div>
    );
}
