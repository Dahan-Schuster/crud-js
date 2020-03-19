class NegociacoesView extends View {
	
	_template(negociacaoListModel = new NegociacaoList()) {
		let orderBy = negociacaoListModel.ordenarPor
		let asc = negociacaoListModel.ordenarAsc
		return `<table class="table table-hover table-bordered">
     				<thead>
						<tr class="order-table ${orderBy} ${asc ? 'asc' : 'desc'}">
							<th class="data" onclick="negociacaoController.ordenarLista('data')">
								DATA
							</th>
					        <th class="qte" onclick="negociacaoController.ordenarLista('quantidade')">
					        	QUANTIDADE
					        </th>
					        <th class="valor" onclick="negociacaoController.ordenarLista('valor')">
					        	VALOR
					        </th>
					        <th class="volume" onclick="negociacaoController.ordenarLista('volume')">
					        	VOLUME
					        </th>
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
