class MensagemView extends View {
	
	_template(mensagemModel = new Mensagem()) {
		return mensagemModel.texto ? `<p class="alert alert-info">${mensagemModel.texto}</p>` : ''
	}
	
}