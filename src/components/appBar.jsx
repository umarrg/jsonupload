import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Text,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const AppBar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="section" pb={{ base: '12', md: '24' }} w="full" >
            <Box as="nav"  bg="#FFFF">
                <Box py={{ base: '4', lg: '5' }} px={4}>
                    <HStack spacing="10" justify="space-between">
                        <Link to={"/"}>
                            <Button variant={"link"}  >JSON UPLOAD</Button>
                        </Link>
                        {isDesktop ? (
                            <Flex justify="end" flex="1">

                                <HStack spacing="3">
                                    <Link to={"/data"}>
                                        <Button variant="link">Data</Button>
                                    </Link>
                                </HStack>
                            </Flex>
                        ) : (
                            <IconButton
                                variant="ghost"
                                icon={<FiMenu fontSize="1.25rem" />}
                                aria-label="Open Menu"
                            />
                        )}
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
}
