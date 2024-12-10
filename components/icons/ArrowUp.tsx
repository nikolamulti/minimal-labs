export function ArrowUp({
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
        d="m8.50001 4.31073 3.14639 3.14641.7071-.7071-4.35352-4.35356-4.35356 4.35356.70711.7071 3.14648-3.14647v9.29293h1V4.31073Z"
        fill="currentColor"
      />
    </svg>
  );
}
