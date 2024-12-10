export function Briefcase({
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
        d="M6 2c-.55228 0-1 .44772-1 1v2H3c-.55228 0-1 .44772-1 1v7c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1h-2V3c0-.55228-.4477-1-1-1H6Zm4 3V3H6v2h4ZM3 6h10v7H3V6Z"
        fill="currentColor"
      />
    </svg>
  );
}
