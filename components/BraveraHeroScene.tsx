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
    camera.position.set(0, 0.4, 14)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const ambient = new THREE.AmbientLight(0xffffff, 0.62)
    scene.add(ambient)

    const keyLight = new THREE.PointLight(0x7c3cff, 4.2, 36)
    keyLight.position.set(-5, 5, 8)
    scene.add(keyLight)

    const blueLight = new THREE.PointLight(0x00c8ff, 3.4, 34)
    blueLight.position.set(6, -3, 6)
    scene.add(blueLight)

    const pinkLight = new THREE.PointLight(0xff2bbf, 2.8, 32)
    pinkLight.position.set(0, 4, -2)
    scene.add(pinkLight)

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x6ee7ff,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
    })

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8efff,
      emissive: 0x6b2dff,
      emissiveIntensity: 0.42,
      roughness: 0.1,
      metalness: 0.2,
      transparent: true,
      opacity: 0.72,
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

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.04,
      metalness: 0,
      transmission: 0.6,
      thickness: 1.2,
      transparent: true,
      opacity: 0.58,
      iridescence: 0.75,
      iridescenceIOR: 1.4,
    })

    const marketingObjects = [
      new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.05, 1.05), glassMaterial),
      new THREE.Mesh(new THREE.SphereGeometry(0.72, 36, 36), glassMaterial.clone()),
      new THREE.Mesh(new THREE.OctahedronGeometry(0.88, 1), glassMaterial.clone()),
      new THREE.Mesh(new THREE.TorusKnotGeometry(0.62, 0.08, 110, 12), glassMaterial.clone()),
    ]

    marketingObjects[0].position.set(-3.2, 1.9, -0.8)
    marketingObjects[1].position.set(3.1, 1.25, 0.5)
    marketingObjects[2].position.set(-2.55, -1.95, 0.9)
    marketingObjects[3].position.set(2.8, -1.75, -0.7)
    marketingObjects.forEach((object, index) => {
      object.rotation.set(index * 0.4, index * 0.25, index * 0.18)
      group.add(object)
    })

    const particleCount = 520
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const electricBlue = new THREE.Color(0x00c8ff)
    const neonPink = new THREE.Color(0xff2bbf)
    const violet = new THREE.Color(0x7c3cff)

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 4.5 + Math.random() * 5.8
      const angle = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 5.4
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.52

      const color = Math.random() > 0.66 ? electricBlue : Math.random() > 0.5 ? neonPink : violet
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
      pinkLight.position.x = Math.sin(elapsed * 0.8) * 3.4
      blueLight.position.y = Math.cos(elapsed * 0.7) * 3
      marketingObjects.forEach((object, index) => {
        object.rotation.x += 0.0025 + index * 0.0007
        object.rotation.y += 0.0035 + index * 0.0008
        object.position.y += Math.sin(elapsed * 1.2 + index) * 0.002
      })
      camera.position.z = 13.5 + Math.sin(elapsed * 0.35) * 0.55
      camera.position.x = mouse.x * 0.35
      camera.position.y = 0.4 + mouse.y * 0.22
      camera.lookAt(0, 0, 0)

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
      marketingObjects.forEach((object) => {
        object.geometry.dispose()
        ;(object.material as THREE.Material).dispose()
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="hero-three-scene" aria-hidden="true" />
}
