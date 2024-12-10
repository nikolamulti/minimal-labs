export function Variable({
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
        d="M3.75736 8H3c-.55228 0-1 .44772-1 1v4c0 .5523.44772 1 1 1h8c-.7683 0-1.46916-.2888-1.99991-.7638v.0065l-.12032-.1203c-.00073-.0007-.00146-.0014-.00219-.0022L8.75736 13H3V9h1.75736l-1-1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13c-1.10457 0-2-.8954-2-2V3h4v8c0 1.1046-.8954 2-2 2ZM8 3c0-.55228.44772-1 1-1h4c.5523 0 1 .44772 1 1v8c0 1.6569-1.3431 3-3 3-.7684 0-1.46938-.2889-2.00015-.764v.0067L3.2216 7.46449c-.39052-.39053-.39052-1.02369 0-1.41422l2.82843-2.82842c.39052-.39053 1.02369-.39053 1.41421 0L8 3.7576V3Zm0 2.17182v5.65688L3.92871 6.75738l2.82843-2.82842L8 5.17182ZM11 12c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
