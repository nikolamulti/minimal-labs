export function MergeCellVerticalDown({
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
        d="M7.5 8.29289V3h1v5.29289l2.1464-2.14644.7072.7071L8 10.2071 4.64645 6.85355l.7071-.7071L7.5 8.29289ZM1.5 13v-1h13v1h-13Z"
        fill="currentColor"
      />
    </svg>
  );
}
