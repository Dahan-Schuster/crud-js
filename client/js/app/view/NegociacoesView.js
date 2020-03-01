class NegociacoesView {
	
	constructor(elemento) {
		this._elemento = elemento
	}
	
	update(negociacaoList) {
		this._elemento.innerHTML = this._template(negociacaoList)
	}
	
	_template(negociacaoList) {
		return `<table class="table table-hover table-bordered">
     				<thead>
						<tr>
							<th>DATA</th>
							<th>QUANTIDADE</th>
							<th>VALOR</th>
							<th>VOLUME</th>
    					</tr>
     				</thead>
				     <tbody>
						${negociacaoList.negociacoes.map(
								negociacao => `
									<tr>
										<td>${DateHelper.dataParaTexto(negociacao.data)}</td>
										<td>${negociacao.quantidade}</td>
										<td>R$ ${negociacao.valor.toFixed(2)}</td>
										<td>R$ ${negociacao.volume.toFixed(2)}</td>
									</tr>
								`
						).join('')}
				     </tbody>
				     <tfoot>
				     	<tr>
					        <th colspan="3">Total</th>
					        <td>
								R$ ${negociacaoList.negociacoes.reduce(
									(total, negociacao) => (total + negociacao.volume)
								, 0).toFixed(2)}
							</td>
						</tr>
				     </tfoot>
				 </table>`
	}
}