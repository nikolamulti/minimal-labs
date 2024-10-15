import React from "react";
import { cn } from "@/utils/utils";
import { Check } from "@phosphor-icons/react";

/*-------------------------------------
 * Card
 * -----------------------------------*/

type CardProps = {
  highlighted?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  highlighted = false,
  children,
  className,
}) => {
  const renderCard = () => (
    <div
      className={cn(
        "w-full rounded-xl bg-muted bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(31,31,31,0)]",
        highlighted
          ? "shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.36),0px_0.5px_2px_-1px_rgba(0,0,0,0.34)]"
          : "shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.12),0px_3px_6px_-2px_rgba(0,0,0,0.36),0px_0.5px_2px_-1px_rgba(0,0,0,0.34)]",
        className,
      )}
    >
      {children}
    </div>
  );

  return highlighted ? (
    <div
      className={cn(
        "w-full rounded-xl bg-gradient-to-br from-[#146EF5] to-[#CC3200] p-[0.125rem]",
      )}
    >
      {renderCard()}
    </div>
  ) : (
    renderCard()
  );
};

/*-------------------------------------
 * Pricing Action
 * -----------------------------------*/

type CardActionProps = {
  children?: React.ReactNode;
  className?: string;
};

const CardAction: React.FC<CardActionProps> = ({ children, className }) => {
  return (
    <div className={cn("mt-6 flex flex-col gap-3", className)}>
      {children}
      <p className="text-xs fg-muted">One-time payment - Plus local taxes</p>
    </div>
  );
};

/*-------------------------------------
 * Card List
 * -----------------------------------*/

type CardListProps = {
  children?: React.ReactNode;
  className?: string;
};

const CardList: React.FC<CardListProps> = ({ children, className }) => (
  <div className={cn("flex max-w-[30rem] flex-col gap-3", className)}>
    {children}
  </div>
);

/*-------------------------------------
 * Card List Item
 * -----------------------------------*/

type CardListItemProps = {
  children?: React.ReactNode;
  className?: string;
};

const CardListItem: React.FC<CardListItemProps> = ({ children, className }) => (
  <div
    className={cn(
      "flex flex-row gap-2 text-left align-top text-sm fg-muted",
      className,
    )}
  >
    <div className="flex">
      <Check
        className="mt-[2px] flex shrink-0 fg-success"
        width={16}
        height={16}
      />
    </div>
    {children}
  </div>
);

export { Card, CardList, CardListItem, CardAction };
