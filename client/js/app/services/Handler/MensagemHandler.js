class MensagemHandler extends Handler {
	
	constructor() {
		super("texto")
	}
	
	_interceptarSetPropriedade(mensagemModel, propriedade, valor) {
		mensagemModel[propriedade] = valor
		CD.mensagemView.update(mensagemModel)
	}
	
}