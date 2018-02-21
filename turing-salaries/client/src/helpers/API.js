
export const getData = async () => {
  const alumniData = await fetch('/api/v1/alumni');
  const alumniJSON = alumniData.json();
  return alumniJSON
}
