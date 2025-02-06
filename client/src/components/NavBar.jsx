import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="bg-zinc-800 p-5">
                <div className="container mx-auto flex items-center">
                    <Link to="/" className="text-white text-xl font-bold">
                    Pokemon Awesome!
                    </Link>
                </div>
            </nav>
        </>
    );
}