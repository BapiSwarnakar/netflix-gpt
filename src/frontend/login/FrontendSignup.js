import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../../assets/images/background.jpg";

const FrontendSignup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validationForm = () => {
    if (formData.name === "" || formData.email === "" || formData.password === "") { 
      return "Name , Email and password are required";
    }
    return null;
  }

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
    setLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed up 
      updateName(formData.name);
      navigate("/browse");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
      setLoading(false);
    });
  };

  const updateName = (name) => { 
    updateProfile(auth.currentUser, {
      displayName: name , photoURL: "https://ui-avatars.com/api/?name="+name
    }).then(() => {
      const { displayName, email, uid, photoURL } = auth.currentUser;
      dispatch(addUser({ displayName, email, uid, photoURL }));
    }).catch((error) => {
      alert(error.message);
    });
  }
  
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
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        <div>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Name"
                autoComplete="false"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
              />
            </div>
          </div>
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
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              disabled={loading}
            >
              { loading ? 'Processing...' : 'Sign up' }
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-white">
          If already a member?{" "}
          <Link
            to="/"
            className="font-semibold text-red-600 hover:text-red-500"
          >
            Login now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default FrontendSignup
