import {instanciaAtual} from "./controller/NegociacaoController.js"
import {CD}                   from "./helpers/Container/CD.js"

let negociacaoController = instanciaAtual()

CD.formNegociacoes.onsubmit = e => negociacaoController.adicionar(e)
CD.btnApagar.onclick = e => negociacaoController.apagarLista(e)
CD.btnEnviarParaServidor.onclick = e => negociacaoController.enviarNegociacaoAjax(e)