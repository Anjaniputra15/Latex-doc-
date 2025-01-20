'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

interface Node extends d3.SimulationNodeDatum {
  id: string
  group: number
  size: number
  type: 'major' | 'minor'
  label: string
}

interface Link extends d3.SimulationLinkDatum<Node> {
  value: number
}

const KnowledgeGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    window.addEventListener('resize', updateDimensions)
    updateDimensions()
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!svgRef.current || !dimensions.width || !dimensions.height) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove() // Clear previous render

    const width = dimensions.width
    const height = dimensions.height

    // Generate data
    const nodes: Node[] = [
      { id: 'hub0', group: 0, size: 2.5, type: 'major', label: 'Quantum Mechanics' },
      { id: 'hub1', group: 1, size: 2.5, type: 'major', label: 'Molecular Biology' },
      { id: 'hub2', group: 2, size: 2.5, type: 'major', label: 'Astrophysics' },
      { id: 'hub3', group: 3, size: 2.5, type: 'major', label: 'Neuroscience' },
      { id: 'hub4', group: 4, size: 2.5, type: 'major', label: 'Climate Science' },
      ...Array.from({ length: 50 }, (_, i) => ({
        id: `node${i}`,
        group: Math.floor(Math.random() * 5),
        size: 1 + Math.random() * 0.5,
        type: 'minor' as const,
        label: getRandomScientificTerm()
      }))
    ]

    const links: Link[] = []
    nodes.forEach((node, i) => {
      if (node.type === 'minor') {
        const numLinks = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < numLinks; j++) {
          links.push({
            source: node.id,
            target: nodes[Math.floor(Math.random() * nodes.length)].id,
            value: Math.random()
          })
        }
      }
    })

    const color = d3.scaleOrdinal(d3.schemeCategory10)

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink<Node, Link>(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => (d as Node).size * 5 + 2))

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => Math.sqrt(d.value))

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.size * 5)
      .attr("fill", d => color(d.group.toString()))
      .call(drag(simulation))

    const label = svg.append("g")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.type === 'major' ? d.label : '')
      .attr("font-size", "10px")
      .attr("fill", "white")

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!)

      node
        .attr("cx", d => d.x!)
        .attr("cy", d => d.y!)

      label
        .attr("x", d => d.x!)
        .attr("y", d => d.y! + 15)
    })

    // Add moving animation
    function animate() {
      node
        .transition()
        .duration(1000)
        .attr("r", d => d.size * 5 + Math.random() * 2)
        .on("end", animate)
    }

    animate()

    return () => {
      simulation.stop()
    }
  }, [dimensions])

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}

function getRandomScientificTerm() {
  const terms = [
    'Photosynthesis', 'Mitochondria', 'Entropy', 'Relativity', 'Genome',
    'Neuron', 'Quark', 'Enzyme', 'Fusion', 'Ecosystem', 'Protein',
    'Gravity', 'Electron', 'Chromosome', 'Catalyst', 'Nebula', 'Synapse',
    'Isotope', 'Molecule', 'Thermodynamics', 'Photon', 'Nucleus', 'Atom',
    'Bacteria', 'Fossil', 'Wavelength', 'Mutation', 'Tectonics', 'Osmosis',
    'Quantum', 'Proton', 'Neutron', 'Cytoplasm', 'Magnetism', 'Velocity'
  ]
  return terms[Math.floor(Math.random() * terms.length)]
}

function drag(simulation: d3.Simulation<Node, undefined>) {
  function dragstarted(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
    if (!event.active) simulation.alphaTarget(0.3).restart()
    event.subject.fx = event.subject.x
    event.subject.fy = event.subject.y
  }

  function dragged(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
    event.subject.fx = event.x
    event.subject.fy = event.y
  }

  function dragended(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
    if (!event.active) simulation.alphaTarget(0)
    event.subject.fx = null
    event.subject.fy = null
  }

  return d3.drag<SVGCircleElement, Node>()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended)
}

export default KnowledgeGraph

