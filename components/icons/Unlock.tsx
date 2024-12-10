export function Unlock({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 5.5c0-1.10457.89543-2 2-2 1.1046 0 2 .89543 2 2v1h1v-1c0-1.65685-1.3431-3-3-3-1.65685 0-3 1.34315-3 3v2H3c-.55228 0-1 .44771-1 1v4c0 .5523.44772 1 1 1h6c.55228 0 1-.4477 1-1v-4c0-.55228-.44772-1-1-1v-2Zm-6 3h6v4H3v-4Z"
        fill="currentColor"
      />
    </svg>
  );
}
