import React from "react";

type ButtonLinkProps = {
  text: string;
  to: string
  target?: string
}

export default function ButtonLink({ text, to, target }: ButtonLinkProps) {
  return (
    <a href={to} target={target}>
      <div className="bg-white inline-flex sm:px-12 sm:py-6 px-6 py-4 rounded-3xl sm:text-2xl text-base text-black linkButton border-2 uppercase overflow-hidden">
        {text}
      </div>
    </a>

  )
}