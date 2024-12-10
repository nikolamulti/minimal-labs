export function BranchDefault({
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
        d="M4.62883 4.07321H1.39642v-1h3.23241c.33435 0 .64659.1671.83205.4453l3.70314 5.5547h3.52528l-2.1464-2.14645.7071-.7071 3.3535 3.35355L11.25 12.9268l-.7071-.7071 2.1464-2.1465H9.16402c-.33436 0-.64659-.16709-.83206-.44529l-3.70313-5.5547ZM13.3964 4.07321H7.39642v-1h5.99998v1Z"
        fill="currentColor"
      />
    </svg>
  );
}
