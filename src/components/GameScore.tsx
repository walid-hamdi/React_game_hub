import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={14} borderRadius={10} paddingX={2}>
      {score}
    </Badge>
  );
};

export default GameScore;
