export function Edit({
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
        opacity=".4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10.6036 7.39656-2.00002-2 .7071-.70711 2.00002 2-.7071.70711Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.89643 2.89649c.58577-.58578 1.53557-.58578 2.12137 0l1.0857 1.08579c.5858.58579.5858 1.53553 0 2.12132l-7.4393 7.4393H2.45709v-3.2071l7.43934-7.43931Zm1.41417.70711c-.1952-.19526-.5118-.19526-.7071 0L3.45709 10.75v1.7929h1.7929l7.14641-7.14641c.1953-.19526.1953-.51184 0-.7071L11.3106 3.6036Z"
        fill="currentColor"
      />
    </svg>
  );
}
