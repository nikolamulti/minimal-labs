export function Component({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47885 1.69168c-.29848-.1628-.65922-.1628-.9577 0l-5 2.72728C2.19989 4.59419 2 4.93091 2 5.29685v5.40635c0 .366.19989.7027.52115.8779l5 2.7273c.29848.1628.65922.1628.9577 0l5.00005-2.7273c.3212-.1752.5211-.5119.5211-.8779V5.29685c0-.36594-.1999-.70266-.5211-.87789L8.47885 1.69168ZM3.54416 5.00004 8 2.56958l4.4558 2.43046L8 7.43049 3.54416 5.00004ZM3 5.84231v4.86089l4.5 2.4546V8.29685L3 5.84231Zm5.5 7.31549 4.5-2.4546V5.84231L8.5 8.29685v4.86095Z"
        fill="currentColor"
      />
    </svg>
  );
}
