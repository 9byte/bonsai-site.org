import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Atropos } from "atropos/react";
import { FC, ComponentType } from "react";

type Props = {
  name: string;
  icon: IconDefinition;
  backgroundElement: () => JSX.Element;
  hoverElement?: ComponentType;
};

export const FloatingButton: FC<Props> = ({ name, icon, backgroundElement }) => {
  return (
    <div className="">
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        className="w-24 h-24 relative rounded-lg"
        innerClassName="rounded-lg"
      >
        <div
          className="h-full w-full absolute rounded-lg bg-red-400 overflow-hidden"
          data-atropos-offset="-5"
        >
          {backgroundElement()}
        </div>
        <div
          className="h-full w-full absolute flex items-center justify-center p-2 text-white"
          data-atropos-offset="2"
        >
          <FontAwesomeIcon className="p-2" icon={icon} />
        </div>
      </Atropos>
    </div>
  );
};
