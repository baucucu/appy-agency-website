import { Laptop, Smartphone, Code } from "lucide-react"

export default function Services() {
    return (
        <section id="services" className="w-full py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Laptop className="h-16 w-16 text-primary" />
                        <h3 className="text-2xl font-bold">Web Development</h3>
                        <p className="text-gray-600 dark:text-gray-300">Custom websites and web applications tailored to your needs.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Smartphone className="h-16 w-16 text-primary" />
                        <h3 className="text-2xl font-bold">Mobile Apps</h3>
                        <p className="text-gray-600 dark:text-gray-300">Native and cross-platform mobile applications for iOS and Android.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Code className="h-16 w-16 text-primary" />
                        <h3 className="text-2xl font-bold">Custom Solutions</h3>
                        <p className="text-gray-600 dark:text-gray-300">Bespoke software solutions to solve your unique challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}