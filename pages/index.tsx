import { FC, useState } from "react";
import { FloatingButton } from "../components/FloatingButton";
import { SquirrelHead } from "../components/SquirrelHead";
import Image from "next/image";
import groupPhoto from "../public/group.png";
import {
  faFacebook,
  faInstagram,
  faSteam,
  faTeamspeak,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

export const Index: FC<Props> = ({ children }) => {
  const state = useState(false);

  return (
    <div className="container mx-auto p-5 max-w-screen-md flex flex-col h-screen">
      <header className="flex items-center justify-center">
        <SquirrelHead className="h-20 w-20 mr-3" />
        <h1 className="font-display text-6xl text-white">Bonsai-Site e.V.</h1>
      </header>

      <main className="flex-1">
        <section>
          <h2 className="text-2xl text-white text-center">Find us on:</h2>
          <div className="flex justify-between">
            <FloatingButton
              name="Teamspeak"
              icon={faTeamspeak}
              backgroundElement={() => (
                <div className="h-full w-full bg-gradient-to-br from-[#2580c3] to-[#1c2537]"></div>
              )}
            />

            <FloatingButton
              name="Steam"
              icon={faSteam}
              backgroundElement={() => (
                <div className="h-full w-full bg-gradient-to-br from-[#666]"></div>
              )}
            />

            <FloatingButton
              name="YouTube"
              icon={faYoutube}
              backgroundElement={() => (
                <div className="h-full w-full bg-gradient-to-br from-[#666]"></div>
              )}
            />

            <FloatingButton
              name="Twitter"
              icon={faTwitter}
              backgroundElement={() => (
                <div className="h-full w-full bg-gradient-to-br from-[#666]"></div>
              )}
            />

            <FloatingButton
              name="Facebook"
              icon={faFacebook}
              backgroundElement={() => (
                <div className="h-full w-full bg-gradient-to-br from-[#1877f2] to-[#2664b4]"></div>
              )}
            />

            <FloatingButton
              name="Instagram"
              icon={faInstagram}
              backgroundElement={() => (
                <div className="h-full w-full bg-gradient-to-br from-[#405de6] via-[#e1306c] to-[#ffdc80]"></div>
              )}
            />
          </div>
        </section>
      </main>

      <footer>
        <Image
          className="rounded-lg block"
          alt="Gruppenfoto"
          src={groupPhoto}
          placeholder="blur"
        />
      </footer>
    </div>
  );
};
export default Index;
