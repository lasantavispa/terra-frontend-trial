const Api = async () => {
  try {
    const response = await fetch('https://tf-frontend.netlify.app/trial');
    if (!response.ok) {
      throw new Error('Error in the request');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default Api;
