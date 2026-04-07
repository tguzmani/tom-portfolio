export default function LogoIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        className="fill-neutral-100 dark:fill-white"
      />
      <path
        d="M10 11L6 16L10 21"
        className="stroke-neutral-800 dark:stroke-black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 11L26 16L22 21"
        className="stroke-neutral-800 dark:stroke-black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9L14 23"
        className="stroke-neutral-800 dark:stroke-black"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
