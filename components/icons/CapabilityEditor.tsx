export function CapabilityEditor({
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
        d="M5.95711 15.2498v1.5858c0 .4455.53857.6686.85355.3536l9.29294-9.29292c.1952-.19526.1952-.51185 0-.70711l-.7929-.79289c-.1953-.19526-.5119-.19526-.7071 0L6.10355 14.8963c-.09376.0937-.14644.2209-.14644.3535Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8964 4.39637c.5858-.58578 1.5356-.58579 2.1214 0l3.5858 3.58579c.5857.58578.5857 1.53553 0 2.12134l-9.93939 9.9393h-5.7071v-5.7071l9.93929-9.93933Zm1.4143.70711c-.1953-.19526-.5119-.19526-.7071 0L4.95711 14.7499v4.2929H9.25l9.6464-9.64643c.1953-.19526.1953-.51184 0-.70711l-3.5857-3.58578Z"
        fill="currentColor"
      />
    </svg>
  );
}
