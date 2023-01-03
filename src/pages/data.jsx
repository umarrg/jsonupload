import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    useBreakpointValue,
    Button,
} from '@chakra-ui/react'



export const Data = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box>
            <Box display={"flex"} justifyContent="center" p={4}>
                <Box w={isDesktop ? "full" : "full"}>

                    <TableContainer>
                        <Table variant='simple'>

                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Phone Number</Th>
                                    <Th>Shipping Address</Th>

                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td ></Td>
                                    <Td ></Td>
                                </Tr>


                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
            </Box>

        </Box>
    )
}