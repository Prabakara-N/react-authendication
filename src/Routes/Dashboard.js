import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [id, setId] = useState("");

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
    </div>
  );
};

export default Dashboard;
