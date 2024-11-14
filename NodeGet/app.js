const axios = require('axios');

const url = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';

async function obtenerRegistros() {
  try {
    const response = await axios.get(url);

    console.log('sucess:', response.data);
  } catch (error) {
    console.error('error:', error);
  }
}

obtenerRegistros();
