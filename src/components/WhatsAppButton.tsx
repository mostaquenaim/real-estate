import { useFloating, autoUpdate, offset, shift } from '@floating-ui/react-dom-interactions'
import { useState } from 'react'

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false)
  const { x, y, reference, floating, strategy } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'top',
    middleware: [offset(10), shift()]
  })

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        ref={reference}
        onClick={() => setOpen(!open)}
        className="bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.132 1.521 5.547-.005 10.057-4.518 10.053-10.069-.002-2.027-.78-3.93-2.198-5.36-1.417-1.432-3.33-2.221-5.358-2.219-5.547.005-10.057 4.518-10.053 10.069.001 1.689.413 3.344 1.205 4.808l-.804 2.949 3.006-.805z"/>
        </svg>
      </button>

      {open && (
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          className="bg-white p-4 rounded-lg shadow-xl w-64"
        >
          <div className="text-green-800 font-bold mb-2">Chat with us</div>
          <p className="text-sm text-gray-600 mb-3">We're here to answer your questions</p>
          <a 
            href="https://wa.me/880XXXXXXXXXX" 
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg inline-flex items-center text-sm"
          >
            Open WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}