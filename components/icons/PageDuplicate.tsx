export function PageDuplicate({
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
        d="M5.5 1.5c-.55228 0-1 .44772-1 1v9c0 .5523.44772 1 1 1h7c.5523 0 1-.4477 1-1V5.79289L9.20711 1.5H5.5Zm0 1h3.29289L12.5 6.20711V11.5h-7v-9Z"
        fill="currentColor"
      />
      <path
        d="M2.5 3.5v10c0 .5523.44772 1 1 1h8v-1h-8v-10h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
