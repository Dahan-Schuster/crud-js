System.register(["./controller/NegociacaoController.js", "./helpers/Container/CD.js"], function (_export, _context) {
  "use strict";

  var instanciaAtual, CD, negociacaoController;
  return {
    setters: [function (_controllerNegociacaoControllerJs) {
      instanciaAtual = _controllerNegociacaoControllerJs.instanciaAtual;
    }, function (_helpersContainerCDJs) {
      CD = _helpersContainerCDJs.CD;
    }],
    execute: function () {
      negociacaoController = instanciaAtual();

      CD.formNegociacoes.onsubmit = function (e) {
        return negociacaoController.adicionar(e);
      };

      CD.btnApagar.onclick = function (e) {
        return negociacaoController.apagarLista(e);
      };

      CD.btnEnviarParaServidor.onclick = function (e) {
        return negociacaoController.enviarNegociacaoAjax(e);
      };
    }
  };
});
//# sourceMappingURL=boot.js.map