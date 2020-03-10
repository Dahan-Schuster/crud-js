class NegociacoesView extends View {
	
	_template(negociacaoListModel = new NegociacaoList()) {
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
						${negociacaoListModel.negociacoes.map(
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
								R$ ${negociacaoListModel.getVolumeTotal()}
							</td>
						</tr>
				     </tfoot>
				 </table>`
	}
}
