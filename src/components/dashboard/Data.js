import React from 'react'
import {
    Heading,
    GridItem,
    Alert,
    AlertIcon,
    FormLabel,
    FormControl,
    Input,
    Button,
    Text,
  } from '@chakra-ui/react';

export default function Data({customers}) {
    return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}>
        <Heading as="h1" mb={6}>
        {customers.Name}
      </Heading>
      <Text fontSize="lg">Order Date : {customers.OrderDate}</Text>
      <Text fontSize="lg">Order No. : {customers.OrderNo}</Text>
      <Text fontSize="lg">Price : {customers.Price}$</Text>
      <Text fontSize="lg">Weight : {customers.Quantity}kg</Text>
    </GridItem>
    )
}

