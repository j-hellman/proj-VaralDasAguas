
function handleFile() {
  const nomeColaborador = document.getElementById('tNome');
  const nomeFoto = document.getElementById('tNomeFoto');
  const localFoto = document.getElementById('tLocal');
  const dataFoto = document.getElementById('tData');
  const foto = document.getElementById('tFoto');

  const lista = [{
    NomeColaborador: nomeColaborador,
    NomeFoto: nomeFoto,
    LocalFoto: localFoto,
    DataFoto: dataFoto,
    Foto: foto
  }];

  console.log(lista);
}