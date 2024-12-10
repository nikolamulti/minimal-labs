export function Archive({
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
      <path d="M9.5 9.5h-3v-1h3v1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2.5c-.55228 0-1 .44772-1 1v2c0 .55229.44772 1 1 1v6c0 .5523.44772 1 1 1h8c.5523 0 1-.4477 1-1v-6c.5523 0 1-.44772 1-1v-2c0-.55229-.4477-1-1-1H3Zm9 4H4v6h8v-6Zm1-1v-2H3v2h10Z"
        fill="currentColor"
      />
    </svg>
  );
}
