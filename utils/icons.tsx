export const Facebook = ({ className }: { className?: string }) => (
  <svg
    className={`h-8 w-8 ${className ?? ""}`}
    fill="currentColor"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
  </svg>
);

export const Mail = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-8 w-8 ${className ?? ""}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const Github = ({ className }: { className?: string }) => (
  <svg
    id="Bold"
    enableBackground="new 0 0 24 24"
    className={`h-8 w-8 ${className ?? ""}`}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
  </svg>
);

export const LinkedIn = ({ className }: { className?: string }) => (
  <svg
    className={`h-8 w-8 ${className ?? ""}`}
    fill="currentColor"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
  </svg>
);

export const LightMode = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ${className}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

export const DarkMode = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={`h-5 w-5 cursor-pointer transition duration-500 ${className}`}
    viewBox="0 0 20 20"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

export const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);

export const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
    />
  </svg>
);

export const DownloadIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 cursor-pointer ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export const ScrollUp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} h-6 w-6`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 11l7-7 7 7M5 19l7-7 7 7"
    />
  </svg>
);

export const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 375 375"
    version="1.2"
    className={`${className}`}
  >
    <defs>
      <clipPath id="a">
        <path d="M83 66h70v70H83Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M222 66h70.2v70H222Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M222 205h70.2v70.3H222Zm0 0" />
      </clipPath>
      <clipPath id="d">
        <path d="M83 205h70v70.3H83Zm0 0" />
      </clipPath>
    </defs>
    <g clip-path="url(#a)">
      <path
        className={`${className}`}
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M83 135.8h8.7v-61h61V66H83Zm0 0"
      />
    </g>
    <g clip-path="url(#b)">
      <path
        className={`${className}`}
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M222.5 74.8h61v61h8.7V66.1h-69.7Zm0 0"
      />
    </g>
    <g clip-path="url(#c)">
      <path
        className={`${className}`}
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M283.5 266.6h-61v8.7h69.7v-69.7h-8.7Zm0 0"
      />
    </g>
    <g clip-path="url(#d)">
      <path
        className={`${className}`}
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M83 275.3h69.7v-8.7h-61v-61H83Zm0 0"
      />
    </g>
    <g fillOpacity="1">
      <path
        className={`${className}`}
        stroke="none"
        d="M22.5 33.7c.4.4 1 .6 1.5.6a2 2 0 0 0 1-.2c1-.7 1.1-1.7.8-8.7-.2-3.8-.4-14.6-.4-24 0-16.8 0-16.9.7-16.9 1.7 0 4 2 5.3 4.7 1.2 2.2 1.9 4.5 3.9 11.8 2.8 10.4 4.7 15.1 8 18.6 2.4 2.4 4 3.3 7.5 3.3 3-.1 5-1.2 8-4.2 3.3-3 5.4-6 10-13.8 3.8-6.6 9.8-16 11.7-18.3 1.7-2 1.4-4-.5-4.6h-.5c-1.4 0-2.6 1.6-6.7 7.6a282 282 0 0 0-8.1 13c-4.3 7.3-6 9.7-8.4 12.4-2.2 2.2-4.2 3.3-6 3.3-1.6 0-3-1-4.3-2.7a49 49 0 0 1-6.5-17c-2.6-9.5-4-12.6-7-15.8l-1.4-1.5 3-2.1c3.9-2.7 10.8-9.1 14.7-13.6 13.7-15.4 18-26.1 12.9-31.1a9 9 0 0 0-6.6-2.3c-8.4 0-19.6 7.2-26 12.3-1.4 1.2-2.7 2.2-2.7 2l.5-6.3c.2-3.3.6-6.1.6-6.2 0-.2.4-.6.9-.7 1.1-.4 1.5-1.4 1.2-2.7 0-.4-.4-2.3-.5-4-.2-2.3-.4-3.5-.8-3.9-.3-.3-1-.5-1.6-.5-.6 0-1.2.2-1.6.6-1 1.3-2.6 13-3.4 23.5l-.3 5.1-1.5 1.9C12.5-38.2 3.6-25 3.6-13.2c0 3.2.5 4.8 1.8 6.2 1 1.2 2.4 1.7 3.6 1.7 1.2 0 2.1-.4 2.6-1.3.5-.7.5-.9 0-1.6-.4-.5-1-1-1.5-1.2-1.8-.3-1.9-.5-2-3.4-.3-6.5 4.5-17.4 11.5-26.3l1.5-2-.2 10.7a726 726 0 0 0 .7 62.3c.1.5.4 1.4.9 1.8ZM27-21.7l-1.6.9V-22l.4-12.8.3-11.6 1-1c.4-.5 2.2-2.1 4-3.6 8.8-7.3 18-12 24-12 2.2 0 2.5 0 3.3 1 .8.6.9 1 .7 2.5-1 9.9-22.3 32.9-32 37.8Zm0 0"
        transform="translate(115.7 197.6)"
      />
    </g>
    <g fillOpacity="1">
      <path
        className={`${className}`}
        stroke="none"
        d="M9.6 47.4c.3.3.8.5 1.3.5.6 0 1.2-.2 1.6-.6.5-.6.5-.8.2-3.2-.6-3.9-.8-15.6-.4-25.2.4-9.9 1-18.8 1.2-21.4l.2-1.9.7 1.4c1.1 2.2 3.4 7.7 5.6 13.7C24.4 22.7 27 27 31.6 29c1 .5 2.2.7 3.2.7 3.7 0 7.3-2.7 11-8l5.7-9.7a298.2 298.2 0 0 1 15.7-27c0-1.3-1.3-2.6-2.4-2.6-2 0-3.1 1.8-15.8 24.5A106.4 106.4 0 0 1 40 21.5c-1.7 2.3-3.6 3.5-5.3 3.5-1.7 0-3.4-1.2-5-3.6A66.3 66.3 0 0 1 24 8a106 106 0 0 0-8-17.7l-1.7-2.8.8-10 3.7-4.2c8.8-10 15.7-20.4 21.9-32.9a74.3 74.3 0 0 0 7.9-22.2c0-1.8-1-3-2.2-3-1.5 0-2.2 1-2.2 3 0 6-9.7 26-19.1 39.6-2.7 3.8-9 11.8-9.2 11.6-.2-.2 2-20.8 3-26.2.5-4.2 2.8-15.6 3-15.8.1-.1.6.2 1 .6.6.3 1 .6 1.6.6 1.4-.5 1.6-1 1.4-5.4-.2-4.8-.3-5.4-1.2-6.2a2 2 0 0 0-1.4-.6c-7.7 0-11.9 47.7-12.4 55.6l-.3 3-2.4 2.5c-1.3 1.4-2.6 3-2.8 3.4-.7 1.2-.1 2.7 2 5.4a12 12 0 0 1 2 2.9L8.6-.6c-.9 14.5-1.3 23.9-1.3 31.9 0 10.2.6 14.3 2.3 16.1Zm0 0"
        transform="translate(194.7 197.6)"
      />
    </g>
  </svg>
);
