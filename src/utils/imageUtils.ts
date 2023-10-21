export const getImageBlob = async (imageUrl: string) => {
  const imageResponse = await fetch(imageUrl);
  return imageResponse.blob();
};
