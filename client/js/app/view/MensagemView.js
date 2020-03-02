class MensagemView extends View {
	
	_template(mensagemModel) {
		return mensagemModel.texto ? `<p class="alert alert-info">${mensagemModel.texto}</p>` : ''
	}
	
}