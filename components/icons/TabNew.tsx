export function TabNew({
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
        d="M9.96969 5.32324H5.6768v-1h6v5.99996h-1V6.03035L5.03035 11.6768l-.70711-.7071 5.64645-5.64646Z"
        fill="currentColor"
      />
    </svg>
  );
}
