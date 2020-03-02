class CD {
	
	/**
	 * bind: informa que, ao passar o método para outro contexto, deve
	 * manter o objeto enviado por parâmetro como referência do 'this'
	 * Assim, sempre que $ for chamado e, dentro de si, this for
	 * usado, document será referenciado ao invés de $
	 * Ex.:
	 * const obj = { metodo() { console.log(this) } }
	 * const a   = obj.metodo
	 * const b   = obj.metodo.bind(obj)
	 * a()      # Window
	 * b()      # obj
	 */
	static $ = document.querySelector.bind(document)
	
	static negociacaoListModel = new NegociacaoList()
	static negociacoesView = new NegociacoesView(CD.$('#negociacoes-view'))
	
	static mensagemModel = new Mensagem()
	static mensagemView = new MensagemView(CD.$('#mensagem-view'))
	
	static formNegociacoes = CD.$('.form')
	static inputQuantidade = CD.$('#quantidade')
	static inputData = CD.$('#data')
	static inputValor = CD.$('#valor')
}