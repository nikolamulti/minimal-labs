export function Menu({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 7.5H5v-1h14v1Zm0 5H5v-1h14v1Zm0 5H5v-1h14v1Z"
        fill="currentColor"
      />
    </svg>
  );
}
