import {Handler} from "./Handler.js"
import {CD}      from "../../helpers/Container/CD.js"

export class NegociacaoListHandler extends Handler {
	
	constructor() {
		super('adicionar', 'esvaziar', 'ordenarLista', Handler.construtor)
	}
	
	_interceptarConstrutor() {
		CD.negociacoesView.update()
	}
	
	_interceptarMetodo(negociacaoListModel, propriedade, argumentos) {
		negociacaoListModel[propriedade](...argumentos)
		CD.negociacoesView.update(negociacaoListModel)
	}
	
}