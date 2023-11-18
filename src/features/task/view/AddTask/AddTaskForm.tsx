'use client'
import {Flex, FormControl, FormLabel, Input, Select, Text, Textarea} from "@chakra-ui/react";
import {Button} from "@/components/Button/Button";
import {FC} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface FormDefaultValue {
    categoryId: string,
    status: string,
    description: string,
    title: string,
}

interface Props {
    defaultValue: FormDefaultValue

}


export const AddTaskForm: FC<Props> = ({defaultValue}) => {

    const validationSchema = z.object({
        title: z.string().min(1, 'Title is required'),
        description: z.string().min(1, 'Description is required '),
        status: z.string().min(1, 'Status is required'),
        categoryId: z.string().min(1, 'Category is required')


    })
    type ValidationSchema = z.infer<typeof validationSchema>;

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ValidationSchema>(
        {
            resolver: zodResolver(validationSchema),
            defaultValues:defaultValue
        }
    )
    console.log(errors)

    const onSubmit = (data: ValidationSchema) => {
        console.log(data)
        reset()

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDirection={'column'}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input {...register('title')} placeholder={'Enter Task Title'}/>
                    </FormControl>
                    <Text className='error_text'>{errors.title?.message}</Text>
                    <FormControl mt={'24px'}>
                        <FormLabel>Description</FormLabel>
                        <Textarea {...register('description')} placeholder='Here is a sample placeholder'/>
                    </FormControl>
                    <Text className='error_text'>{errors.description?.message}</Text>
                    <FormControl mt={'24px'}>
                        <FormLabel>Status</FormLabel>
                        <Select {...register('status')} placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <Text className='error_text'>{errors.status?.message}</Text>
                    <FormControl mt={'24px'}>
                        <FormLabel>Category</FormLabel>
                        <Select {...register('categoryId')} placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <Text className='error_text' mb={'24px'}>{errors.categoryId?.message}</Text>
                    <Button type={'submit'} text={'Create Task'}/>
                </Flex>
            </form>
        </>
    )
}