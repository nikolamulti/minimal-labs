export function ViewEdges({
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
        d="M2 2.5c0-.55228.44772-1 1-1h10c.5523 0 1 .44772 1 1v5h-1v-5H3v10h3.5v1H3c-.55228 0-1-.4477-1-1v-10Z"
        fill="currentColor"
      />
      <path d="M9 14.5v-7l5 5h-3l-2 2Z" fill="currentColor" />
    </svg>
  );
}
