import {AjaxHelper} from "../../helpers/AjaxHelper.js"

export class NegociacaoAjax {
	
	enviarDados(negociacao, callbackFn, antesDeEnviar) {
		AjaxHelper.ajax({
			url: '/negociacoes',
			metodo: 'POST',
			dados: negociacao,
			tipoDados: "application/json",
			antesDeEnviar,
			sucesso: resposta => callbackFn(null, resposta),
			erro: erro => {
				console.log(erro)
				callbackFn('Não foi possível salvar a negociação :(')
			}
		})
	}
	
	importarNegociacoes(periodo = 'semana', antesDeEnviar = null) {
		return new Promise((resolve, reject) => {
			AjaxHelper.ajax({
				url: `/negociacoes/${periodo}`,
				metodo: 'GET',
				tipoRetorno: 'json',
				antesDeEnviar,
				sucesso: resposta => resolve(resposta),
				erro: erro => reject('Não foi possível obter as negociações :(')
			})
		})
	}
}