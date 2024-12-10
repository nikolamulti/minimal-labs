export function ArrowDownRight({
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
        d="M11.4268 10.7197 4.28035 3.57324l-.70711.70711 7.14646 7.14645H6.4268v1h6v-6h-1v4.2929Z"
        fill="currentColor"
      />
    </svg>
  );
}
