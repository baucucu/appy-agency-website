import { Users } from "lucide-react"

export default function Team() {

    return (
        <section className="w-full py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Team</h2>
                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[1, 2, 3, 4].map((member) => (
                        <div key={member} className="flex flex-col items-center text-center space-y-4">
                            <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <Users className="h-16 w-16 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold">Team Member {member}</h3>
                            <p className="text-gray-600 dark:text-gray-300">Role / Position</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}