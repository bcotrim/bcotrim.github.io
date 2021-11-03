import React, { useState } from "react";
import { AboutSection, Experience } from ".";
import { EXPERIENCES } from "../data/experience";

const Work: React.FC = () => (
  <>
    <section
      id="work"
      className="box-border pt-20 md:pt-0 md:p-4 bg-gray-700 p-2 grid place-items-center"
    >
      <div className="w-full max-w-lg lg:max-w-xl flex flex-col gap-y-4 overflow-y-auto">
        {EXPERIENCES.map((exp, i) => (
          <Experience key={i} experience={exp} />
        ))}
      </div>
    </section>
  </>
);

export default React.memo(Work);
