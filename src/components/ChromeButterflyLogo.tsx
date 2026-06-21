export function ChromeButterflyLogo() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[14vh] z-10 -translate-x-1/2 md:top-[10vh]"
      aria-hidden="true"
    >
      <svg
        className="chrome-butterfly-spin h-auto w-20 sm:w-24 md:w-28"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="chrome-wing"
            x1="12"
            y1="12"
            x2="82"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#101010" />
            <stop offset="0.18" stopColor="#F7F7F7" />
            <stop offset="0.38" stopColor="#666666" />
            <stop offset="0.58" stopColor="#FFFFFF" />
            <stop offset="0.78" stopColor="#252525" />
            <stop offset="1" stopColor="#D4D4D4" />
          </linearGradient>
          <linearGradient
            id="chrome-body"
            x1="73"
            y1="28"
            x2="88"
            y2="99"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FAFAFA" />
            <stop offset="0.32" stopColor="#303030" />
            <stop offset="0.55" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#111111" />
          </linearGradient>
        </defs>

        <g stroke="#080808" strokeWidth="2.5" strokeLinejoin="round">
          <path
            d="M76 58C63 27 36 9 18 17C-2 26 10 56 31 67C44 74 60 70 76 64V58Z"
            fill="url(#chrome-wing)"
          />
          <path
            d="M74 67C51 66 28 70 23 86C17 105 39 112 57 99C66 93 72 82 78 72L74 67Z"
            fill="url(#chrome-wing)"
          />
          <g transform="translate(160 0) scale(-1 1)">
            <path
              d="M76 58C63 27 36 9 18 17C-2 26 10 56 31 67C44 74 60 70 76 64V58Z"
              fill="url(#chrome-wing)"
            />
            <path
              d="M74 67C51 66 28 70 23 86C17 105 39 112 57 99C66 93 72 82 78 72L74 67Z"
              fill="url(#chrome-wing)"
            />
          </g>
          <path
            d="M80 38C73 45 72 62 76 82C78 94 82 101 84 96C89 84 90 61 86 46C84 39 82 36 80 38Z"
            fill="url(#chrome-body)"
          />
        </g>

        <path d="M79 40C76 29 69 24 62 22" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M83 40C86 29 93 24 100 22" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="62" cy="22" r="2.5" fill="#CFCFCF" stroke="#111111" />
        <circle cx="100" cy="22" r="2.5" fill="#CFCFCF" stroke="#111111" />
      </svg>
    </div>
  );
}
