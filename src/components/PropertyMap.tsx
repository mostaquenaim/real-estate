'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { projects } from '@/lib/constants'

mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'

export const PropertyMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const mapInstance = useRef<mapboxgl.Map | null>(null)
  const [isMapReady, setIsMapReady] = useState(false)

  useEffect(() => {
    if (!mapContainer.current) return

    // Initialize map only once
    mapInstance.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [90.4125, 23.8103], // Dhaka
      zoom: 11,
      attributionControl: false,
    })

    // Add navigation controls (zoom and rotation)
    mapInstance.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right')
    mapInstance.current.addControl(new mapboxgl.FullscreenControl(), 'top-right')

    // Add custom markers with popup and pointer cursor
    projects.forEach((project) => {
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundColor = '#f59e0b'
      el.style.width = '24px'
      el.style.height = '24px'
      el.style.borderRadius = '50%'
      el.style.cursor = 'pointer'
      el.style.boxShadow = '0 0 8px rgba(245, 158, 11, 0.7)'

      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(`
        <div style="font-weight:600; color:#065f46; font-size:16px; padding:6px 8px;">
          ${project.title}
        </div>
      `)

      new mapboxgl.Marker(el)
        .setLngLat(project.coordinates)
        .setPopup(popup)
        .addTo(mapInstance.current!)
    })

    mapInstance.current.on('load', () => setIsMapReady(true))

    // Cleanup on unmount
    return () => {
      mapInstance.current?.remove()
      setIsMapReady(false)
    }
  }, [])

  return (
    <section
      aria-label="Project locations map"
      className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-md">
            Explore Our Locations
          </h2>
          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 mx-auto"></div>
        </div>

        <div
          ref={mapContainer}
          className="w-full h-[400px] md:h-[600px] rounded-3xl shadow-2xl overflow-hidden border-8 border-white transition-all duration-700 ease-in-out"
        >
          {!isMapReady && (
            <div className="flex justify-center items-center h-full bg-white/70 text-green-700 font-semibold text-lg">
              Loading map...
            </div>
          )}
        </div>
      </div>

      {/* Marker style injected via Tailwind + inline style */}
      <style>{`
        .marker:hover {
          box-shadow: 0 0 12px 3px rgba(245, 158, 11, 0.9);
          transform: scale(1.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </section>
  )
}
