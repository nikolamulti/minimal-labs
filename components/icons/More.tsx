export function More({
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
        d="M3 8c0-.55228.44772-1 1-1s1 .44772 1 1-.44772 1-1 1-1-.44772-1-1ZM7 8c0-.55228.44772-1 1-1s1 .44772 1 1-.44772 1-1 1-1-.44772-1-1ZM11 8c0-.55228.4477-1 1-1s1 .44772 1 1-.4477 1-1 1-1-.44772-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
