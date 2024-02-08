import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex justify-between">
                <div className="lg:w-1/4">
                    <h2 className="text-lg font-semibold">Our Philosophy</h2>
                    <p className="mt-2 text-base text-gray-500">
                        “The quality of life is more important than life itself”
                    </p>
                    <img
                        alt="Elmed Probiotics"
                        className="mt-4 h-24 w-full"
                        src={logo}
                    />
                </div>
                <div className="lg:w-1/4">
                    <h3 className="text-lg font-semibold">
                        Manufacturing Plant
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                        ELMED Life Sciences Pvt. Ltd. Plot no 36, IDA, Phase-5,
                        Cherlapalli, Hyderabad, Telangana, India - 500051.
                    </p>
                    <h3 className="text-lg font-semibold mt-6">
                        Corporate Office
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                        ELMED Life Sciences Pvt. Ltd., 36 Pinnacle, Road No -
                        36, Jubilee Hills Check Post Rd, Jawahar Colony, Jubilee
                        Hills, Hyderabad, Telangana, India - 500033.
                    </p>
                    <p className="flex items-center mt-2 text-base text-gray-500">
                        <PhoneIcon className="text-gray-500 mr-2" />
                        040-029568336{"\n              "}
                    </p>
                    <p className="flex items-center mt-2 text-base text-gray-500">
                        <MailboxIcon className="text-gray-500 mr-2" />
                        info@elmedlifesciences.com{"\n              "}
                    </p>
                </div>
                <div className="lg:w-1/4">
                    <h3 className="text-lg font-semibold">Connect With Us</h3>
                    <nav className="mt-2">
                        <ul className="space-y-2 text-base text-gray-500">
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Services</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4 mt-4">
                        <FacebookIcon className="text-blue-600" />
                        <InstagramIcon className="text-pink-500" />
                        <TwitterIcon className="text-blue-400" />
                        <LinkedinIcon className="text-blue-700" />
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <p className="mt-4 text-center text-base text-gray-400">
                    Copyright ©2023 ELMED Life Sciences.
                </p>
            </div>
        </footer>
    );
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MailboxIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
            <polyline points="15,9 18,9 18,11" />
            <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
            <line x1="6" x2="7" y1="10" y2="10" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
