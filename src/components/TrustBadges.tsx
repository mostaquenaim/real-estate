const TrustBadges = () => {
  const certifications = [
    { src: '/badges/rajuk.png', alt: 'RAJUK Approved' },
    { src: '/badges/rehab.png', alt: 'REHAB Member' },
    // More badges...
  ]

  return (
    <section className="py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-700">Trusted & Certified By</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert, i) => (
            <img 
              key={i} 
              src={cert.src} 
              alt={cert.alt} 
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}