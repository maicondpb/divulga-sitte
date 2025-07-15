// Arquivo: /api/buscar-usuario.js (VERSÃO FINAL COM IMPORT/EXPORT)

// ANTES: const axios = require('axios');
import axios from 'axios'; // DEPOIS: Usando o import moderno

// ANTES: module.exports = async (request, response) => { ... }
export default async function handler(request, response) {
  const { username } = request.query;

  if (!username) {
    return response.status(400).json({ error: 'O nome de usuário é obrigatório' });
  }

  const rapidApiKey = process.env.RAPIDAPI_KEY;

  if (!rapidApiKey) {
    return response.status(500).json({ error: 'Chave da API não configurada no servidor.' });
  }

  const options = {
    method: 'GET',
    url: 'https://tiktok-api23.p.rapidapi.com/user-info',
    params: { username: username },
    headers: {
      'x-rapidapi-key': rapidApiKey,
      'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
    }
  };

  try {
    const apiResponse = await axios.request(options);
    
    const data = apiResponse.data;
    if (data && data.userInfo && data.userInfo.user) {
        const user_info = data.userInfo.user;
        const user_stats = data.userInfo.stats;
        const perfil_formatado = {
            "user_id": user_info.id,
            "username": user_info.uniqueId,
            "avatar": user_info.avatarMedium,
            "followers": user_stats.followerCount,
            "signature": user_info.signature
        };
        const resposta_final = { "results": [perfil_formatado] };
        return response.status(200).json(resposta_final);
    } else {
        return response.status(404).json({ error: "Perfil não encontrado na resposta da API externa", original_response: data });
    }
    
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Falha ao buscar dados do perfil na API externa' });
  }
}