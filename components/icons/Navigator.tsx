export function Navigator({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 7.5h15v-1H2v1ZM22 12.5H7v-1h15v1ZM22 17.5H7v-1h15v1Z"
        fill="currentColor"
      />
    </svg>
  );
}
