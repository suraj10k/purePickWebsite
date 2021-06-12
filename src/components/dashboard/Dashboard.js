import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { Heading, GridItem, Text } from '@chakra-ui/react';
import firebase from 'firebase';
import { useAuth } from '../../hooks/useAuth';
import {
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

const Dashboard = () => {
  const { user } = useAuth();
  const { handleSubmit, register, errors, setError, formState } = useForm();

  const [Name,setName] = useState('');
  const [OrderNo,setOrderNo] = useState('');
  const [OrderDate,setOrderDate] = useState('');
  const [Quantity,setQuantity] = useState('');
  const [Price,setPrice] = useState('');

  const enterData = () => {
    const dataRef = firebase.database().ref("customer");
    const customer = {
        Name,
        OrderNo,
        OrderDate,
        Quantity,
        Price,
    };
    dataRef.push(customer);
};

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      
      <Heading as="h1" mb={6}>
        Dashboard
      </Heading>
      <Text fontSize="lg">Welcome, {user.email}!</Text>
      <form onSubmit={enterData}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type='text' autoFocus  onChange={(e) => setName(e.target.value)} value={Name} />
          <FormLabel htmlFor="OrderNo">Order No.</FormLabel>
          <Input type='number' autoFocus  onChange={(e) => setOrderNo(e.target.value)} value={OrderNo} />
          <FormLabel htmlFor="OrderDate">Date</FormLabel>
          <Input type='date' autoFocus  onChange={(e) => setOrderDate(e.target.value)} value={OrderDate} />
          <FormLabel htmlFor="quantity">Quantity</FormLabel>
          <Input type='number' autoFocus  onChange={(e) => setQuantity(e.target.value)} value={Quantity} />
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input type='number' autoFocus  onChange={(e) => setPrice(e.target.value)} value={Price} />
          <Button
            mt={4}
            colorScheme="teal"
            onClick={enterData}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </GridItem>
  );
};

export default Dashboard;