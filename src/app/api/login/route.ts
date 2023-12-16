// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const userData = req.body;
//   if (!userData) {
//     res.status(400).json({ success: false, error: "Invalid request data" });
//     return;
//   }
//   const registerUrl = "https://sorayia-backend.onrender.com/api/register/";
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
// 			"Content-Length": JSON.stringify(userData).length.toString(),
//     },
//     body: JSON.stringify(userData),
//   };
  
//   try {
//     const response = await fetch(registerUrl, requestOptions);

//     if (response.status === 200) {
//       res.status(200).json({ success: true });
//     } else {
//       res.status(400).json({ success: false });
//     }
//   } catch (error) {
//     console.error("Error fetching remote API:", error);
//     res.status(500).json({ success: false, error: "Internal Server Error", message: error });
//   }
// }