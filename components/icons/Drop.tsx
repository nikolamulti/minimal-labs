export function Drop({
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
        d="M13.4268 3.89642h-2.5c-1.933 0-3.5 1.56701-3.5 3.5v3.79288l3.1464-3.14643.7071.70711-4.3535 4.35352-4.35356-4.35352.70711-.70711L6.4268 11.1893V7.39642c0-2.48528 2.01471-4.5 4.5-4.5h2.5v1Z"
        fill="currentColor"
      />
    </svg>
  );
}
