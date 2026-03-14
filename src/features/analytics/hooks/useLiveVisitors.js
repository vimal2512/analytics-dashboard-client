import { useEffect, useState } from "react";
import { socket } from "../../../socket";

export function useLiveVisitors() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    socket.on("liveVisitors", (value) => {
      setCount(value);
    });

    return () => {
      socket.off("liveVisitors");
    };

  }, []);

  return count;

}