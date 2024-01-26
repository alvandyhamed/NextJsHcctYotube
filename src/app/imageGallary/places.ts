import { StaticImageData } from "next/image";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";

export type PlacesImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const placesImage: PlacesImage[] = [
  {
    id: "1",
    name: "Image1",
    src: image1,
    photographer: "Photo by Hamed",
    location: "Iran/Touserkan",
  },
  {
    id: "2",
    name: "Image2",
    src: image2,
    photographer: "Photo by Hamed",
    location: "Iran/Touserkan",
  },
  {
    id: "3",
    name: "Image3",
    src: image3,
    photographer: "Photo by Hamed",
    location: "Iran/Touserkan",
  },
  {
    id: "4",
    name: "Image4",
    src: image4,
    photographer: "Photo by Hamed",
    location: "Iran/Touserkan",
  },
];

export default placesImage;
