export function InteractionsOff({
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
        d="m9.82584 10.533 3.82056 3.8206.7071-.7071L2.35353 1.64648l-.70711.70711 3.98894 3.98894-1.16643 1.89546c-.20501.33313.03467.76205.42583.76205h3.10522V13.5l1.82586-2.967ZM11.531 7.76209l-.5161.83867-1.60071-1.60072h1.69101c.3912 0 .6308.42891.4258.76205ZM7.99998 2.50004v3.08578L6.82444 4.41029l1.17554-1.91025Z"
        fill="currentColor"
      />
    </svg>
  );
}
