export function FolderDefault({
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
        d="M2 4c0-.55228.44772-1 1-1h3.70711l2 2H13c.5523 0 1 .44772 1 1v6c0 .5523-.4477 1-1 1H3c-.55229 0-1-.4477-1-1V4Zm4.29289 0H3v8h10V6H8.29289l-2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
