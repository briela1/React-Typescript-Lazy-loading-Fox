import { useRef } from "react";

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null) //inicializamos en null
    
    return (
        <img ref={node} src={image} width={320} height="auto" className="rounded" />
    )
}
