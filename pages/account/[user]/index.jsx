import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function user() {
  //Declarations
  const { token, username } = useSelector((e) => e.variantOne);
  const router = useRouter();

  //Functions
  const handleTimeout = () => {
    setTimeout(() => {
      router.push("/account/login");
    }, 3000);
  };

  //Renders
  if (token === undefined) {
    useEffect(() => {
      handleTimeout();
    }, []);
    return (
      <div>
        <h1>Invalid Token. You need to log in first.</h1>
        <h4>Page will redirect in 3 Seconds</h4>
      </div>
    );
  }

  return (
    <div>
      <h1>Logged in as: {username}</h1>
      <h4>Token: {token}</h4>
      <button onClick={() => router.push(`/account/${username}/posts`)}>
        Check Posts
      </button>
    </div>
  );
}
