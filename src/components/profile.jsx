import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("User document not found");
                }
            } else {
                setUserDetails(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    async function handleLogout() {
        try {
            await signOut(auth);
            navigate("/login");
            console.log("User logout successfully");
        } catch (error) {
            console.log(error.message);
        }
    }

    if (loading) return <p>Loading...</p>;

   return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Profile Page
                </h1>

                {userDetails ? (
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-center text-blue-600">
                            Welcome {userDetails.firstName}
                        </h3>

                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                {userDetails.email}
                            </p>
                            <p>
                                <span className="font-semibold">First Name:</span>{" "}
                                {userDetails.firstName}
                            </p>
                            <p>
                                <span className="font-semibold">Last Name:</span>{" "}
                                {userDetails.lastName}
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No user found</p>
                )}
            </div>
        </div>
    );
}

export default Profile;