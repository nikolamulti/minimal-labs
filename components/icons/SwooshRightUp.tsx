export function SwooshRightUp({
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
        d="M8.07323 4.3107 4.92678 7.45714l-.70711-.7071 4.35356-4.35356 4.35357 4.35356-.7071.7071L9.07323 4.3107v4.79289c0 2.48531-2.01472 4.50001-4.5 4.50001h-1.5v-1h1.5c1.93299 0 3.5-1.567 3.5-3.50001V4.3107Z"
        fill="currentColor"
      />
    </svg>
  );
}
