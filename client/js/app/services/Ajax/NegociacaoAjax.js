class NegociacaoAjax {
	
	importarNegociacoesDaSemana(callbackFn, antesDeEnviar) {
		AjaxHelper.ajax({
			url: '/negociacoes/semana',
			metodo: 'GET',
			tipoRetorno: 'json',
			antesDeEnviar,
			sucesso: resposta => this._tratarResposta(resposta, callbackFn),
			erro: erro => {
				console.log(erro)
				callbackFn('Não foi possível obter as negociações :(')
			}
		})
	}
	
	_tratarResposta = (negociacoes, callbackFn) => {
		let negociacoesModel = negociacoes.map(
			negociacao => new Negociacao({...negociacao, data: new Date(negociacao.data)}),
		)
		
		callbackFn(null, negociacoesModel)
	}
}