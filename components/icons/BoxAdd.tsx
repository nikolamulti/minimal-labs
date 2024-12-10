export function BoxAdd({
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
        d="M7.5 8.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1h3Z"
        fill="#fff"
        fillOpacity=".67"
      />
      <path
        opacity=".4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3c0-.55228.44772-1 1-1h10c.5523 0 1 .44772 1 1v10c0 .5523-.4477 1-1 1H3c-.55228 0-1-.4477-1-1V3Zm11 0H3v10h10V3Z"
        fill="currentColor"
        fillOpacity=".67"
      />
    </svg>
  );
}
