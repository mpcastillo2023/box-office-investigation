import { UseIsDesktop } from "components-gallery";
import { useState, useEffect } from "react";
import useNetworkStatus from "src/Hooks/useNetworkStatus";

export default function UseTickets() {
  const { isDesktop } = UseIsDesktop();
  const { isOnline } = useNetworkStatus();
  const [isAppOnline, setIsAppOnline] = useState(isOnline);
  const [shouldDisplayOnlineModal, setShouldDisplayOnlineModal] =
    useState(false);

  useEffect(() => {
    setIsAppOnline(isOnline);
  }, [isOnline]);

  return {
    isDesktop,
    isAppOnline,
    shouldDisplayOnlineModal,
    setShouldDisplayOnlineModal,
    setIsAppOnline
  };
}
