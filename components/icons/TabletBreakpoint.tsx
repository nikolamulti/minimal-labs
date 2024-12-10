export function TabletBreakpoint({
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
      <path d="M7 12h2v-1H7v1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v10c0 .5523-.4477 1-1 1H4c-.55228 0-1-.4477-1-1V3Zm1 0h8v10H4V3Z"
        fill="currentColor"
      />
    </svg>
  );
}
