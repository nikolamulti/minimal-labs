export function DuplicateFill({
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
        d="M5.5 3.5c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1v6c0 .5523-.4477 1-1 1h-6c-.55228 0-1-.4477-1-1v-6Zm1 0h6v6h-6v-6Z"
        fill="currentColor"
      />
      <path
        d="M2.5 5.5v7c0 .5523.44772 1 1 1h7v-1h-7v-7h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
