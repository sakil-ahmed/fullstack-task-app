import {Box, Button, Center, HStack, Text, useDisclosure, VStack} from '@chakra-ui/react';
import {CustomModal} from "@/lib/atom/Modal/Modal";
import {FC, ReactNode} from "react";
import {AiOutlineDelete} from "react-icons/ai";

interface RemoveItemPopupProps {
    submitText?: string;
    onSubmit: () => void;
    title?: string;
    subTitle?: string;
    isLoading?: boolean;
    p?: string;
    bg?: string;
    text?: string;
    openButton: ReactNode

}

export const RemoveItemTrigger: FC<RemoveItemPopupProps> = ({
                                                                submitText,
                                                                onSubmit,
                                                                title,
                                                                subTitle,
                                                                isLoading,
                                                                p,
                                                                bg,
                                                                text,
                                                                openButton
                                                            }) => {
    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <>
            {
                <HStack onClick={onOpen} w={'100%'}>
                    {openButton}
                </HStack>
            }
            <CustomModal isOpen={isOpen} onClose={onClose} title={'Delete Task'}>
                <VStack w={'full'} alignItems="stretch">
                    <VStack alignItems="center" textAlign="left" w="full" gap="40px">
                        <Center bg={'red.100'} rounded={'full'} padding={'20px'}>
                            <AiOutlineDelete size={60} color={'red'}/>
                        </Center>

                        <VStack textAlign={'center'}>
                            <Text mt="-10px" fontSize={'24px'} fontWeight={'600'}>
                                {title || 'Remove item'}
                            </Text>
                            <Text>
                                {subTitle ||
                                    'Are you sure you want to remove the item? This action cannot be undone.'}
                            </Text>
                        </VStack>
                        <HStack gap="16px" w="full" justifyContent={'center'}>
                            <Button
                                as={Box}

                                type="submit"
                                width="180px"
                                cursor={'pointer'}
                                onClick={onClose}
                            >
                                {'No cancel'}
                            </Button>
                            <Button
                                as={Box}
                                colorScheme={'red'}
                                width="180px"
                                cursor={'pointer'}
                                onClick={onSubmit}
                                isLoading={isLoading}
                            >
                                {submitText || 'Remove item'}
                            </Button>
                        </HStack>
                    </VStack>
                </VStack>

            </CustomModal>
        </>
    );
}
