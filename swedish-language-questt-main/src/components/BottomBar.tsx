import Link from "next/link";
import { useBoundStore } from "../hooks/useBoundStore";
import bookk from 'public/wired-lineal-112-book-morph.gif'
import Image from "next/image";
import prof from '/Users/mahidharreddyvaka/Desktop/swedish-language-quest/public/wired.gif'
import exi from 'public/exitsign.gif'
import survey from 'public/survey1.gif'

type BottomBarItem = {
  name: Tab;
  href: string;
  icon: JSX.Element;
};

export type Tab = "Learn" | "Survey" | "Exit" | "Leaderboards";

export const useBottomBarItems = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);

  const bottomBarItems: BottomBarItem[] = [
    {
      name: "Learn",
      href: "/learn",
      icon: (<Image src={bookk} width="50" height="36" alt={""} />),
    },

    {
      name: "Survey",
      href: "/Survey",
      icon: (<Image src={survey} width="45" height="45" alt={""} />),
    },

    {
      name: "Exit",
      href: "/register",
      icon: (<Image src={exi} width="45" height="30" alt={""} />),
    },
  ];

  if (loggedIn) {
    bottomBarItems.splice(1, 0, {
      name: "Leaderboards",
      href: "/leaderboard",
      icon: (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          <path
            d="M7 9.5C7 7.84314 8.34315 6.5 10 6.5H36C37.6569 6.5 39 7.84315 39 9.5V23.5C39 32.3366 31.8366 39.5 23 39.5C14.1634 39.5 7 32.3366 7 23.5V9.5Z"
            fill="#FEC701"
          />
          <path
            opacity="0.3"
            d="M39.0001 13.3455V9.5C39.0001 7.84315 37.657 6.5 36.0001 6.5H31.5706L8.30957 29.8497C9.68623 33.0304 12.0656 35.6759 15.0491 37.3877L39.0001 13.3455Z"
            fill="white"
          />
        </svg>
      ),
    });
  }

  return bottomBarItems;
};

export const BottomBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const bottomBarItems = useBottomBarItems();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t-2 border-[#e5e5e5] bg-white md:hidden">
      <ul className="flex h-[88px]">
        {bottomBarItems.map((item) => {
          return (
            <li
              key={item.href}
              className="flex flex-1 items-center justify-center"
            >
              <Link
                href={item.href}
                className={
                  item.name === selectedTab
                    ? "rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] py-1 px-2"
                    : "py-1 px-2"
                }
              >
                {item.icon}
                <span className="sr-only">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
