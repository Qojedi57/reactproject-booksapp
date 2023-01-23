import React from "react";
import "../App";
import { Link } from "react-router-dom";
import {Spacer,Flex,Box,ButtonGroup,Button,Text} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <div>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text fontSize='38px' color='teal'>React Books App</Text>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            {/* <Button colorScheme="teal"  href= "./favorites">Your Favorites</Button> */}
            <Link to="/favorites">
            <Text fontSize='38px' color='teal'>Your Favorites</Text>
            </Link>
          </ButtonGroup>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
