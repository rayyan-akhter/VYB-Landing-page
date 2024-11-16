import { BlueCard } from "../BlueCard";
import { GreenCard } from "../GreenCard";
import { RedCard } from "../RedCard";
import { SkyCard } from "../SkyCard";

export const CardWrapper = ({ index, isLast }) => {
    const getCard = () => {
      switch (index) {
        case 1:
          return <RedCard isLast={isLast} />;
        case 2:
          return <GreenCard isLast={isLast} />;
        case 3:
          return <SkyCard isLast={isLast} />;
        case 4:
          return <BlueCard isLast={isLast} />;
  
        default:
          return null;
      }
    };
    return getCard(index);
  };