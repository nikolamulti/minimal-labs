export function ArrowDownLeft({
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
        d="m5.28035 11.4268 7.14645-7.14645-.7071-.70711-7.14646 7.14646V6.4268h-1v6h6v-1H5.28035Z"
        fill="currentColor"
      />
    </svg>
  );
}
