export function ChevronSmallLeft({
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
        d="m7.38389 8.00004 2.64641-2.64645-.70707-.70711-3.35356 3.35356 3.35356 3.35356.70707-.7071-2.64641-2.64646Z"
        fill="currentColor"
      />
    </svg>
  );
}
