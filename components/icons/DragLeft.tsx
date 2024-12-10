export function DragLeft({
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
        d="M10.5 3v10h1V3h-1ZM7.5 11V5h1v6h-1ZM4.5 9V7h1v2h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
