export function CsvImport({
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
        d="M3.1768 3c0-.55228.44771-1 1-1h4.7071l4.2929 4.29289V13c0 .5523-.4477 1-1 1h-3v-1h3V6.70711L8.46969 3H4.1768v3h-1V3Z"
        fill="currentColor"
      />
      <path
        d="m3.53031 10.3536 1.64645-1.64649V14h1V8.70711L7.8232 10.3536l.70711-.70715-2.85355-2.85356L2.8232 9.64645l.70711.70715Z"
        fill="currentColor"
      />
    </svg>
  );
}
