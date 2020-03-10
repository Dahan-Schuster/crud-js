class NegociacaoAjax {
	
	importarNegociacoesDaSemana(callbackFn) {
		let xhr = new XMLHttpRequest()
		xhr.open('GET', 'negociacoes/semana')
		xhr.onreadystatechange = () => {
			/**
			 * 0: requisição ainda não iniciada.
			 * 1: conexão com o servidor estabelecida.
			 * 2: requisição recebida.
			 * 3: processando requisição.
			 * 4: requisição concluída e a resposta esta pronta.
			 */
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					this._tratarResposta(JSON.parse(xhr.responseText), callbackFn)
				} else {
					console.log(xhr.responseText)
					callbackFn('Não foi possível obter as negociações :(')
				}
			}
		}
		xhr.send()
	}
	
	_tratarResposta = (negociacoes, callbackFn) => {
		let negociacoesModel = negociacoes.map(
			negociacao => new Negociacao({...negociacao, data: new Date(negociacao.data)}),
		)
		
		callbackFn(null, negociacoesModel)
	}
}