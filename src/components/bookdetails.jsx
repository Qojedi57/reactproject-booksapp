import React, { useState, useEffect } from "react";
import "../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";
import { Box} from "@chakra-ui/react";
import Book from "./book";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-details">
      <Book title={book.title} image={book.image_url} />
      <Box margin="0px 10px">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </Box>
    </div>
  );
};

export default BookDetails;
