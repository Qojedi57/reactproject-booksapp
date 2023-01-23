import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";
import Book from "./book";
import {Text} from '@chakra-ui/react'

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <Book
              title={book.title}
              image={book.image_url}
              goto={() => navigate(`/books/${book.id}`)}
            />
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <Text fontSize='40px' color='teal'>
      You don't have any favorite books yet!
      </Text>
      )}
    </div>
  );
};

export default Favorites;
