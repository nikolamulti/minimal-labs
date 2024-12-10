export function DeviceDesktopXL({
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
        d="M5.5 4.5c-.55228 0-1 .44772-1 1v9c0 .5523.44771 1 1 1h4v3H7v1h10v-1h-2.5v-3h4c.5523 0 1-.4477 1-1v-9c0-.55228-.4477-1-1-1h-13Zm5 14h3v-3h-3v3Zm-5-13h13v9h-13v-9Z"
        fill="currentColor"
      />
    </svg>
  );
}
