import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default Clock;
