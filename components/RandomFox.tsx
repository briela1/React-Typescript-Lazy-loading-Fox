import { useRef, useEffect, useState } from "react";

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null) //inicializamos en null
    
    const [src, setSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
      );
    
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || !node.current) {
              return;
            }
    
            setSrc(image);
          });
        });
    
        if (node.current) {
          observer.observe(node.current);
        }
    
        return () => {
          observer.disconnect();
        };
      }, [image]);
    
    return (
        <img ref={node} src={src} width={320} height="auto" className=" max-auto rounded-md bg-gray-300" />
    )
}
