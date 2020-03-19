class AjaxHelper {
	
	static ajax = handler => {
		if (!handler.url) {
			return
		}
		
		this._configurarHandler(handler)
		const xhr = typeof XMLHttpRequest != 'undefined'
		            ? new XMLHttpRequest()
		            : new ActiveXObject('Microsoft.XMLHTTP')
		
		xhr.onload = event => this.onXhrLoad(event, xhr, handler)
		xhr.onreadystatechange = event => this.onXhrStateChange(event, xhr, handler)
		xhr.responseType = handler.tipoRetorno
		
		handler.antesDeEnviar()
		
		xhr.open(handler.metodo, handler.url, handler.assicrono)
		xhr.setRequestHeader("Content-type", handler.tipoDados)
		setTimeout(() => xhr.send(handler.dados), 1000) // simulando um delay de requisição...
	}
	
	static _configurarHandler(handler) {
		handler.metodo = handler.metodo || 'GET'
		handler.dados = handler.dados || undefined
		handler.assicrono = handler.assicrono || true
		handler.tipoRetorno = handler.tipoRetorno || "text"
		handler.tipoDados = handler.tipoDados || "*/*"
		handler.sucesso = this.validarFuncaoHandler(handler.sucesso)
		handler.erro = this.validarFuncaoHandler(handler.erro)
		handler.antesDeEnviar = this.validarFuncaoHandler(handler.antesDeEnviar)
		handler.finalizado = this.validarFuncaoHandler(handler.finalizado)
	}
	
	static validarFuncaoHandler(funcao) {
		return (funcao !== undefined && typeof (funcao) === 'function')
		       ? funcao
		       : new Function()
	}
	
	static onXhrLoad = (event, xhr, handler) => {
		if (200 <= xhr.status && xhr.status < 300) {     // 2xx : ok
			handler.sucesso(xhr.response)
		} else if (xhr.status >= 400) { // 4xx : erro no cliente | 5xx : erro no servidor
			handler.erro(xhr.response)
		}
	}
	
	static onXhrStateChange(event, xhr, handler) {
		if (xhr.readyState === 4) { handler.finalizado(event) }
	}
}