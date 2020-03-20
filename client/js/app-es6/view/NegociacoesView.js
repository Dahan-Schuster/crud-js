import {View}           from "./View.js"
import {NegociacaoList} from "../model/Negociacao/NegociacaoList.js"
import {DateHelper}     from "../helpers/DateHelper.js"
import {instanciaAtual} from "../controller/NegociacaoController.js"

export class NegociacoesView extends View {
	
	constructor(elemento) {
		super(elemento)
		elemento.addEventListener('click', function (event) {
			if (event.target.nodeName === 'TH') {
				instanciaAtual().ordenarLista(event.target.dataset.orderBy)
			}
		})
	}
	
	_template(negociacaoListModel = new NegociacaoList()) {
		let orderBy = negociacaoListModel.ordenarPor
		let asc = negociacaoListModel.ordenarAsc
		return `<table class="table table-hover table-bordered">
     				<thead>
						<tr class="order-table ${orderBy} ${asc ? 'asc' : 'desc'}">
							<th data-order-by="data" class="data"">
								DATA
							</th>
					        <th data-order-by="quantidade" class="qte"">
					        	QUANTIDADE
					        </th>
					        <th data-order-by="valor" class="valor"">
					        	VALOR
					        </th>
					        <th data-order-by="volume" class="volume"">
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
								`,
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
