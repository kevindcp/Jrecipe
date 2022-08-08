import {
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    Input, 
    Button,
    Text,
} from '@chakra-ui/react';
import { LoginFormInputs } from '../types/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationLogin } from '../validators/forms';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom'
import { loginUser } from '../services/Auth';
import { useAppDispatch } from '../hooks/redux';
import { set } from '../redux/user';
import { useNavigate } from "react-router-dom"

const LoginForm: FC = () => {
    const history = useNavigate()
    const dispatch = useAppDispatch()
    const { register, handleSubmit , formState: {errors} } = useForm<LoginFormInputs>({ 
        resolver: yupResolver(validationLogin),
        mode: 'onBlur',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const onSubmit = async (values: LoginFormInputs) => {
        setError("")
        setIsLoading(true)
        const tokenLog = await loginUser(values)
        if (typeof tokenLog === "object") {
            setError(tokenLog.data)   
            setIsLoading(false)
        } else {
            dispatch(set(tokenLog))
            history('/')
        }
    }
    return (
        <FormControl
        w = {['90vw', '80vw', '70vw', '60vw', '50vw','20vw']}
        h = '50vh'
        >
            <FormControl
                isInvalid = {!!errors?.email?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='JohnDoe@email.com' {...register('email')}/>
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.password?.message}
                p = '2'
                isRequired
            >
                <FormLabel>
                    Password
                </FormLabel>
                <Input type='password' placeholder='password' {...register('password')}/>
                <FormErrorMessage>
                    {errors?.password?.message}
                </FormErrorMessage>
            </FormControl>
            { error !== "" ? 
            <Text ml = '3' color='red'>
                {error}
            </Text> : <></>
            }
            <Button 
                onClick={handleSubmit(onSubmit)}
                w = '94%'
                ml = '2'
                mt = '4'
                colorScheme = 'blue'
                disabled = {!!errors.email || !!errors.password}
                isLoading = {isLoading}
            >
                Log In
            </Button>
            <Text p='5' textAlign='center'>
                <Link to='/register'>
                    Don't have an account? 
                    <span style={{fontWeight:'bolder'}}> Sign Up</span>
                </Link>
            </Text>
        </FormControl>
    );
}

export default LoginForm