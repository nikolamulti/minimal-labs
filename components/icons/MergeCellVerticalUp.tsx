export function MergeCellVerticalUp({
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
        d="M14.5 4h-13V3h13v1ZM7.5 7.70711 5.35355 9.85355l-.7071-.7071L8 5.79289l3.3536 3.35356-.7072.7071L8.5 7.70711V13h-1V7.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
