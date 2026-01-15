function LogomarkPaths() {
  return (
    <g fill="currentColor">
      <circle cx="20" cy="20" r="3" />
      <circle cx="12" cy="12" r="2" opacity="0.7" />
      <circle cx="28" cy="12" r="2" opacity="0.7" />
      <circle cx="12" cy="28" r="2" opacity="0.7" />
      <circle cx="28" cy="28" r="2" opacity="0.7" />
      <line
        x1="20"
        y1="20"
        x2="12"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="20"
        x2="28"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="20"
        x2="12"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="20"
        x2="28"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </g>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 40" fill="none" {...props}>
      <LogomarkPaths />
      <text
        x="48"
        y="27"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        GatherHub
      </text>
    </svg>
  )
}
