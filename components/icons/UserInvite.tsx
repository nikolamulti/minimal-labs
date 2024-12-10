export function UserInvite({
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
        d="M8 2C6.34315 2 5 3.34315 5 5s1.34315 3 3 3 3-1.34315 3-3-1.34315-3-3-3ZM6 5c0-1.10457.89543-2 2-2s2 .89543 2 2-.89543 2-2 2-2-.89543-2-2Z"
        fill="currentColor"
      />
      <path
        d="M3 11.5c0-.8284.67157-1.5 1.5-1.5H8V9H4.5C3.11929 9 2 10.1193 2 11.5V13h1v-1.5ZM12 14h-1v-2H9v-1h2V9h1v2h2v1h-2v2Z"
        fill="currentColor"
      />
    </svg>
  );
}
