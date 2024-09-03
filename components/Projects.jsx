'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
    {
        id: 1,
        name: "Project Alpha",
        description: "A groundbreaking initiative that revolutionizes user experiences through innovative design and cutting-edge technology.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        id: 2,
        name: "Project Beta",
        description: "An ambitious venture that pushes the boundaries of what's possible in digital transformation and cloud computing.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        id: 3,
        name: "Project Gamma",
        description: "A visionary project that combines artificial intelligence and sustainable practices to create a better future for all.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const openModal = (project) => {
        setSelectedProject(project)
        setCurrentImageIndex(0)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % selectedProject.images.length
            )
        }
    }

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
            )
        }
    }

    return (
        <section id="projects" className="w-full py-24 md:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Projects</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={project.images[0]}
                                        alt={`${project.name} thumbnail`}
                                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="secondary" className="text-lg" onClick={() => openModal(project)}>
                                            View Project
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                            <h3 className="text-2xl font-bold text-center p-4">{project.name}</h3>
                        </Card>
                    ))}
                </div>
            </div>

            <Dialog open={selectedProject !== null} onOpenChange={closeModal}>
                <DialogContent className="sm:max-w-[90vw] w-full max-h-[90vh] p-6 overflow-hidden">
                    {selectedProject && (
                        <div className="flex flex-col h-full">
                            <DialogHeader>
                                <DialogTitle>{selectedProject.name}</DialogTitle>
                            </DialogHeader>
                            <div className="flex-grow overflow-y-auto mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                                    <div className="flex flex-col">
                                        <DialogDescription className="text-left">
                                            {selectedProject.description}
                                        </DialogDescription>
                                    </div>
                                    <div className="relative w-full h-0 pb-[66.67%] overflow-hidden rounded-lg">
                                        <Carousel className="absolute inset-0">
                                            <CarouselContent>
                                                {selectedProject.images.map((image, index) => (
                                                    <CarouselItem key={index}>
                                                        <div className="w-full h-full">
                                                            <img
                                                                src={image}
                                                                alt={`${selectedProject.name} image ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="left-2" />
                                            <CarouselNext className="right-2" />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
