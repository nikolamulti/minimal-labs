export function Code({
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
        d="M6.01493 13.8787 6 13.9384V14h1.01539L9.98507 2.12127 10 2.06155V2H8.98461L6.01493 13.8787ZM2.70711 8l2.14644 2.1464-.7071.7072-2.5-2.50005L1.29289 8l.35356-.35355 2.5-2.5.7071.7071L2.70711 8ZM13.2929 8l-2.1465 2.1464.7072.7072 2.5-2.50005L14.7071 8l-.3535-.35355-2.5-2.5-.7072.7071L13.2929 8Z"
        fill="currentColor"
      />
    </svg>
  );
}
