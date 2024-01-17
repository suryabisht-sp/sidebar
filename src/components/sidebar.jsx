import React from 'react';
import { FaTh, FaUserAlt, FaCommentAlt } from 'react-icons/fa';
import { HStack, Flex, Box, Text, Heading, Button, Spacer } from '@chakra-ui/react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
} from '@chakra-ui/react';

const Sidebar = ({ children }) => {
  const menu = [
    {
      path: '/',
      Name: 'Home',
      icon: <FaTh />,
    },
    {
      path: '/contact',
      Name: 'Contact',
      icon: <FaUserAlt />,
    },
    {
      path: '/about',
      Name: 'About',
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <HStack w="full"
      h="100vh"
      bg="gray.100"
      padding={5}
      justifyContent="space-between"
      flexDirection={{ base: 'column', md: 'row' }}>
      <Flex as="aside"
        w={{ base: 'full', md: '15%' }}
        flexDirection="column"
        h="full"
        bg="white"
        alignItems={{ base: 'center', md: 'center' }}
        borderRadius="xl"
        boxShadow="md"
  >
        <Heading as="h1" p="10px">
          Hello
        </Heading>
        <List>
          {menu.map((item, index) => (
            <ListItem key={index}>
              <Flex as="span" marginRight="5px" justifyContent="space-between">
                {item.icon}
                <Link to={item.path}>
                  {item.Name}
                </Link>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Flex as="main" w="full" flexDirection="column" h="full" bg="white" alignItems={'center'} borderRadius="xl">
        <Navbar />
        {children}
      </Flex>
    </HStack>
  );
};

export default Sidebar;
