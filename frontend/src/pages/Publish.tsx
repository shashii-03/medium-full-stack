import { useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios";
import { DATABASE_URL } from "../config";
import { useNavigate } from "react-router-dom";


const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmitPost = async () => {
        try {
            const resposne = await axios.post(`${DATABASE_URL}/api/v1/blog`, {
                title,
                description
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            navigate(`/blog/${resposne.data.id}`)

        } catch (err) {
            console.error(err)
            alert("oops ")
        }
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center w-full">
                <div className="pt-8 max-w-screen-lg w-full">
                    <input onChange={e => {
                        setTitle(e.target.value)
                    }} type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" />
                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea onChange={e => {
                            setDescription(e.target.value)
                        }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        <div className="mt-3">
                            <button onClick={handleSubmitPost} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish Post</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}



export default Publish