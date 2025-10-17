import { useEffect, useMemo, useState } from 'react'
import { waLink } from '../config'

function Mascot({ waving = false }) {
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#g)" />
      <circle cx="24" cy="28" r="3.5" fill="#fff"/>
      <circle cx="40" cy="28" r="3.5" fill="#fff"/>
      <path d="M22 41c4 3 16 3 20 0" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      {waving && (
        <path className="sb-wave" d="M50 18c2 0 4 2 4 4 0 3-2 6-4 8-2-2-4-5-4-8 0-2 2-4 4-4z" fill="#fff"/>
      )}
    </svg>
  )
}

export default function SuggestionBuddy() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('sb_seen')
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 2800)
      return () => clearTimeout(t)
    }
  }, [])

  const suggestionHref = useMemo(() => {
    const base = text?.trim() ? `Sugerencia: ${text.trim()}` : 'Sugerencia general'
    return waLink(base)
  }, [text])

  if (hidden) return null

  return (
    <div className="fixed z-50 bottom-6 right-4 sm:right-6 select-none">
      {/* Button */}
      <div className="relative flex items-end gap-3">
        {!open && (
          <button
            aria-label="Enviar una sugerencia"
            className="sb-shadow rounded-full p-3 bg-white hover:bg-pink-50 transition transform hover:-translate-y-0.5"
            onClick={() => setOpen(true)}
          >
            <div className="animate-bob">
              <Mascot waving />
            </div>
          </button>
        )}
        {!open && (
          <div className="hidden md:block text-sm bg-gray-900/90 text-white px-3 py-2 rounded-xl mb-2 animate-pop">
            ¿Tienes una sugerencia?
          </div>
        )}
      </div>

      {/* Panel */}
      {open && (
        <div className="sb-shadow bg-white rounded-2xl p-4 w-[92vw] max-w-sm animate-pop">
          <div className="flex items-center gap-3 mb-2">
            <Mascot />
            <h3 className="font-semibold text-gray-900">Sugerencias</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Cuéntanos cómo mejorar. Enviamos tu idea por WhatsApp.</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {['Agregar servicio','Cambiar horario','Otra idea'].map((t) => (
              <button key={t} onClick={() => setText((v) => (v? `${v} · ${t}` : t))} className="px-3 py-1.5 rounded-full text-sm bg-pink-50 text-pink-700 hover:bg-pink-100">
                {t}
              </button>
            ))}
          </div>
          <textarea
            rows={3}
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Escribe tu sugerencia aquí..."
            className="w-full resize-none rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 p-3 mb-3"
          />
          <div className="flex items-center justify-between gap-2">
            <button onClick={()=>{ setOpen(false); localStorage.setItem('sb_seen','1') }} className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">Cerrar</button>
            <div className="flex items-center gap-2">
              <button onClick={()=> setHidden(true)} className="px-3 py-2 rounded-full text-gray-400 hover:text-gray-600" title="Ocultar">
                Ocultar
              </button>
              <a href={suggestionHref} className="btn btn-primary">Enviar</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
