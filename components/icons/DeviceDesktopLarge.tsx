export function DeviceDesktopLarge({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 6c0-.82843.67157-1.5 1.5-1.5h10c.8284 0 1.5.67157 1.5 1.5v8c0 .8284-.6716 1.5-1.5 1.5h-4.5v3H15v1H9v-1h2.5v-3H7c-.82843 0-1.5-.6716-1.5-1.5V6ZM7 5.5c-.27614 0-.5.22386-.5.5v8c0 .2761.22386.5.5.5h10c.2761 0 .5-.2239.5-.5V6c0-.27614-.2239-.5-.5-.5H7Z"
        fill="currentColor"
      />
    </svg>
  );
}
