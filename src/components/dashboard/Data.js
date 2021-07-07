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
    Textarea,
  } from '@chakra-ui/react';

export default function Data({customers ,thing}) {
    return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}>
        <Heading as="h1" mb={6}>
        {customers.companyName}
      </Heading>
      <Text fontSize="lg">{customers.customerName}</Text>
      <Text fontSize="lg"> {customers.address}</Text>
      <Text fontSize="lg">{customers.city}</Text>
      <Text fontSize="lg">{customers.country}</Text>
      <Text fontSize="lg">{customers.value}</Text>
      </GridItem>
    )
}

