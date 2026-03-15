import { useEffect, useState } from "react";
import { socket } from "../../../socket";

export function useLivePages() {

  const [pages, setPages] = useState([]);

  useEffect(() => {

    socket.on("livePages", (data) => {
      setPages(data);
    });

    return () => {
      socket.off("livePages");
    };

  }, []);

  return pages;

}