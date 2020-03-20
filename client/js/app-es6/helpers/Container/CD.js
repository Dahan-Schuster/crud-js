import {NegociacoesView} from "../../view/NegociacoesView.js"
import {MensagemView}    from "../../view/MensagemView.js"

export class CD {
	
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
	
	static negociacoesView = new NegociacoesView(CD.$('#negociacoes-view'))
	static mensagemView = new MensagemView(CD.$('#mensagem-view'))
	
	static formNegociacoes = CD.$('.form')
	static btnApagar = CD.$('#btn_apagar')
	static btnEnviarParaServidor = CD.$('#btn_enviar_para_servidor')
	static inputQuantidade = CD.$('#quantidade')
	static inputData = CD.$('#data')
	static inputValor = CD.$('#valor')
}