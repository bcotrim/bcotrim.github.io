import React, { useRef } from "react";
import { Skill } from "../data/skills";
import useOnScreen from "../utils/use.on.screen";

type Props = { skill: Skill };

const SkillComponent: React.FC<Props> = ({ skill: { icon, value, title } }) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen<HTMLElement>(ref);

  return (
    <section
      ref={ref}
      className="flex flex-row gap-2 items-center my-1 sm:my-2"
    >
      <span className={`${icon} w-4`} title={title} />
      <div className={`h-3 rounded w-full bg-gray-600 overflow-hidden`}>
        <div
          className={`${
            isVisible && "origin-left transform scale-x-0 animate-barGrowX"
          } bg-gray-400 h-full rounded`}
          style={{ width: `${value}%` }}
        />
      </div>
    </section>
  );
};

export default React.memo(SkillComponent);
