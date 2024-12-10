export function Team({
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
        d="M7 2c-.55228 0-1 .44772-1 1v4H2c-.55228 0-1 .44772-1 1v6h1V8h4v6h1V3h7v11h1V3c0-.55228-.4477-1-1-1H7Z"
        fill="currentColor"
      />
    </svg>
  );
}
