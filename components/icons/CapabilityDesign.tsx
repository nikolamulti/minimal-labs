export function CapabilityDesign({
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
        opacity=".4"
        d="M9.68839 8.83585 13.999 13.1464c.315.315.0919.8536-.3536.8536h-2.4632c-.2 0-.3807-.1192-.4595-.303L8.87527 9.38637c-.21687-.50602.42384-.9398.81312-.55052Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.85254 4.70708c0-.8909 1.07714-1.33707 1.70711-.7071L17.8525 14.2929c.63.6299.1838 1.7071-.7071 1.7071h-5.5858l-3.99995 4c-.62997.6299-1.70711.1838-1.70711-.7071V4.70708ZM17.1454 15 6.85254 4.70708V19.2929l3.99996-4c.1876-.1876.4419-.2929.7071-.2929h5.5858Z"
        fill="currentColor"
      />
    </svg>
  );
}
