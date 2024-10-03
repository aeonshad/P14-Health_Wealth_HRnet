import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center mt-20 mb-20">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
                    Welcome to <span className="text-primary">HRnet</span>
                </h1>
                <p className="text-lg text-primary-foreground">Your human resources management platform.</p>
            </div>

            <div className="rounded-xl border border-border bg-card text-card-foreground shadow flex-[2] p-6">
                <ul className="space-y-4 text-primary-foreground">
                    <li className="flex items-start">
                        <span className="text-primary mr-2">
                            <Check />
                        </span>
                        <p>Manage your employees easily and efficiently.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary mr-2">
                            <Check />
                        </span>
                        <p>Add and remove employees in just a few clicks.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary mr-2">
                            <Check />
                        </span>
                        <p>Enjoy data storage in a cache.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary mr-2">
                            <Check />
                        </span>
                        <p>Use an employee validation system.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary mr-2">
                            <Check />
                        </span>
                        <p>Display of error messages in the form.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary mr-2">
                            <Check />
                        </span>
                        <p>A table with integrated search and sorting.</p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <Link
                    to="/employees"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground px-6 py-3  shadow-lg hover:bg-primary/80 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    See your employees
                </Link>
            </div>
        </div>
    );
}

export default Home;
