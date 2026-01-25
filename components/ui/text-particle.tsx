"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface Particle {
    x: number
    y: number
    size: number
    baseX: number
    baseY: number
    density: number
    color: string
}

interface TextParticleAnimationProps {
    text: string
    fontSize?: number
    fontFamily?: string
    particleSize?: number
    particleColor?: string
    particleDensity?: number
    backgroundColor?: string
    className?: string
}

export function TextParticle({
    text,
    fontSize = 80,
    fontFamily = "Arial, sans-serif",
    particleSize = 2,
    particleColor = "#000000",
    particleDensity = 8,
    backgroundColor = "transparent",
    className = "",
}: TextParticleAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [particles, setParticles] = useState<Particle[]>([])
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const mouse = useRef({ x: 0, y: 0 })
    const animationRef = useRef<number | null>(null)
    const isMouseOver = useRef(false)

    // Initialize canvas and particles
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const initText = (width: number, height: number) => {
            ctx.clearRect(0, 0, width, height)
            ctx.font = `${fontSize}px ${fontFamily}`
            ctx.fillStyle = "black"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"

            // Measure text width to center it properly
            const textMetrics = ctx.measureText(text)

            // Calculate position to center text
            const x = width / 2
            const y = height / 2

            ctx.fillText(text, x, y)

            const textCoordinates = ctx.getImageData(0, 0, width, height)
            const newParticles: Particle[] = []

            for (let y = 0; y < textCoordinates.height; y += particleDensity) {
                for (let x = 0; x < textCoordinates.width; x += particleDensity) {
                    const index = (y * textCoordinates.width + x) * 4
                    const alpha = textCoordinates.data[index + 3]

                    if (alpha > 128) {
                        newParticles.push({
                            x,
                            y,
                            size: particleSize,
                            baseX: x,
                            baseY: y,
                            density: Math.random() * 30 + 1,
                            color: particleColor,
                        })
                    }
                }
            }

            setParticles(newParticles)
            ctx.clearRect(0, 0, width, height)
        }

        const handleResize = () => {
            const width = canvas.offsetWidth
            const height = canvas.offsetHeight

            if (width === 0 || height === 0) return

            canvas.width = width
            canvas.height = height
            setDimensions({ width, height })
            initText(width, height)
        }

        const resizeObserver = new ResizeObserver(() => {
            handleResize()
        })

        resizeObserver.observe(canvas)
        handleResize() // Initial call

        return () => {
            resizeObserver.disconnect()
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [text, fontSize, fontFamily, particleSize, particleColor, particleDensity])

    // Animation loop
    useEffect(() => {
        if (particles.length === 0) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            if (backgroundColor !== "transparent") {
                ctx.fillStyle = backgroundColor
                ctx.fillRect(0, 0, canvas.width, canvas.height)
            }

            particles.forEach((particle) => {
                let dx = 0
                let dy = 0
                let distance = 0
                let forceDirectionX = 0
                let forceDirectionY = 0

                // Calculate force if mouse is present
                if (isMouseOver.current) {
                    dx = mouse.current.x - particle.x
                    dy = mouse.current.y - particle.y
                    distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        forceDirectionX = (dx / distance) * 3
                        forceDirectionY = (dy / distance) * 3
                    }
                }

                // Apply force and calculate new position
                const moveX = forceDirectionX + (particle.baseX - particle.x) * 0.05
                const moveY = forceDirectionY + (particle.baseY - particle.y) * 0.05

                particle.x += moveX
                particle.y += moveY

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.fill()
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [particles, backgroundColor]) // Removed mouse dependency

    // Mouse interaction
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        mouse.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        }
        isMouseOver.current = true
    }

    const handleMouseLeave = () => {
        isMouseOver.current = false
    }

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    )
}
