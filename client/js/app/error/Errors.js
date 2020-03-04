class ClasseAbstrataError extends Error {
	constructor(classe, mensagem) {
		mensagem = ClasseAbstrataError.formatarMensagem(classe, mensagem)
		super(mensagem)
		this.name = "ClasseAbstrataError"
	}
	
	static formatarMensagem(classe, mensagem) {
		return classe
		       ? mensagem
		         ? `${classe}: ${mensagem}`
		         : `Classe "${classe}" não pode ser instanciada`
		       : mensagem
		         ? mensagem
		         : `Classe abstrata não pode ser instanciada`
	}
}

class MetodoAbstradoError extends Error {
	constructor(metodo, mensagem) {
		mensagem = MetodoAbstradoError.formatarMensagem(metodo, mensagem)
		super(mensagem)
		this.name = "MetodoAbstradoError"
	}
	
	static formatarMensagem(metodo, mensagem) {
		return metodo
		       ? mensagem
		         ? `${metodo}: ${mensagem}`
		         : `Método "${metodo}" deve ser implementado por instâncias da classe`
		       : mensagem
		         ? mensagem
		         : `Métodos abstratos devem ser implementados`
	}
}