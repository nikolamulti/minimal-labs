export function Delete({
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
        d="M6.5 2.5c-.55228 0-1 .44772-1 1v1h-3v1h1V12c0 .8284.67157 1.5 1.5 1.5h6c.8284 0 1.5-.6716 1.5-1.5V5.5h1v-1h-3v-1c0-.55228-.4477-1-1-1h-3Zm3 2v-1h-3v1h3Zm-5 7.5V5.5h7V12c0 .2761-.2239.5-.5.5H5c-.27614 0-.5-.2239-.5-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
