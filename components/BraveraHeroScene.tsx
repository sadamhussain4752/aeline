'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function BraveraHeroScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 13)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const ambient = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambient)

    const keyLight = new THREE.PointLight(0xd6fd70, 3.4, 34)
    keyLight.position.set(-5, 5, 8)
    scene.add(keyLight)

    const blueLight = new THREE.PointLight(0x41c0ee, 2.4, 30)
    blueLight.position.set(6, -3, 6)
    scene.add(blueLight)

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xd6fd70,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide,
    })

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x41c0ee,
      emissiveIntensity: 0.34,
      roughness: 0.22,
      metalness: 0.72,
      transparent: true,
      opacity: 0.9,
    })

    const rings = [
      new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.018, 16, 140), ringMaterial),
      new THREE.Mesh(new THREE.TorusGeometry(4.8, 0.014, 16, 140), ringMaterial.clone()),
      new THREE.Mesh(new THREE.TorusGeometry(5.8, 0.01, 16, 140), ringMaterial.clone()),
    ]

    rings[0].rotation.set(Math.PI / 2.8, 0.22, -0.3)
    rings[1].rotation.set(Math.PI / 2.1, -0.5, 0.2)
    rings[2].rotation.set(Math.PI / 2.55, 0.65, 0.6)
    rings[1].material.opacity = 0.2
    rings[2].material.opacity = 0.14
    rings.forEach((ring) => group.add(ring))

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 2), coreMaterial)
    core.position.set(0.15, 0, 0)
    group.add(core)

    const particleCount = 520
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const lime = new THREE.Color(0xd6fd70)
    const cyan = new THREE.Color(0x41c0ee)

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 4.5 + Math.random() * 5.8
      const angle = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 5.4
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.52

      const color = Math.random() > 0.5 ? lime : cyan
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        size: 0.035,
        vertexColors: true,
        transparent: true,
        opacity: 0.62,
        sizeAttenuation: true,
      })
    )
    group.add(particles)

    const mouse = { x: 0, y: 0 }
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const resize = () => {
      const width = container.clientWidth || 1
      const height = container.clientHeight || 1
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    let animationId = 0
    const clock = new THREE.Clock()
    const animate = () => {
      animationId = window.requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      group.rotation.y = elapsed * 0.09 + mouse.x * 0.18
      group.rotation.x = -0.12 + mouse.y * 0.08
      core.rotation.x = elapsed * 0.22
      core.rotation.y = elapsed * 0.32
      rings[0].rotation.z = elapsed * 0.16
      rings[1].rotation.z = -elapsed * 0.12
      rings[2].rotation.z = elapsed * 0.09
      particles.rotation.y = -elapsed * 0.035
      keyLight.intensity = 3 + Math.sin(elapsed * 1.6) * 0.45

      renderer.render(scene, camera)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    container.addEventListener('pointermove', onPointerMove)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      container.removeEventListener('pointermove', onPointerMove)
      particleGeometry.dispose()
      rings.forEach((ring) => {
        ring.geometry.dispose()
        ;(ring.material as THREE.Material).dispose()
      })
      core.geometry.dispose()
      coreMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="hero-three-scene" aria-hidden="true" />
}
