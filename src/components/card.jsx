import { Card } from "flowbite-react";

export function CardComponent({title, description, imgSrc}) {
  return (
    <Card
      className="max-w-sm mb-10 md:mb-0"
      imgAlt="Card Image"
      imgSrc={imgSrc}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
