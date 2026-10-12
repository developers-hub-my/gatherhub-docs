'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

// Docs screenshot: click to open it full screen; click again to zoom in where you
// clicked (move the mouse to pan), click once more to zoom back out.
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
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [origin, setOrigin] = useState('50% 50%')

  const close = () => {
    setOpen(false)
    setZoom(1)
  }

  const pointAt = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  return (
    <figure
      style={width ? { maxWidth: width, marginInline: 'auto' } : undefined}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`Enlarge: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto my-0 rounded-lg ring-1 ring-slate-900/10 transition hover:opacity-90 dark:ring-white/10"
          style={width ? { width: '100%', height: 'auto' } : undefined}
        />
      </button>
      {caption && <figcaption className="text-center">{caption}</figcaption>}

      <Dialog open={open} onClose={close} className="fixed inset-0 z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity duration-200 ease-out data-closed:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-0 flex items-center justify-center overflow-hidden p-4 transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 sm:p-8"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => {
              e.stopPropagation()
              pointAt(e)
              // Zoom toward the image's real pixels: 1.6x–3x, so small images don't blur.
              const img = e.currentTarget
              const fit = Math.min(
                img.getBoundingClientRect().width / img.naturalWidth,
                img.getBoundingClientRect().height / img.naturalHeight,
              )
              setZoom(zoom > 1 ? 1 : Math.min(3, Math.max(1.6, 1 / fit)))
            }}
            onMouseMove={(e) => zoom > 1 && pointAt(e)}
            className={`h-full w-full object-contain transition-transform duration-300 ease-out ${zoom > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            style={{ transform: `scale(${zoom})`, transformOrigin: origin }}
          />
          <button
            type="button"
            onClick={close}
            className="fixed top-3 right-3 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Close ✕
          </button>
        </DialogPanel>
      </Dialog>
    </figure>
  )
}
