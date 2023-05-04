import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CroppedImage from "../services/cropped-image";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../services/genreService";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({
  onSelectedGenre,
  selectedGenre,
}: Props): JSX.Element | null => {
  const { genres, error, isLoading } = useGenres(selectedGenre);
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  if (isLoading) skeletonItems.map((item) => <GenreListSkeleton key={item} />);

  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={CroppedImage(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={`${
                  selectedGenre?.id === genre.id ? "bold" : "normal"
                } `}
                onClick={() => {
                  onSelectedGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
