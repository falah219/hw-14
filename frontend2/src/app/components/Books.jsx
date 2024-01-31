import { Card, Heading, Image, Text, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
    <Card mx="100px" key={id} my={4} p={4} cursor='pointer'>
      <HStack>
        <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
        <VStack>
          <Heading ml="40px" size={"md"}>
            {title} ({year})
          </Heading>
          <Text ml="40px">{author}</Text>
          
          <Text ml="40px">
            <span>Publisher: </span>
            {publisher}
          </Text>

        </VStack>
      </HStack>
    </Card>
    </Link>
  );
}