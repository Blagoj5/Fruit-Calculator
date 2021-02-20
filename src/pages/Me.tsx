import {
  ArrowForwardIcon,
  CheckCircleIcon,
  InfoIcon,
  RepeatIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainForm } from '../components/MainForm';
import { resetScore } from '../store/actions/main';
import { initialState } from '../store/reducers/main';

interface MeProps {}

const Me: React.FC<MeProps> = ({}) => {
  const {
    name,
    surname,
    correctnessAdvanced,
    correctnessSimple,
    age,
    city,
  } = useSelector<typeof initialState, typeof initialState>((state) => state);
  const dispatch = useDispatch();

  return (
    <MainForm autoHeight>
      <Box borderBottom='1px solid gray' borderColor='gray.300' p={4}>
        <Box d='flex' justifyContent='space-between' alignItems='center'>
          <Heading as='h2' fontSize='3xl' mb={4}>
            {`Account Stats, ${name} ${surname} (${age})`}
          </Heading>
          <Tooltip label='Refresh score' aria-label='A tooltip'>
            <RepeatIcon
              fontSize='2xl'
              cursor='pointer'
              _hover={{
                color: 'gray.500',
              }}
              onClick={() => dispatch(resetScore())}
            />
          </Tooltip>
        </Box>
        <List spacing={3}>
          <ListItem fontSize='lg'>
            <ListIcon as={ArrowForwardIcon} />
            Name:{' '}
            {name ? (
              <Text as='span' fontWeight='600'>
                {name}{' '}
              </Text>
            ) : (
              <Link to='/calculator'>Add</Link>
            )}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={ArrowForwardIcon} />
            Surname:{' '}
            {surname ? (
              <Text as='span' fontWeight='600'>
                {surname}
              </Text>
            ) : (
              <Link to='/calculator'>Add</Link>
            )}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={ArrowForwardIcon} />
            Age:{' '}
            {age ? (
              <Text as='span' fontWeight='600'>
                {age}
              </Text>
            ) : (
              <Link to='/calculator/1'>Add</Link>
            )}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={ArrowForwardIcon} />
            City:{' '}
            {city ? (
              <Text as='span' fontWeight='600'>
                {city}
              </Text>
            ) : (
              <Link to='/calculator/1'>Add</Link>
            )}
          </ListItem>
        </List>
      </Box>
      <Box borderBottom='1px solid gray' borderColor='gray.300' p={4}>
        <Heading as='h2' fontSize='3xl' mb={4}>
          Substraction and addition results:
        </Heading>
        <List spacing={3}>
          <ListItem fontSize='lg'>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Hits: {correctnessSimple?.matches || 0}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={WarningTwoIcon} color='red.500' />
            Misses: {correctnessSimple?.misses || 0}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={InfoIcon} color='yellow.500' />
            Accuracity: {correctnessSimple?.ratio?.toFixed(2) || 0}
          </ListItem>
        </List>
      </Box>

      <Box p={4}>
        <Heading as='h2' fontSize='3xl' mb={4}>
          Multiplcation and division results from the calculator:
        </Heading>
        <List spacing={3}>
          <ListItem fontSize='lg'>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Hits: {correctnessAdvanced?.matches || 0}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={WarningTwoIcon} color='red.500' />
            Misses: {correctnessAdvanced?.misses || 0}
          </ListItem>
          <ListItem fontSize='lg'>
            <ListIcon as={InfoIcon} color='yellow.500' />
            Accuracity: {correctnessAdvanced?.ratio?.toFixed(2) || 0}
          </ListItem>
        </List>
      </Box>
    </MainForm>
  );
};

export default Me;
