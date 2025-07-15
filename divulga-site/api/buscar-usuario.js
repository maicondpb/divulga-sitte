// Arquivo: /api/buscar-usuario.js (VERSÃO FINAL CORRIGIDA)

import axios from 'axios';

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
    // CORREÇÃO 1: O caminho correto da API é /api/user/info
    url: 'https://tiktok-api23.p.rapidapi.com/api/user/info',
    // CORREÇÃO 2: O nome do parâmetro é 'uniqueId', não 'username'
    params: { uniqueId: username },
    headers: {
      'x-rapidapi-key': rapidApiKey,
      'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
    }
  };

  try {
    const apiResponse = await axios.request(options);
    
    // O resto do código que formata a resposta já estava correto.
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
    // Retorna a mensagem de erro que veio do axios para facilitar a depuração
    return response.status(error.response?.status || 500).json({ 
        error: 'Falha ao buscar dados do perfil na API externa', 
        details: error.response?.data || error.message 
    });
  }
}