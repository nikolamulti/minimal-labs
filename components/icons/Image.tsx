export function Image({
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
        d="M6 7c.55228 0 1-.44772 1-1s-.44772-1-1-1-1 .44772-1 1 .44772 1 1 1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3c0-.55228.44772-1 1-1h10c.5523 0 1 .44772 1 1v10c0 .5523-.4477 1-1 1H3c-.55228 0-1-.4477-1-1V3Zm11 0H3v9.2929L7.29289 8c.39053-.39052 1.02369-.39052 1.41422 0L13 12.2929V3ZM8 8.70711 12.2929 13H3.70711L8 8.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
