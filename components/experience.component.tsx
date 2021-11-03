import React from "react";
import { Experience } from "../data/experience";

type Props = {
  experience: Experience;
};

const Experience: React.FC<Props> = ({ experience }) => (
  <>
    <div
      className={
        "border-box border-2 rounded-lg border-gray-300 bg-gray-700 p-4 flex flex-col gap-4 items-start"
      }
    >
      <img
        alt="ngt academy logo"
        src={experience.companyLogo}
        className="max-h-12"
      />
      <div className="text-gray-300 font-bold text-xl">{experience.title}</div>
      <div className="text-gray-300 text-base">{`${experience.startDate} - ${
        experience.endDate || "Present"
      }`}</div>
      <>
        <div className="text-gray-300 text-base">
          {experience.description}
          {!!experience.responsabilities.length && (
            <>
              <br />
              <br />
              <div>Responsible for:</div>
            </>
          )}
          {experience.responsabilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </div>
      </>
    </div>
  </>
);

export default React.memo(Experience);
