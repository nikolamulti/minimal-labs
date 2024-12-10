export function ArrowUpLeft({
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
        d="M5.28035 4.57324h4.29286v-1h-6v6h1V5.28032l7.14649 7.14648.7071-.7071-7.14645-7.14646Z"
        fill="currentColor"
      />
    </svg>
  );
}
