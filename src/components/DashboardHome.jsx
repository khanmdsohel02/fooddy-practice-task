import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";

const DashboardHome = () => {
  const [currentUserUID, setCurrentUserUID] = useState("");
  const [currentUserEmail, setcurrentUserEmail] = useState("");
  const [currentUserDisplayName, setcurrentUserDisplayName] = useState("");
  const [currentUserPhotoURL, setcurrentUserPhotoURL] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      // console.log("User signed in:", user);
      setCurrentUserUID(user.uid);
      setcurrentUserEmail(user.email);
      setcurrentUserDisplayName(user.displayName);
      setcurrentUserPhotoURL(user.photoURL);
    } else {
      // User is signed out
    }
  });

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-lg shadow-red-400">
        <small className="p-5">
          <b>ID: </b>
          {currentUserUID}
        </small>
        <figure className="px-10 pt-10">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src={currentUserPhotoURL} />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center text-red-500">
          <h2 className="card-title  text-3xl font-semibold">
            {currentUserDisplayName}
          </h2>
          <p className="text-xl">{currentUserEmail}</p>
          <div className="card-actions mt-3">
            <button className="btn text-xl border-red-600 bg-red-100 hover:bg-red-600 text-red-500 hover:text-white">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
