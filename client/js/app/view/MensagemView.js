class MensagemView extends View {
	
	_template(mensagemModel) {
		return `<p class="alert alert-info">${mensagemModel.texto}</p>`
	}
	
}