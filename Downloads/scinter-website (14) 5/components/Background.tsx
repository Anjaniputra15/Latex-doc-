'use client'

import React, { useRef, useEffect, useState } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: Node[]
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []
    const nodeCount = isMobile ? 30 : 100
    const connectionDistance = isMobile ? 100 : 150
    const repulsionDistance = isMobile ? 30 : 50

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (isMobile ? 1 : 2),
          vy: (Math.random() - 0.5) * (isMobile ? 1 : 2),
          connections: []
        })
      }
    }

    const updateConnections = () => {
      nodes.forEach(node => {
        node.connections = []
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            nodes[i].connections.push(nodes[j])
            nodes[j].connections.push(nodes[i])
          }
        }
      }
    }

    const updatePositions = () => {
      nodes.forEach(node => {
        node.x += node.vx * (isMobile ? 0.25 : 0.5)
        node.y += node.vy * (isMobile ? 0.25 : 0.5)

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        nodes.forEach(otherNode => {
          if (node !== otherNode) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < repulsionDistance) {
              const force = (repulsionDistance - distance) / distance
              node.vx += dx * force * (isMobile ? 0.01 : 0.02)
              node.vy += dy * force * (isMobile ? 0.01 : 0.02)
            }
          }
        })

        node.vx *= 0.99
        node.vy *= 0.99
      })
    }

    const drawNodes = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, isMobile ? 1 : 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawConnections = (time: number) => {
      nodes.forEach(node => {
        node.connections.forEach(connectedNode => {
          const dx = node.x - connectedNode.x
          const dy = node.y - connectedNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = 1 - distance / connectionDistance

          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * (isMobile ? 0.2 : 0.3)})`
          ctx.lineWidth = isMobile ? 0.5 : 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()

          // Animated data flow
          const animationProgress = (time % (isMobile ? 6000 : 4000)) / (isMobile ? 6000 : 4000)
          const dataX = node.x + dx * animationProgress
          const dataY = node.y + dy * animationProgress
          ctx.fillStyle = `rgba(100, 200, 255, ${opacity * (isMobile ? 0.5 : 0.7)})`
          ctx.beginPath()
          ctx.arc(dataX, dataY, isMobile ? 1.5 : 3, 0, Math.PI * 2)
          ctx.fill()
        })
      })
    }

    const animate = (time: number) => {
      ctx.fillStyle = 'rgba(0, 10, 30, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      updatePositions()
      updateConnections()
      drawConnections(time)
      drawNodes()

      animationFrameId = requestAnimationFrame(() => {
        // Reduce animation frequency
        setTimeout(() => animate(performance.now()), isMobile ? 50 : 16)
      })
    }

    resizeCanvas()
    animate(0)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isMobile])

  return (
    <div className="fixed inset-0 w-full h-full z-[-1]">
      <div className="absolute inset-0 bg-black/40" />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  )
}

export default Background

