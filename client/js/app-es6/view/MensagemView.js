import {View}     from "./View.js"
import {Mensagem} from "../model/Mensagem/Mensagem.js"

export class MensagemView extends View {
	
	_template(mensagemModel = new Mensagem()) {
		return mensagemModel.texto ? `<p class="alert alert-${mensagemModel.tipo}">${mensagemModel.texto}</p>` : ''
	}
	
}