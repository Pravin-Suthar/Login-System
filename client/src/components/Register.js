import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
  import { storage } from "./../firebase/firebase"; 
//   import { storage } from "./firebase";
 // Import Firebase Storage functions
// Import storage object from firebase.js
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [image, setImage] = useState(null); // State to store selected image file
    const history = useHistory();

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log("button inside")
            const filename = image.name; // Generate a unique filename
            console.log(filename);
            let imageUrl = ""; // Change var to let to ensure the outer variable is modified
            
            try {
                // Create image reference
                const filename = image.name + uuidv4(); // Generate a unique filename
                const imageRef = ref(storage, `images/${filename}`);
        
                // Upload image
                const snapshot = await uploadBytes(imageRef, image);
        
                // Get download URL of the uploaded image
                imageUrl = await getDownloadURL(snapshot.ref); // Modify the outer imageUrl variable
                
                console.log("Download URL:", imageUrl);
            } catch (error) {
                console.error('Error creating image reference:', error);
                throw new Error('Failed to upload image');
            }
            console.log("middle console")
            
            console.log("imageUrl:", imageUrl); // Log the imageUrl
            
            // Send the registration data and image URL to the backend
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                imageUrl: imageUrl // Include the image URL in the request body
            });
            
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={handleRegister} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Profile Image</label>
                                    <div className="controls">
                                        <input type="file" accept="image/*" onChange={handleImageChange} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
