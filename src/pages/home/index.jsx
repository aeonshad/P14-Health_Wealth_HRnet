function Home() {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold mb-4">Welcome to HRnet</h1>
            <p className="text-lg mb-6">Your human resources management platform.</p>
            <div className="flex flex-col items-center">
                <p className="text-md mb-2">Manage your employees easily and efficiently.</p>
                <p className="text-md mb-2">Add and remove employees in just a few clicks.</p>
                <p className="text-md mb-2">Enjoy data storage in a cache.</p>
                <p className="text-md mb-2">Use an employee validation system.</p>
                <p className="text-md mb-2">Display of error messages in the form.</p>
                <p className="text-md mb-2">A table with integrated search and sorting.</p>
            </div>
            <div className="mt-8">
                <a href="/employees" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80">
                    See your employees
                </a>
            </div>
        </div>
    );
}

export default Home;
