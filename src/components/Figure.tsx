'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'

// Docs screenshot: click to open it full screen; click again for actual size.
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
  const [actualSize, setActualSize] = useState(false)

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
          className="mx-auto my-0 rounded-lg ring-1 ring-slate-900/10 dark:ring-white/10"
          style={width ? { width: '100%', height: 'auto' } : undefined}
        />
      </button>
      {caption && <figcaption className="text-center">{caption}</figcaption>}

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
          setActualSize(false)
        }}
        className="fixed inset-0 z-50"
      >
        <div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm"
          aria-hidden="true"
        />
        <DialogPanel
          className={`fixed inset-0 flex p-4 sm:p-8 ${actualSize ? 'overflow-auto' : 'items-center justify-center'}`}
          onClick={() => {
            setOpen(false)
            setActualSize(false)
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => {
              e.stopPropagation()
              setActualSize(!actualSize)
            }}
            className={
              actualSize
                ? 'm-auto max-w-none cursor-zoom-out'
                : 'h-full w-full cursor-zoom-in object-contain'
            }
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed top-3 right-3 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Close ✕
          </button>
        </DialogPanel>
      </Dialog>
    </figure>
  )
}
