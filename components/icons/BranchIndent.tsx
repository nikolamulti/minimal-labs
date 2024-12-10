export function BranchIndent({
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
        d="M3.89642 6.07321v-3.5h-1v3.5c0 2.48528 2.01472 4.49999 4.5 4.49999h3.79288l-2.14643 2.1465.70711.7071 3.35352-3.3536-3.35352-3.35354-.70711.7071 2.14643 2.14645H7.39642c-1.93299 0-3.5-1.567-3.5-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
