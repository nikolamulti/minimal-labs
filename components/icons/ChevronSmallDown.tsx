export function ChevronSmallDown({
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
        d="m8.00002 8.61617 2.64648-2.64644.7071.7071-3.35358 3.35357-3.35355-3.35357.70711-.7071 2.64644 2.64644Z"
        fill="currentColor"
      />
    </svg>
  );
}
