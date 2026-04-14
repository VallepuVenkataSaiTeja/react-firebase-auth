import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth , db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const userRegister = await createUserWithEmailAndPassword(auth, email, password);
            const user = userRegister.user;
            console.log(user)
            if(user){
                await setDoc(doc(db,'users', user.uid), {
                    email: user.email,
                    firstName: fName,
                    lastName: lName
                });
            }
            console.log('user created successgully');
            toast.success('user created successgully!', {position:"top-right"})
        } catch (error) {
            console.log(error)
            toast.error(error.message, {position:"top-right"})
        }
    }

    return (
        <div>
            <h1 className="!text-black">Register Page</h1>

           <div className="flex justify-center mt-[10rem]">
             <form onSubmit={handleSubmit} className="flex flex-col w-[500px] border p-5">
                <label>email</label>
                <input className="border rounded" type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} />

                <label className="mt-5">Passowrd</label>
                <input className="border rounded" type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />

                <label className="mt-5">first name</label>
                <input className="border rounded" type="text"
                value={fName}
                onChange={e => setfName(e.target.value)} />

                <label className="mt-5">last name</label>
                <input className="border rounded" type="text"
                value={lName}
                onChange={e => setlName(e.target.value)} />

                <button  className="mt-5 bg-black text-white py-1 cursor-pointer">Register</button>

                <div className="mt-5">
                    <p className="text-right">Alreaady registered? <span className="text-blue-600 cursor-pointer" onClick={()=>navigate('/login')}>Login</span> </p>
                </div>
            </form>
           </div>
        </div>
    )
}
export default SignUp;