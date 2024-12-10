export function ChevronLargeLeft({
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
        d="m6.88389 8.00004 3.64641-3.64645-.70707-.70711-4.35356 4.35356 4.35356 4.35356.70707-.7071-3.64641-3.64646Z"
        fill="currentColor"
      />
    </svg>
  );
}
