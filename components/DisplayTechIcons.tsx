import Image from "next/image";
import {  getTechLogos } from "@/lib/utils";


const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);

  return (
         <div className="flex flex-row">{techIcons.slice(0, 3).map(({ tech, url }, index) => (
           <div
          key={tech}
          className=
            " rounded-full bg-blue-200 mr-1  gap -2 relative group  p-2 flex flex-center">
      
          <span className="tech-tooltip ">{tech}</span>
          
          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}</div>

  )
}

export default DisplayTechIcons;
