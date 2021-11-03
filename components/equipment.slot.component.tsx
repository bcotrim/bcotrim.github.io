import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faChild,
  faHandPaper,
  faHeadSideMask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Slot = "rightHand" | "leftHand" | "head" | "body";

type Props = {
  slot: Slot;
  icon: IconDefinition;
  label: string;
};

const SlotMap: Record<Slot, { icon: IconDefinition; class?: string }> = {
  rightHand: {
    icon: faHandPaper,
    class: "transform -scale-x-1",
  },
  leftHand: { icon: faHandPaper },
  head: { icon: faHeadSideMask },
  body: { icon: faChild },
};

const EquipmentSlot: React.FC<Props> = ({ slot, icon, label }) => (
  <div className="text-base text-gray-300 flex flex-row">
    <span className="w-10 text-center">
      <FontAwesomeIcon
        icon={SlotMap[slot].icon}
        className={`text-lg mr-1 text-gray-500 ${SlotMap[slot].class}`}
      />
    </span>
    <span className="w-2 text-left">:</span>
    <span className="w-10 text-center">
      <FontAwesomeIcon icon={icon} className="text-lg mr-1 text-gray-300" />
    </span>
    <span>{label}</span>
  </div>
);

export default React.memo(EquipmentSlot);
