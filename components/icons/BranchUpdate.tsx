export function BranchUpdate({
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
        d="M3.5 1.5V5c0 1.933 1.567 3.5 3.5 3.5h2.29289L7.14645 6.35355l.7071-.7071L11.2071 9l-3.35355 3.3536-.7071-.7072L9.29289 9.5H7C4.51472 9.5 2.5 7.48528 2.5 5V1.5h1Z"
        fill="currentColor"
      />
      <path
        d="M10.5 4.5h2v9h-2v1h2c.5523 0 1-.4477 1-1v-9c0-.55228-.4477-1-1-1h-2v1Z"
        fill="currentColor"
      />
    </svg>
  );
}
