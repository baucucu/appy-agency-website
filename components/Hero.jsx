import { Button } from "@/components/ui/button"
export default function Hero() {
    return (
        <section className="w-full py-24 md:py-32 hero-gradient text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                            Welcome to appy.agency
                        </h1>
                        <p className="mx-auto max-w-[700px] text-xl text-purple-100 md:text-2xl">
                            We build amazing web and mobile applications that drive your business forward.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button size="lg" variant="" className="bg-white text-black hover:bg-purple-100">Get Started</Button>

                    </div>
                </div>
            </div>
        </section>
    )
}