import React from 'react';
import { Box, Center, Text, Flex, Image, Button, Divider, Link as ChakraLink, Stack } from '@chakra-ui/react';
import VisaCard from '../assets/visacard.png';
import MasterCard from '../assets/mastercard.png';
import Paypal from '../assets/paypal.png';
import American from '../assets/american.png';
import Visa from '../assets/visa.png';
import { FaTruckArrowRight, FaHeart } from "react-icons/fa6";
import { Link as RouterLink } from 'react-router-dom';

export default function Cart() {
  return (
    <Center m="30px 0" flexDirection={{ base: 'column', md: 'row' }} justifyContent="center">
      <Box width={{ base: "90%", sm: "80%", md: "450px" }} padding="10px" margin="10px">
        <Flex justifyContent="space-between" fontSize={"1.5xl"}>
          <Text fontWeight="bold">MY BAG</Text>
          <Text>Items are reserved for 60 minutes</Text>
        </Flex>

        <Stack spacing={4} bg="#fff" m="30px 0" padding="10px">
          <Flex alignItems="flex-start">
            <Image src="https://images.asos-media.com/products/jaded-rose-fringe-mini-shirt-dress-in-olive/206996533-1-khaki" alt="Khaki Dress" width={{ base: "80px", md: "100px" }} />
            <Box ml="10px" width={"100%"}>
              <Text fontWeight={"bold"}>$ 32.00</Text>
              <Text>Product Description</Text>
              <Flex alignItems="center" justifyContent="space-between">
                <Text>Khaki</Text>
                <select name="size" id="size" aria-label="Select Size">
                  <option value="">Select Size</option>
                  <option value="uk6">UK 6</option>
                  <option value="uk8">UK 8</option>
                  {/* Add more sizes as needed */}
                </select>
                <select name="quantity" id="quantity" aria-label="Select Quantity">
                  <option value="1">Qty 1</option>
                  <option value="2">Qty 2</option>
                  {/* Add more quantities as needed */}
                </select>
              </Flex>
              <Button variant="link" leftIcon={<FaHeart />} colorScheme="gray">
                Save for later
              </Button>
            </Box>
          </Flex>
        </Stack>

        <Flex alignItems="flex-start" bg="#fff" m="30px 0">
          <Box p="5px 20px"><FaTruckArrowRight fontSize={"36px"} /></Box>
          <Box ml="10px">
            <Text fontWeight="bold">FREE* STANDARD DELIVERY</Text>
            <Text>Faster delivery options available to most countries.</Text>
            <ChakraLink as={RouterLink} to="/delivery-info">More info</ChakraLink>
          </Box>
        </Flex>

        <Text fontWeight="bold" fontSize={"22px"}>Wondering where your items have gone?</Text>
        <Divider m="20px 0 10px" borderColor="gray.300" />
        <Text>No worries – you'll find them in your Saved Items.</Text>
        <Button
          colorScheme='gray'
          border={"1px solid grey"}
          color="#000"
          borderRadius={"0"}
          m="10px 0"
          padding={"20px 15px"}
        >
          VIEW ALL SAVED ITEMS
        </Button>
      </Box>

      <Box width={{ base: "90%", sm: "80%", md: "350px" }} padding="10px" margin="10px">
        <Text fontWeight="bold" fontSize={"2xl"} padding={"20px 0px"}>TOTAL</Text>

        <Flex justifyContent="space-between" fontSize={"1.5xl"}>
          <Text fontWeight="bold">SUB-TOTAL</Text>
          <Text fontWeight="bold">$ 45.00</Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text fontWeight="bold">DELIVERY</Text>
          <Text fontWeight="bold">$ 45.00</Text>
        </Flex>
        <Divider m="20px 0 10px" borderColor="gray.300" />
        <Button colorScheme='green' borderRadius="0" width="100%" mb="20px">CHECKOUT</Button>

        <Text fontWeight="bold" m="10px 0">WE ACCEPT:</Text>

        <Flex m="10px 0" flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
          {[VisaCard, MasterCard, Paypal, American, Visa].map((card, index) => (
            <Image
              key={index}
              src={card}
              alt={`Payment Method ${index + 1}`}
              width="25px"
              height="25px"
              mr="30px"
              _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
            />
          ))}
        </Flex>

        <Text as="p">Got a discount code? Add it in the next step.</Text>
      </Box>
    </Center>
  );
}
