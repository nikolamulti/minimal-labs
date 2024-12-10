export function OauthArrow({
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
        d="m13.3536 6.14648-2.5-2.5-.7071.70711 1.6464 1.64645H2.50002v1H13c.2022 0 .3846-.12182.462-.30866.0773-.18684.0346-.4019-.1084-.5449ZM2.64646 9.85359l2.5 2.50001.70711-.7071L4.20712 10H13.5v-.99996H3.00001c-.20223 0-.38454.12182-.46194.30866-.07739.18683-.03461.40189.10839.54489Z"
        fill="currentColor"
      />
    </svg>
  );
}
