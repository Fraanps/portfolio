function atualizaPerfil(dadosPerfil){

  const foto = document.getElementById("foto.perfil");
  foto.src = dadosPerfil.foto;
  foto.alt = dadosPerfil.nome

  const nome = document.getElementById("nome");

}