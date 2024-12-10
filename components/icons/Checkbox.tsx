export function Checkbox({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3c0-.55228.44772-1 1-1h7v1H3v10h10V8h1v5c0 .5523-.4477 1-1 1H3c-.55228 0-1-.4477-1-1V3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8536 3.85353 8.00003 9.70708 5.14648 6.85353l.70711-.70711 2.14644 2.14645 5.14647-5.14645.7071.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
