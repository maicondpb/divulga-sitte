// Arquivo: /api/buscar-usuario.js

const axios = require('axios');

// O handler da Vercel recebe os objetos request e response
module.exports = async (request, response) => {
  // Pega o username da URL, ex: /api/buscar-usuario?username=therock
  const { username } = request.query;

  if (!username) {
    return response.status(400).json({ error: 'O nome de usuário é obrigatório' });
  }

  // Pega a chave da API das "Environment Variables" da Vercel (mais seguro)
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
    
    // Formata a resposta para o front-end
    const data = apiResponse.data;
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
    
    // Envia a resposta de sucesso
    return response.status(200).json(resposta_final);
    
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Falha ao buscar dados do perfil na API externa' });
  }
};