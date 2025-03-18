import { ThemeContext } from "components-gallery";
import { useRef, useState, useContext, useEffect } from "react";

type Pros = {
  isOpen: boolean;
  toggleSidebar: () => void;
};
export default function UseTickets({ isOpen, toggleSidebar }: Pros) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isCashDropModalOpen, setIsCashDropModalOpen] = useState(false);
  const [shouldDisplayUpdateModal, setShouldDisplayUpdateModal] =
    useState(false);
  const [isPrintersTemplatesModalOpen, setIPrintersTemplatesModalOpen] =
    useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  return {
    sidebarRef,
    isCashDropModalOpen,
    setIsCashDropModalOpen,
    shouldDisplayUpdateModal,
    setShouldDisplayUpdateModal,
    isPrintersTemplatesModalOpen,
    setIPrintersTemplatesModalOpen
  };
}
