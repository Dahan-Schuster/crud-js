export class DateHelper {
	
	constructor() {
		throw new Error('Classe DateHelper deve ser acessada estaticamente')
	}
	
	static dataParaTexto = data => `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
	
	static textoParaData = texto =>{
		if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error('Texto deve estar no formato yyyy-mm-dd')
		return new Date(...texto.split('-').map(
			(value, i) => value - (i % 2),
		))
	}
	
}