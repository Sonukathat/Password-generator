import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Pass = () => {
    const [pass, setPass] = useState("GenPass123#@");

    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);
    const [special, setSpecial] = useState(false);

    const [inputVal, setInputval] = useState("");

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setInputval(value);
    };

    const handlegenerate = () => {
        if (inputVal < 8 || inputVal > 20) {
            toast.error("Enter Password Length Between 8 To 20...", {
                position: "top-center",
            });
            setInputval("");
        } else {
            let chars = "";

            if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
            if (number) chars += "0123456789";
            if (special) chars += "!@#$%&*";

            if (chars.length === 0) {
                chars =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
            }

            let randomStr = "";
            for (let i = 0; i < inputVal; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                randomStr += chars[randomIndex];
            }

            setPass(randomStr);

            toast.success("Your Password Is Live...", {
                position: "top-center",
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
                    Password Generator
                </h1>

                <div className="bg-gray-100 rounded-xl p-4 text-center text-xl font-mono text-blue-600 tracking-wider mb-6">
                    {pass}
                </div>
                <div className="mb-6">
                    <input
                        min={8}
                        max={20}
                        type="number"
                        placeholder="8 – 20"
                        value={inputVal}
                        onChange={handleChange}
                        className="
              block w-full 
              rounded-lg border border-purple-400
              bg-gray-50 text-purple-700 placeholder-purple-400
              px-4 py-2 font-medium
              shadow-md transition
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              appearance-none
            "
                    />
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="upper" className="font-semibold text-purple-700">
                            UpperCase Letters
                        </label>
                        <input
                            type="checkbox"
                            id="upper"
                            checked={upper}
                            onChange={(e) => setUpper(e.target.checked)}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="lower" className="font-semibold text-purple-700">
                            LowerCase Letters
                        </label>
                        <input
                            type="checkbox"
                            id="lower"
                            checked={lower}
                            onChange={(e) => setLower(e.target.checked)}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="num" className="font-semibold text-purple-700">
                            Include Numbers
                        </label>
                        <input
                            type="checkbox"
                            id="num"
                            checked={number}
                            onChange={(e) => setNumber(e.target.checked)}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="special" className="font-semibold text-purple-700">
                            Special Characters
                        </label>
                        <input
                            type="checkbox"
                            id="special"
                            checked={special}
                            onChange={(e) => setSpecial(e.target.checked)}
                        />
                    </div>
                </div>
                <button
                    className="w-full mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 rounded-xl shadow-lg hover:scale-102 transition-transform cursor-pointer"
                    onClick={handlegenerate}
                >
                    Generate Password
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};
