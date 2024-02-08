import Contact from "./components/Contact";
import Dosage from "./components/dosage";
import Footer from "./components/footer";
import Gradiant from "./components/gradiant";
import Herosection from "./components/herosection";
import Keyfacts from "./components/keyfacts";
import Navbar from "./components/navbar";
import Worldmap from "./components/worldmap";
function App() {
    return (
        <>
            <Navbar />
            <Herosection />
            <Worldmap />
            <Gradiant />
            <Dosage />
            <Keyfacts />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
