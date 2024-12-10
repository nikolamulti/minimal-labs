export function MobileLandscapeBreakpoint({
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
      <path d="M12 9V7h-1v2h1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12c-1.10457 0-2-.8954-2-2V6c0-1.10457.89543-2 2-2h8c1.1046 0 2 .89543 2 2v4c0 1.1046-.8954 2-2 2H4Zm-1-2V6c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v4c0 .5523-.4477 1-1 1H4c-.55228 0-1-.4477-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
