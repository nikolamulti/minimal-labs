export function DeviceDesktopXXL({
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
        d="M3.5 4.5c-.55228 0-1 .44772-1 1v9c0 .5523.44772 1 1 1h5v3H6v1h12v-1h-2.5v-3h5c.5523 0 1-.4477 1-1v-9c0-.55229-.4477-1-1-1h-17Zm11 11h-2v3h2v-3Zm-3 0h-2v3h2v-3Zm-8-10h17v9h-17v-9Z"
        fill="currentColor"
      />
    </svg>
  );
}
