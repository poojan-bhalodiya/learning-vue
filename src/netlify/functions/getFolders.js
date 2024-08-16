const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dd0mpmfxn",
  api_key: "448813374953961",
  api_secret: "sFMD8EQCi60rgLpLsoAQFj7SauM",
});

exports.handler = async (event, context) => {
  try {
    const result = await cloudinary.api.root_folders();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
