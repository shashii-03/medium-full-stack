import { SignUpSchema } from "@shashiiii/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DATABASE_URL } from '../config'


const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignUpSchema>({
        username: "",
        email: "",
        password: "",
    })

    const sendRequest = async () => {
        try {
            const response = await axios.post(`${DATABASE_URL}/api/v1/user/${type === 'signup' ? "signup" : "signin"}`, postInputs)
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (err) {
            alert("Error while Signing up")
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">

            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            {type === 'signin' ? "Login to Account" : 'Create an Account'}

                        </div>
                        <div className="text-stone-400">
                            {type === "signin" ? "Dont't have an account?" : "Already have an account?"}   <Link className="underline pl-2" to={type === "signin" ? '/signup' : '/signin'}>
                                {type === 'signin' ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </div>

                    </div>
                    <div className="pt-8">
                        <LabelledInputs label="Username" placeholder="shashiii " onchange={(e) => {
                            setPostInputs({
                                ...postInputs, username: e.target.value
                            })
                        }} />
                        {type === "signup" ? <LabelledInputs label="Email" placeholder="shashi@gmail.com " onchange={(e) => {
                            setPostInputs({
                                ...postInputs, email: e.target.value
                            })
                        }} /> : null}
                        <LabelledInputs label="Password" type={'password'} placeholder="1233445  " onchange={(e) => {
                            setPostInputs({
                                ...postInputs, password: e.target.value
                            })
                        }} />
                    </div>
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        {type === 'signin' ? "SignIn" : "Sign Up"}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Auth

interface LabelledInputsTypes {
    label: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}
function LabelledInputs({ label, placeholder, onchange, type }: LabelledInputsTypes) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-gray-900  pt-4">{label} </label>
        <input onChange={onchange} type={type || 'text'} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}