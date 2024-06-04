export const Photofile = async (photofile: File): Promise<string> => {
  const proxyUrl = "http://localhost:3000";
  const targetUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;
  const url = proxyUrl + targetUrl;
  const formData = new FormData();

  if (photofile) {
    formData.append("image", photofile);
  } else {
    throw new Error("No file provided");
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data.url;
  } catch (error) {
    console.error("Error during the fetch operation:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};
