import elmedvideo from "../assets/elmedvideo.mp4";

export default function Herosection() {
    return (
        <div>
            <video className="videoTag" autoPlay loop>
                <source src={elmedvideo} type="video/mp4" />
            </video>
        </div>
    );
}
