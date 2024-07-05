import Image from "next/image";
import React from "react";

const PodcastCard = ({
  title,
  imgUrl,
  description,
  podcastID,
}: {
  title: string;
  imgUrl: string;
  description: string;
  podcastID: number;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgUrl} width={174} height={174} alt={title} className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"/>
      </figure>
      <div className="flex flex-col">
        <h1 className="text-16 truncate text-white-1 font-bold">{title}</h1>
        <h2 className="text-12 truncate text-white-1 font-normal capitalize">{description}</h2>
      </div>
    </div>
  );
};

export default PodcastCard;
