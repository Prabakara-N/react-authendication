import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      const timeOut = setTimeout(() => {
        navigate("/signup");
      }, 2500);

      return () => clearTimeout(timeOut);
    }
  }, [id]);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        setId("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setId(user.uid);
      } else {
        setId("");
      }
    });
  }, []);
  if (!id) {
    return (
      <div>
        <h2>Not Signed In</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{id}</h2>
      <div className="sign-out">
        <button type="button" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
