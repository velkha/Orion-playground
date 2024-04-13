
export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
            {children}
        </div>
    );
}