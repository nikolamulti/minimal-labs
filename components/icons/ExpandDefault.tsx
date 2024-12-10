export function ExpandDefault({
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
        d="M7.5 5H11v3.5h1V4H7.5v1ZM8.5 11H5V7.5H4V12h4.5v-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
