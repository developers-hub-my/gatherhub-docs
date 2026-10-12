'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type Phase = 'closed' | 'opening' | 'open' | 'closing'

const DURATION = 300
const EASE = 'cubic-bezier(.2, 0, 0, 1)'

// Docs screenshot: click and it zooms from its place on the page to the centre of the
// screen; click outside it, Close or Esc and it zooms back.
export function Figure({
  src,
  alt = '',
  caption,
  width,
}: {
  src: string
  alt?: string
  caption?: string
  width?: number
}) {
  const thumb = useRef<HTMLImageElement>(null)
  const zoomed = useRef<HTMLImageElement>(null)
  const [phase, setPhase] = useState<Phase>('closed')
  const [box, setBox] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [from, setFrom] = useState('none')

  // Transform that puts the centred image exactly over the thumbnail.
  const thumbTransform = (target: typeof box) => {
    const r = thumb.current!.getBoundingClientRect()
    const dx = r.left + r.width / 2 - (target.left + target.width / 2)
    const dy = r.top + r.height / 2 - (target.top + target.height / 2)
    return `translate(${dx}px, ${dy}px) scale(${r.width / target.width})`
  }

  const reducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const open = () => {
    const img = thumb.current!
    if (!img.naturalWidth) return // not loaded yet
    const pad = window.innerWidth < 640 ? 16 : 48
    const scale = Math.min(
      (window.innerWidth - pad * 2) / img.naturalWidth,
      (window.innerHeight - pad * 2) / img.naturalHeight,
      2.5,
    )
    const width = img.naturalWidth * scale
    const height = img.naturalHeight * scale
    const target = {
      left: (window.innerWidth - width) / 2,
      top: (window.innerHeight - height) / 2,
      width,
      height,
    }
    setBox(target)
    setFrom(thumbTransform(target))
    setPhase(reducedMotion() ? 'open' : 'opening')
  }

  const close = () => {
    if (reducedMotion()) return setPhase('closed')
    setFrom(thumbTransform(box))
    setPhase('closing')
  }

  // Lay the image out over the thumbnail first (forced reflow), then animate to the centre.
  useLayoutEffect(() => {
    if (phase !== 'opening') return
    zoomed.current?.getBoundingClientRect()
    setPhase('open')
  }, [phase])

  useEffect(() => {
    if (phase === 'closing') {
      const id = setTimeout(() => setPhase('closed'), DURATION)
      return () => clearTimeout(id)
    }
  }, [phase])

  // Esc closes; the page behind doesn't scroll while open.
  useEffect(() => {
    if (phase === 'closed') return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  const shown = phase === 'open'
  const transition = `${DURATION}ms ${EASE}`

  return (
    <figure
      style={width ? { maxWidth: width, marginInline: 'auto' } : undefined}
    >
      <button
        type="button"
        onClick={open}
        className="block w-full cursor-zoom-in"
        aria-label={`Enlarge: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={thumb}
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto my-0 rounded-lg ring-1 ring-slate-900/10 dark:ring-white/10"
          style={{
            ...(width ? { width: '100%', height: 'auto' } : {}),
            visibility: phase === 'closed' ? 'visible' : 'hidden',
          }}
        />
      </button>
      {caption && <figcaption className="text-center">{caption}</figcaption>}

      {phase !== 'closed' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-50 cursor-zoom-out"
            onClick={close}
          >
            <div
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              style={{ opacity: shown ? 1 : 0, transition: `opacity ${transition}` }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={zoomed}
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="fixed m-0 max-w-none cursor-default rounded-lg shadow-2xl"
              style={{
                ...box,
                transform: shown ? 'none' : from,
                transformOrigin: 'center',
                transition: `transform ${transition}`,
              }}
            />
            <button
              type="button"
              autoFocus
              onClick={close}
              className="fixed top-3 right-3 cursor-pointer rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
              style={{ opacity: shown ? 1 : 0, transition: `opacity ${transition}` }}
            >
              Close ✕
            </button>
          </div>,
          document.body,
        )}
    </figure>
  )
}
