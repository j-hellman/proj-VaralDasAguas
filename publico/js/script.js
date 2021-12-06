const nomeColaborador = document.getElementById('tNome');
const nomeFoto = document.getElementById('tNomeFoto');
const localFoto = document.getElementById('tLocal');
const dataFoto = document.getElementById('tData');
const foto = document.getElementById('tFoto');

function handleFile() {

  const lista = {
    NomeColaborador: (nomeColaborador.value),
    NomeFoto: (nomeFoto.value),
    LocalFoto: (localFoto.value)
    // DataFoto: (dataFoto.value),
    // Foto: (foto.value)
  };

  console.log(lista);
}