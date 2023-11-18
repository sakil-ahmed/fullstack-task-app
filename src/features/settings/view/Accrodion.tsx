'use client'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Button, FormControl, FormLabel,
    HStack, Switch,
    Text,
    VStack
} from "@chakra-ui/react";

const array = [1, 2, 3, 4,]

export const Accrodion = () => {
    return <>
        <Accordion
            w={'full'}
            bg={'white'}
            allowToggle
            border={'1px solid'}
            borderColor={'gray.300'}
            borderRadius={'4px'}
        >
            <AccordionItem w={'full'} border={'none'}>
                <AccordionButton
                    as={'span'}
                    w={'full'}
                    bg={'#EDF2F7'}
                    cursor={'pointer'}
                    _hover={{bg: 'gray.100'}}
                >
                    <HStack w={'full'} justifyContent={'space-between'}>
                        {/* Accordian heading */}

                        <Text fontWeight={'500'}>
                            Category
                        </Text>

                        <HStack alignItems={'center'} columnGap={'20px'}>
                            <Box onClick={(e) => e.stopPropagation()} cursor={'pointer'}>
                                <Button color={'white'} bg={'#00569E'} fontSize={'13px'}>Add Category</Button>
                            </Box>

                            <Box
                                as="span"
                                w={'32px'}
                                h={'32px'}
                                border={'1px solid'}
                                borderColor={'gray.400'}
                                borderRadius={'full'}
                                cursor={'pointer'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                margin={'0 !important'}
                            >
                                {/*<AccordionIcon />*/}
                                <AccordionIcon/>
                            </Box>
                        </HStack>
                    </HStack>
                </AccordionButton>

                <AccordionPanel pb={4}>

                    <VStack w={'100%'} justifyContent={'center'} gap={'0'}>
                        {array.map((value, index) => {
                            return (

                                    <FormControl
                                        display="flex"
                                        alignItems="center"
                                        justifyContent={'space-between'}
                                        borderTop={'1px solid'}
                                        borderColor={'gray.300'}
                                        pt={'18px'}
                                        pb={'12px'}
                                        key={value + index}

                                    >

                                        <FormLabel
                                            htmlFor="email-alerts"
                                            fontSize={'14px'}
                                            lineHeight={'24px'}
                                            color={'#4F4F4F'}
                                        >
                                            Sub Category
                                        </FormLabel>
                                        <HStack alignItems={'center'} gap={'32px'}>

                                            <HStack alignItems={'center'} gap={'16px'}>
                                                <Box cursor={'pointer'}>
                                                    <Text>Text</Text>
                                                </Box>
                                                <Box>
                                                    <Text>Text</Text>
                                                </Box>
                                            </HStack>
                                        </HStack>
                                    </FormControl>

                            )
                        })}

                    </VStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
}