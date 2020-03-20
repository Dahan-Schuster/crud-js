import {Handler} from "./Handler.js"
import {CD}      from "../../helpers/Container/CD.js"

export class MensagemHandler extends Handler {
	
	constructor() {
		super("info", "erro", "aviso", "sucesso")
	}
	
	_interceptarMetodo(mensagemModel, propriedade, argumentos) {
		super._interceptarMetodo(mensagemModel, propriedade, argumentos)
		CD.mensagemView.update(mensagemModel)
	}
	
}