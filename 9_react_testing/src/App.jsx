import Button from "./components/Button";
import Input from "./components/Inputs";
import User from "./components/User";

function App() {
    return (
        <section className="w-full h-screen bg-slate-900 text-white">
            <div className="container mx-auto px-2">
                <h1 className="text-center text-2xl pt-16">First React Test Case</h1>
                <User username={"Mohd Sameer"} />
            </div>
        </section>
    );
}

export default App;
