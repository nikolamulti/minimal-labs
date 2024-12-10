export function Redo({
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
        d="M12.1893 5.6768 9.54289 3.03035l.70711-.70711 3.8536 3.85356-3.8536 3.8535-.70711-.70706L12.1893 6.6768H5.89645c-1.65686 0-3 1.34314-3 3 0 1.6568 1.34314 3 3 3h2v1h-2c-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4h6.29285Z"
        fill="currentColor"
      />
    </svg>
  );
}
