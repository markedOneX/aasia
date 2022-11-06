import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function posts() {
  //Declarations
  const { token } = useSelector((e) => e.variantOne);
  const dummyArr = Array.from({ length: 5 });
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
      <h2>Posts</h2>
      <h6>Only logged in users can see this page</h6>
      {dummyArr.map((e, i) => {
        return (
          <p key={i}>
            {i + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores quam ducimus adipisci et dolore neque soluta repellendus, ab
            eum est, provident nihil repellat vero officiis tenetur, earum qui
            sunt numquam. Sit repellendus harum esse laborum suscipit inventore
            natus, rerum pariatur iure ducimus officia quos eligendi deserunt!
            Ipsa, non, neque sunt est sapiente aliquid quo eveniet quae
            voluptatem, nihil consequatur accusantium! Sapiente voluptas magnam
            beatae itaque nulla quia, quaerat temporibus rem consectetur officia
            maxime. Veniam ratione provident ea adipisci eius tenetur maxime,
            sunt minus quibusdam quis minima voluptatibus non. Nihil, cumque.
          </p>
        );
      })}
    </div>
  );
}
