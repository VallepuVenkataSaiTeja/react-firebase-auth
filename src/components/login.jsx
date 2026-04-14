import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth,email,password);
            console.log('user logged in successfully')
            toast.success('user logged in successgully!', {position:"top-right"})
            navigate('/profile')
        } catch (error) {
            console.log(error)
            toast.error(error.message, {position:"top-right"})
        }
    }

    return (
        <div>
            <h1 className="!text-black">Login Page</h1>

           <div className="flex justify-center mt-[10rem]">
             <form onSubmit={handleSubmit} className="flex flex-col w-100 border p-5">
                <label>email</label>
                <input className="border rounded" type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} />

                <label className="mt-5">Passowrd</label>
                <input className="border rounded" type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />

                <button  className="mt-5 bg-black text-white py-1 cursor-pointer">Login</button>

                 <div className="mt-5">
                    <p className="text-right">Not registered? <span className="text-blue-600 cursor-pointer" onClick={()=>navigate('/register')}>Register</span> </p>
                </div>
            </form>
           </div>
        </div>
    )
}
export default Login;