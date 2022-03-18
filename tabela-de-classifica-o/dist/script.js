var matheus = {nome:"Matheus", vitorias: 5, empates: 3, derrotas: 2, pontos:0}
var pedro = {nome:"Pedro", vitorias: 4, empates: 3, derrotas: 3, pontos:0}
var camila = {nome:"Camila", vitorias: 3, empates: 5, derrotas: 2, pontos:0}
var rodrigo = {nome:"Rodrigo", vitorias: 5, empates: 4, derrotas: 1, pontos:0}

matheus.pontos = calculaPontos(matheus);
pedro.pontos = calculaPontos(pedro);
camila.pontos = calculaPontos(camila);
rodrigo.pontos = calculaPontos(rodrigo);

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas
  return pontos;
  }

var jogadores = [matheus, pedro, camila, rodrigo]

function exibeJogadoresNaTela(jogadores){
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++){
  elemento += "<tr><td>" + jogadores[i].nome + "</td>"
  elemento += "<td>"  + jogadores[i].vitorias + "</td>"
  elemento += "<td>" + jogadores[i].empates + "</td>"
  elemento += "<td>" + jogadores[i].derrotas + "</td>"
  elemento += "<td>" + jogadores[i].pontos + "</td>"
  elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
  elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
  elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
  elemento += "</tr>"
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}