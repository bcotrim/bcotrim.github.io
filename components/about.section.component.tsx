import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title: string; full?: boolean }>;

const AboutSection: React.FC<Props> = ({ children, title, full }) => (
  <section
    className={`relative flex flex-col justify-center p-1 lg:p-2 col-span-2 ${
      full ? "lg:col-span-5 border-l-0" : "lg:col-span-2 lg:border-l-2 lg:border-t-0"
    } border-gray-300  border-t-2`}
  >
    <div className="animate-pulse absolute w-32 text-left text-green-500 font-bold text-lg -top-12 lg:top-0 -ml-1.5 lg:-ml-2.5 bg-gray-700 border-2 lg:border-b-2 lg:border-t-0 border-b-0 border-gray-300 p-2 rounded-tr lg:rounded-tr-none lg:rounded-br uppercase">
      {title}
    </div>
    <div className={`text-gray-300 ${full && "lg:mt-14"}`}>{children}</div>
  </section>
);

export default React.memo(AboutSection);
