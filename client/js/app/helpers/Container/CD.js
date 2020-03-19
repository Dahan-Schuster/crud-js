"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CD = function CD() {
  _classCallCheck(this, CD);
};

_defineProperty(CD, "$", document.querySelector.bind(document));

_defineProperty(CD, "negociacoesView", new NegociacoesView(CD.$('#negociacoes-view')));

_defineProperty(CD, "mensagemView", new MensagemView(CD.$('#mensagem-view')));

_defineProperty(CD, "formNegociacoes", CD.$('.form'));

_defineProperty(CD, "inputQuantidade", CD.$('#quantidade'));

_defineProperty(CD, "inputData", CD.$('#data'));

_defineProperty(CD, "inputValor", CD.$('#valor'));
//# sourceMappingURL=CD.js.map