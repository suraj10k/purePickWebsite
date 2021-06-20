import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { Heading, GridItem, Text , Textarea, Center } from '@chakra-ui/react';
import firebase from 'firebase';
import { useAuth } from '../../hooks/useAuth';
import {
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputRightElement,
  Box,
  SimpleGrid,
  Flex,
  Spacer,
  StackDivider,
  IconButton,
  Divider,
  Grid,
} from '@chakra-ui/react';
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon ,CheckIcon,EmailIcon,DeleteIcon} from '@chakra-ui/icons'


const Dashboard = () => {
  const { user } = useAuth();
  const { handleSubmit, register, errors, setError, formState } = useForm();
  
  const [companyName,setCompanyName] = useState('');
  const [customerName,setCustomerName] = useState('');
  const [address,setAddress] = useState('');
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');
  const [inputFields,setInputFields] = useState([
    { items: '', materials: '', cost: ''}
  ])

  const [value, setValue] = React.useState("")
  
  const handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
  }  
  
  const enterData = () => {
    const dataRef = firebase.database().ref("customer");
    const customer = {
      companyName,
      customerName,
      address,
      city,
      country,
      inputFields,
      value,
    };
    dataRef.push(customer);
  };

  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

const handleChangeInput = (index,event) => {
  const values = [...inputFields];
  values[index][event.target.name] = event.target.value;
  setInputFields(values);
}

const handleAddFields = () => {
  setInputFields([...inputFields, { items:"",materials:"",cost:""}])
}

const handleDeleteFields = (index) =>{
  const values = [...inputFields];
  console.log(index)
  values.pop(index);
  setInputFields(values);
}


  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={1}
    >
    <VStack
        divider={<StackDivider borderColor="teal" />}
        spacing={4}
        align="stretch"
      >
      <Box h="40px">
        <Heading as="h1" mb={6}>
         Dashboard
        </Heading>
      </Box>
      <Text fontSize="lg">Welcome, {user.email} !</Text>
      <form onSubmit={enterData}>
        <FormControl>
        <Box h="450px" mt="25px">
        <Stack spacing={2}>
          <FormLabel htmlFor="Cname">Company Name</FormLabel>
          <Input type='text' onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
          <FormLabel htmlFor="name">Customer Name</FormLabel>
          <Input type='text' onChange={(e) => setCustomerName(e.target.value)} value={customerName} />
          <FormLabel htmlFor="Address">Address</FormLabel>
          <Input type='text' onChange={(e) => setAddress(e.target.value)} value={address} />
          <FormLabel htmlFor="city">City</FormLabel>
          <Input type='text' onChange={(e) => setCity(e.target.value)} value={city} />
          <FormLabel htmlFor="country">Country</FormLabel>
          <Input type='text' onChange={(e) => setCountry(e.target.value)} value={country} />
          <SimpleGrid minChildWidth="120px" spacing="40px"></SimpleGrid>
        </Stack>
         </Box>
         <Box w="110%">
            <form onSubmit={enterData}>
              { inputFields.map((inputField,index) => (
                <div key={index}>
                  <Grid templateColumns="repeat(5, 1fr)" gap={8}>                    
                  <Box w="100%" h="10%">
                    <FormLabel htmlFor="items">Items</FormLabel> 
                    <Input type='text' name="items" value={inputField.items} onChange={event => handleChangeInput(index,event)} /> 
                  </Box>
                  <Box w="100%" h="10%"> 
                    <FormLabel htmlFor="Materials">Materials</FormLabel> 
                    <Input type='text' name="materials" value={inputField.materials} onChange={event => handleChangeInput(index,event)} />
                  </Box>
                  <Box w="100%" h="10%">   
                    <FormLabel htmlFor="labour">Cost</FormLabel>
                    <Input type='text' name="cost" value={inputField.cost} onChange={event => handleChangeInput(index,event)} />
                  </Box>
                  <Box w="100%" h="10%">  
                    <Text fontSize="md" ml={12} lineHeight="630%" >
                        <IconButton
                          bgGradient="linear(to-l, #01baef,#20bf55)"
                          aria-label="Call Segun"
                          size="md"
                          onClick={() => handleDeleteFields()}
                          icon={<DeleteIcon />}
                        />
                      </Text>
                  </Box>
                  <Box w="100%" h="10%">  
                      <Text fontSize="md" mr={8} lineHeight="630%" >
                        <IconButton
                          bgGradient="linear(to-l, #01baef,#20bf55)"
                          aria-label="Call Segun"
                          size="md"
                          onClick={() => handleAddFields()}
                          icon={<AddIcon />}
                        />
                      </Text>
                  </Box>
                    </Grid>
                </div>
              ))}
            </form>
          </Box>
          <Box h="150%">
          <Text mb="8px">Notes:</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="How to Pay ? , Where to send checks ? , etc....."
            size="sm"
          />
          </Box>
          <SimpleGrid minChildWidth="120px" spacing="30px">
            <Box height="100%">
              <Button
                mt={4}
                bgGradient="linear(to-l, #20bf55,#01baef)"
                onClick={enterData}
              >
                Submit
              </Button>
            </Box>
            <Box height="80px" align="right">
              <Button
                mt={4}
                size="md"
                bgGradient="linear(to-l, #01baef,#20bf55)"
                variant="outline"
                onClick={event =>  window.location.href='/showData'}
                >
                Show Invoice
              </Button>
              <IconButton
                mt={4}
                variant="outline"
                colorScheme="teal"
                aria-label="Send email"
                icon={<EmailIcon />}
              />
            </Box>
          </SimpleGrid>
        </FormControl>
      </form>
      </VStack>
    </GridItem>
  );
};

export default Dashboard;