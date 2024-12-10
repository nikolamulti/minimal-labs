export function ChevronLargeDown({
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
        d="m8 9.11617 3.6464-3.64644.7072.7071L8 10.5304 3.64645 6.17683l.7071-.7071L8 9.11617Z"
        fill="currentColor"
      />
    </svg>
  );
}
