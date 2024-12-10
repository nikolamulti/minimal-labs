export function ChevronLargeUp({
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
        d="m8.00002 6.88383 3.64648 3.64647.7071-.70713-4.35358-4.35356-4.35355 4.35356.70711.70713 3.64644-3.64647Z"
        fill="currentColor"
      />
    </svg>
  );
}
