import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tokenValue } from "../features/variantSlice";

export default function VariantOne() {
  //Declarations
  //Used states to store the values of username and password.
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //useDispatch hook to dispatch an action
  const dispatch = useDispatch();
  //UseRouter hook to do routing operations
  const router = useRouter();

  //Generating random token
  const getAccessToken = () => {
    return Math.floor(Math.random() * 999999999999);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName && password) {
      const token = await getAccessToken();
      await dispatch(
        tokenValue({
          username: userName,
          token: token,
        })
      );
      router.push(`/account/${userName}`);
    } else {
      alert("Login First");
    }
  };

  if (router)
    return (
      <div className="containerClass">
        <form onSubmit={handleSubmit} className="dropdownClasses">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btnClass">Login</button>
        </form>
      </div>
    );
}
