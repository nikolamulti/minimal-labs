export function VideoTutorials({
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
        d="M4.25 3.5c1.10457 0 2 .89543 2 2 0-1.10457.89543-2 2-2s2 .89543 2 2c0 .50722-.1888.97035-.5 1.32291V8l3.3244-1.2467c.3269-.12259.6756.11905.6756.46816v4.55704c0 .3491-.3487.5907-.6756.4681L9.75 11v1c0 .2761-.22386.5-.5.5h-6c-.27614 0-.5-.2239-.5-.5V6.82291c-.31118-.35256-.5-.81569-.5-1.32291 0-1.10457.89543-2 2-2Z"
        stroke="currentColor"
      />
    </svg>
  );
}
