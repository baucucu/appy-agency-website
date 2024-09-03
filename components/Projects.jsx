import { Button } from "@/components/ui/button"

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 md:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Projects</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((project) => (
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-2xl font-bold text-center">Project name</h3>
                            <div key={project} className="relative overflow-hidden rounded-xl shadow-lg group">
                                <img
                                    src={`/api/placeholder/600/400`}
                                    alt={`Project ${project}`}
                                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="secondary" className="text-lg">View Project</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}