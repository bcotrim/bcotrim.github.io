import React from "react";
import {
  faHeadphones,
  faKeyboard,
  faMouse,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { EquipmentSlot, AboutSection, Skill } from ".";
import {
  SKILLS_CODE,
  SKILLS_FRAMEWORKS,
  SKILLS_OTHERS,
  SKILLS_TOOLS,
} from "../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const About: React.FC = () => (
  <section
    id="about"
    className="box-border pt-20 md:pt-0 md:p-4 bg-gray-700 p-2 grid place-items-center lg:sticky lg:top-4"
  >
    <div className="rounded-lg border-2 border-gray-300 w-full grid grid-cols-2 auto-rows-min max-w-lg lg:max-w-xl gap-x-4 gap-y-14 lg:gap-y-0">
      <img
        alt="profile photo"
        src="/profile.png"
        className={`lg:h-60 relative m-0 -mb-2 lg:m-0 col-span-1`}
      />
      <div className="flex flex-col mt-8 justify-start text-right mr-4 col-span-1 lg:col-span-2 h-full">
        <div className="text-3xl text-gray-300 font-bold">Bernardo</div>
        <div className="text-lg text-gray-300">Lvl. 90</div>
        <div className="text-base text-gray-300">Frontend Engineer</div>
        <div className="text-base text-gray-300">Portugal</div>
        <div className="mb-12 flex-1 flex flex-row items-end justify-end gap-x-4">
          <a href="https://github.com/bcotrim" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="text-gray-300 text-3xl lg:text-xl"
              icon={faGithub}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bernardo-cotrim-885b6840/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="text-gray-300 text-3xl lg:text-xl"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://twitter.com/bmmcotrim"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="text-gray-300 text-3xl lg:text-xl"
              icon={faTwitter}
            />
          </a>
        </div>
      </div>
      <AboutSection title="Equipment">
        <EquipmentSlot slot="rightHand" label="Keyboard" icon={faKeyboard} />
        <EquipmentSlot slot="leftHand" label="Mouse" icon={faMouse} />
        <EquipmentSlot slot="head" label="Headphones" icon={faHeadphones} />
        <EquipmentSlot slot="body" label="Comfy Clothes" icon={faTshirt} />
      </AboutSection>
      <AboutSection full title="Skills">
        <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-32 px-4 lg:px-12">
          <div>
            <div className="uppercase text-gray-400">Languages</div>
            {SKILLS_CODE.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
          <div>
            <div className="uppercase text-gray-400">Frameworks</div>
            {SKILLS_FRAMEWORKS.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
          <div>
            <div className="uppercase text-gray-400">Tools</div>
            {SKILLS_TOOLS.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
          <div>
            <div className="uppercase text-gray-400">Others</div>
            {SKILLS_OTHERS.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
      </AboutSection>
      <AboutSection full title="Bio">
        <div className="px-4 text-justify pb-4">
          Hello! Thanks for checking out my personal page.
          <br />
          I&apos;m a web developer from Portugal passionate about using my
          coding skills to make an impact in people&apos;s lives.
          <br />
          I have experience in different areas and with teams of different sizes
          and experience and I enjoyed every bit of it! I consider myself a team
          player and I firmly believe everyone is at their best when working in
          a team and collaborating with others.
          <br />
          If you want to reach out to me, please feel free to use any of my
          social links above.
          <br />
          Have a nice day!
        </div>
      </AboutSection>
    </div>
  </section>
);

export default React.memo(About);
