import Image from 'next/image'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'

function CheckBadgeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function QrCodeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mt-19 dark:-mb-32 dark:pt-19 dark:pb-32">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute right-full bottom-full -mr-72 -mb-56 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Event management, simplified.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                From registration to certificates, manage your entire event
                lifecycle in one place.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/docs/quick-start">Get started</Button>
                <Button href="https://gatherhub.app" variant="secondary">
                  Go to GatherHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 mask-[linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:mask-none dark:mask-[linear-gradient(transparent,white,transparent)] lg:dark:mask-[linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -top-64 -right-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -right-44 -bottom-40"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              {/* Certificate Card */}
              <div className="relative mx-auto max-w-md">
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 size-24 rounded-full bg-sky-400/30 blur-2xl dark:bg-sky-500/20" />
                <div className="absolute -bottom-4 -left-4 size-32 rounded-full bg-blue-400/30 blur-2xl dark:bg-blue-500/20" />

                <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-700">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      Certificate of Completion
                    </div>
                    <CheckBadgeIcon className="size-8 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div className="mt-6 space-y-3 text-center">
                    <p className="text-sm text-gray-400 dark:text-gray-500">This certifies that</p>
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Ahmad bin Abdullah
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      has successfully completed
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Professional Development Workshop
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">on 15 January 2025</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <QrCodeIcon className="size-10 text-gray-300 dark:text-gray-600" />
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        <p>Scan to verify</p>
                        <p className="font-mono text-gray-500 dark:text-gray-400">GH-2025-00123</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-500/20 dark:text-green-400">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
