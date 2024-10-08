import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background shadow-md">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="HRnet Logo" width={50} height={35} />
                    <div className="flex items-baseline gap-2">
                        <Link className="scroll-m-20 text-xl font-bold tracking-tight font-caption" to="/">
                            HRnet
                        </Link>
                        <Link className="font-semibold hover:underline text-muted-foreground hover:text-foreground" to="/employees">
                            Employees
                        </Link>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;
