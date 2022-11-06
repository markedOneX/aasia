// import { Jwt } from "jsonwebtoken";

// export default function handler(req, res) {
//   if (!req.body) {
//     res.status(404);
//     res.end("error");
//     return;
//   }
//   const { username, password } = req.body;
//   const KEY = "asdujokmvoijofijgoipwerkokf";
//   res.json({
//     token: jwt.sign(
//       {
//         username,
//         admin: username === "admin" && password === "admin",
//       },
//       KEY
//     ),
//   });
// }
