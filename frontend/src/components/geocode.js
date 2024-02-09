import axios from 'axios';

const getCoordinates = async (address) => {
  try {
    const apiKey = 'AIzaSyAqtfYnnq-Htf2L2Cp-9TGLrUeOrUuretA';
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    const response = await axios.get(apiUrl);

    if (response.data.status === 'OK') {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error('No se pudieron obtener las coordenadas.');
    }
  } catch (error) {
    throw new Error('Error al obtener las coordenadas.');
  }
};

export { getCoordinates };
