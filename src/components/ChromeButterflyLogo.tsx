export function ChromeButterflyLogo() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[14vh] z-10 -translate-x-1/2 md:top-[10vh]"
      aria-hidden="true"
    >
      <div className="chrome-butterfly-stage">
        <div className="chrome-butterfly-shadow" />
        <svg
          className="chrome-butterfly-spin h-auto w-20 sm:w-24 md:w-28"
          viewBox="0 0 180 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chrome-upper" x1="14" y1="18" x2="83" y2="81" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#050505" />
              <stop offset="0.13" stopColor="#787878" />
              <stop offset="0.25" stopColor="#FFFFFF" />
              <stop offset="0.36" stopColor="#A4A4A4" />
              <stop offset="0.52" stopColor="#181818" />
              <stop offset="0.68" stopColor="#FDFDFD" />
              <stop offset="0.82" stopColor="#5C5C5C" />
              <stop offset="1" stopColor="#DADADA" />
            </linearGradient>
            <linearGradient id="chrome-lower" x1="20" y1="72" x2="82" y2="119" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#171717" />
              <stop offset="0.2" stopColor="#E8E8E8" />
              <stop offset="0.4" stopColor="#6A6A6A" />
              <stop offset="0.58" stopColor="#FFFFFF" />
              <stop offset="0.76" stopColor="#292929" />
              <stop offset="1" stopColor="#BDBDBD" />
            </linearGradient>
            <linearGradient id="chrome-body" x1="84" y1="31" x2="98" y2="113" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#202020" />
              <stop offset="0.15" stopColor="#FFFFFF" />
              <stop offset="0.32" stopColor="#5B5B5B" />
              <stop offset="0.48" stopColor="#F7F7F7" />
              <stop offset="0.67" stopColor="#111111" />
              <stop offset="0.83" stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#242424" />
            </linearGradient>
            <radialGradient id="chrome-head" cx="0" cy="0" r="1" gradientTransform="translate(87 35) rotate(38) scale(15 12)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.38" stopColor="#A9A9A9" />
              <stop offset="0.72" stopColor="#303030" />
              <stop offset="1" stopColor="#050505" />
            </radialGradient>
            <linearGradient id="chrome-flare" x1="22" y1="30" x2="77" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="0.46" stopColor="#FFFFFF" stopOpacity="0.92" />
              <stop offset="0.58" stopColor="#FFFFFF" stopOpacity="0.18" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <filter id="soft-relief" x="-20%" y="-20%" width="140%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="blur" />
              <feOffset dy="2.5" result="offset" />
              <feComposite in="offset" in2="SourceAlpha" operator="out" result="edge" />
              <feColorMatrix in="edge" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0" />
              <feBlend in="SourceGraphic" mode="normal" />
            </filter>
          </defs>

          <g filter="url(#soft-relief)">
            <g fill="#101010" stroke="#050505" strokeWidth="2.2" strokeLinejoin="round" transform="translate(0 4)">
              <path d="M85 66C71 31 42 11 20 20C-3 30 6 61 30 73C47 82 66 75 85 70V66Z" />
              <path d="M84 75C59 72 31 79 27 99C23 120 49 127 68 111C77 103 82 91 87 80L84 75Z" />
              <g transform="translate(180 0) scale(-1 1)">
                <path d="M85 66C71 31 42 11 20 20C-3 30 6 61 30 73C47 82 66 75 85 70V66Z" />
                <path d="M84 75C59 72 31 79 27 99C23 120 49 127 68 111C77 103 82 91 87 80L84 75Z" />
              </g>
            </g>

            <g stroke="#080808" strokeWidth="2" strokeLinejoin="round">
              <path d="M85 63C71 28 42 8 20 17C-3 27 6 58 30 70C47 79 66 72 85 67V63Z" fill="url(#chrome-upper)" />
              <path d="M84 72C59 69 31 76 27 96C23 117 49 124 68 108C77 100 82 88 87 77L84 72Z" fill="url(#chrome-lower)" />
              <g transform="translate(180 0) scale(-1 1)">
                <path d="M85 63C71 28 42 8 20 17C-3 27 6 58 30 70C47 79 66 72 85 67V63Z" fill="url(#chrome-upper)" />
                <path d="M84 72C59 69 31 76 27 96C23 117 49 124 68 108C77 100 82 88 87 77L84 72Z" fill="url(#chrome-lower)" />
              </g>
            </g>

            <g opacity="0.86">
              <path d="M19 29C38 17 63 35 78 60C55 49 35 46 19 29Z" fill="url(#chrome-flare)" />
              <path d="M33 94C44 82 63 80 79 78C65 91 53 102 33 94Z" fill="url(#chrome-flare)" opacity="0.65" />
              <g transform="translate(180 0) scale(-1 1)">
                <path d="M19 29C38 17 63 35 78 60C55 49 35 46 19 29Z" fill="url(#chrome-flare)" />
                <path d="M33 94C44 82 63 80 79 78C65 91 53 102 33 94Z" fill="url(#chrome-flare)" opacity="0.65" />
              </g>
            </g>

            <g stroke="#111111" strokeWidth="1.3" strokeLinecap="round" opacity="0.62">
              <path d="M82 64C63 56 42 43 25 27" />
              <path d="M82 69C58 69 42 68 27 59" />
              <path d="M84 77C63 84 49 95 38 108" />
              <g transform="translate(180 0) scale(-1 1)">
                <path d="M82 64C63 56 42 43 25 27" />
                <path d="M82 69C58 69 42 68 27 59" />
                <path d="M84 77C63 84 49 95 38 108" />
              </g>
            </g>

            <path d="M90 44C83 51 82 70 86 91C88 104 91 114 94 109C100 94 100 68 96 51C94 44 92 41 90 44Z" fill="url(#chrome-body)" stroke="#080808" strokeWidth="2" />
            <ellipse cx="91" cy="40" rx="8.5" ry="9.5" fill="url(#chrome-head)" stroke="#080808" strokeWidth="2" />
            <path d="M87 58H97M86 69H98M86 81H99M88 94H98" stroke="#090909" strokeWidth="1.2" opacity="0.78" />
            <path d="M87 37C82 26 73 20 64 19" stroke="url(#chrome-body)" strokeWidth="3" strokeLinecap="round" />
            <path d="M95 37C100 26 109 20 118 19" stroke="url(#chrome-body)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="64" cy="19" r="3" fill="url(#chrome-head)" stroke="#080808" strokeWidth="1.2" />
            <circle cx="118" cy="19" r="3" fill="url(#chrome-head)" stroke="#080808" strokeWidth="1.2" />
            <path d="M87 45C90 42 93 42 96 45" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.86" />
          </g>
        </svg>
      </div>
    </div>
  );
}
