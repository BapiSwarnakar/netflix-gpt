import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/background.jpg";
const FrontendLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const idValid = validationForm();
    if(idValid != null){
      setError(idValid);
      return;
    }
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // navigate("/dashboard");
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => {
      setError("Invalid email or password");
    });

  };

  const validationForm = () => {
    if (formData.email === "" || formData.password === "") { 
      return "Email and password are required";
    }
    return null;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      }
    });
  },[navigate]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
  }
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={backgroundStyle}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}  method="POST" className="space-y-6">
          <div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            {/* <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500" >
                  Forgot password?
                </a>
              </div>
            </div> */}
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"  
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
              />
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm/6 font-semibold text-center">
              {error}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-3 text-center text-sm/6 text-white">
          Not a member?{" "}
          <Link
            to="/signup"
            className="font-semibold text-red-700 hover:text-red-500"
          >
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FrontendLogin;
