export function AddPanel({
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
        d="M11.375 11.375V4h1.25v7.375H20v1.25h-7.375V20h-1.25v-7.375H4v-1.25h7.375Z"
        fill="currentColor"
      />
    </svg>
  );
}
