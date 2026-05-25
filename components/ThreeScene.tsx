'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const container = mountRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // --- Scene & Camera ---
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 22)

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)
    const pointLight1 = new THREE.PointLight(0x6D45F0, 3, 40)
    pointLight1.position.set(-8, 8, 10)
    scene.add(pointLight1)
    const pointLight2 = new THREE.PointLight(0x22D3A0, 2, 30)
    pointLight2.position.set(8, -5, 8)
    scene.add(pointLight2)
    const pointLight3 = new THREE.PointLight(0x3B82F6, 2, 35)
    pointLight3.position.set(0, -10, 5)
    scene.add(pointLight3)

    // --- Central Wireframe Icosahedron ---
    const icosaGeo = new THREE.IcosahedronGeometry(5, 1)
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0x6D45F0,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const icosa = new THREE.Mesh(icosaGeo, icosaMat)
    scene.add(icosa)

    // --- Inner glowing sphere ---
    const sphereGeo = new THREE.SphereGeometry(3, 64, 64)
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x1a0a3e,
      emissive: 0x3D1F8C,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.6,
      shininess: 100,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    scene.add(sphere)

    // --- Torus ring ---
    const torusGeo = new THREE.TorusGeometry(6.5, 0.04, 16, 120)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x6D45F0,
      transparent: true,
      opacity: 0.25,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    torus.rotation.x = Math.PI / 3
    scene.add(torus)

    const torusGeo2 = new THREE.TorusGeometry(7.5, 0.025, 16, 120)
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x22D3A0,
      transparent: true,
      opacity: 0.15,
    })
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2)
    torus2.rotation.x = Math.PI / 5
    torus2.rotation.y = Math.PI / 4
    scene.add(torus2)

    // --- Particle field ---
    const particleCount = 2500
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const color1 = new THREE.Color(0x6D45F0)
    const color2 = new THREE.Color(0x22D3A0)
    const color3 = new THREE.Color(0x3B82F6)
    const colorPalette = [color1, color2, color3]

    for (let i = 0; i < particleCount; i++) {
      const r = 10 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
      sizes[i] = Math.random() * 2.5 + 0.5
    }

    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    pGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // --- Floating small shapes ---
    const floaters: THREE.Mesh[] = []
    const floaterData: { speed: number; amplitude: number; offset: number; rotSpeed: THREE.Vector3 }[] = []
    const floaterGeos = [
      new THREE.OctahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.35),
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
    ]
    for (let i = 0; i < 12; i++) {
      const geoIdx = Math.floor(Math.random() * floaterGeos.length)
      const fMat = new THREE.MeshPhongMaterial({
        color: [0x6D45F0, 0x22D3A0, 0x3B82F6][Math.floor(Math.random() * 3)],
        emissive: [0x3D1F8C, 0x0f6b51, 0x1a3f7a][Math.floor(Math.random() * 3)],
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.7,
        wireframe: Math.random() > 0.5,
      })
      const fMesh = new THREE.Mesh(floaterGeos[geoIdx], fMat)
      const r = 7 + Math.random() * 6
      const angle = (i / 12) * Math.PI * 2
      fMesh.position.set(
        r * Math.cos(angle) + (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      )
      floaters.push(fMesh)
      floaterData.push({
        speed: 0.5 + Math.random() * 1.5,
        amplitude: 0.8 + Math.random() * 1.2,
        offset: Math.random() * Math.PI * 2,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      })
      scene.add(fMesh)
    }

    // --- Mouse interaction ---
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // --- Animation loop ---
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Rotate main objects
      icosa.rotation.x = elapsed * 0.05 + mouse.y * 0.1
      icosa.rotation.y = elapsed * 0.08 + mouse.x * 0.1
      sphere.rotation.y = elapsed * 0.1
      torus.rotation.z = elapsed * 0.04
      torus2.rotation.x = elapsed * 0.03
      torus2.rotation.z = -elapsed * 0.05
      particles.rotation.y = elapsed * 0.015
      particles.rotation.x = elapsed * 0.008

      // Pulsing lights
      pointLight1.intensity = 3 + Math.sin(elapsed * 1.5) * 0.8
      pointLight2.intensity = 2 + Math.sin(elapsed * 2.1 + 1) * 0.5

      // Animate floaters
      floaters.forEach((f, idx) => {
        const d = floaterData[idx]
        f.position.y += Math.sin(elapsed * d.speed + d.offset) * 0.005 * d.amplitude
        f.rotation.x += d.rotSpeed.x
        f.rotation.y += d.rotSpeed.y
        f.rotation.z += d.rotSpeed.z
      })

      // Camera subtle drift
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 1.0 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // --- Resize handler ---
    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}
