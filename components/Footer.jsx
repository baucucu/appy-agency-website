import Link from "next/link"
export default function Footer() {
    return (
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 appy.agency. All rights reserved.</p>
                    {/* <nav className="flex gap-6">
                        <Link className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="#">
                            Privacy
                        </Link>
                    </nav> */}
                </div>
            </div>
        </footer>
    )
}