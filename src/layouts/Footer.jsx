import EmployeeService from '../services/employee.service';

function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background">
            <div className="m-auto w-full max-w-3xl px-2 py-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-row items-center gap-2 ">
                        <img src="/images/logo.png" alt="HRnet Logo" width={40} height={30} />
                        <a href="/" className="font-bold">
                            HRnet
                        </a>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                        <button className="hover:underline" onClick={() => EmployeeService.reset()}>
                            Reset
                        </button>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Wealth Health - HRnet</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
