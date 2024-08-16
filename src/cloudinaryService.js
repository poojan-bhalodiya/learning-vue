// // src/cloudinaryService.js
// import axios from "axios";

// const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/";
// const CLOUD_NAME = "dd0mpmfxn";
// const API_KEY = "448813374953961";
// const API_SECRET = "sFMD8EQCi60rgLpLsoAQFj7SauM";

// export const getCloudinaryFolders = async () => {
//   try {
//     const response = await axios.get(
//       `${CLOUDINARY_API_URL}/${CLOUD_NAME}/folders`,
//       {
//         auth: {
//           username: API_KEY,
//           password: API_SECRET,
//         },
//       }
//     );
//     return response.data.folders;
//   } catch (error) {
//     console.error("Error fetching folders:", error);
//     return [];
//   }
// };
