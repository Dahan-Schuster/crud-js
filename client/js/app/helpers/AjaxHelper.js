"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AjaxHelper = /*#__PURE__*/function () {
  function AjaxHelper() {
    _classCallCheck(this, AjaxHelper);
  }

  _createClass(AjaxHelper, null, [{
    key: "_configurarHandler",
    value: function _configurarHandler(handler) {
      handler.metodo = handler.metodo || 'GET';
      handler.dados = handler.dados || undefined;
      handler.assicrono = handler.assicrono || true;
      handler.tipoRetorno = handler.tipoRetorno || "text";
      handler.tipoDados = handler.tipoDados || "*/*";
      handler.sucesso = this.validarFuncaoHandler(handler.sucesso);
      handler.erro = this.validarFuncaoHandler(handler.erro);
      handler.antesDeEnviar = this.validarFuncaoHandler(handler.antesDeEnviar);
      handler.finalizado = this.validarFuncaoHandler(handler.finalizado);
    }
  }, {
    key: "validarFuncaoHandler",
    value: function validarFuncaoHandler(funcao) {
      return funcao !== undefined && typeof funcao === 'function' ? funcao : new Function();
    }
  }, {
    key: "onXhrStateChange",
    value: function onXhrStateChange(event, xhr, handler) {
      if (xhr.readyState === 4) {
        handler.finalizado(event);
      }
    }
  }]);

  return AjaxHelper;
}();

_defineProperty(AjaxHelper, "ajax", function (handler) {
  if (!handler.url) {
    return;
  }

  AjaxHelper._configurarHandler(handler);

  var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  xhr.onload = function (event) {
    return AjaxHelper.onXhrLoad(event, xhr, handler);
  };

  xhr.onreadystatechange = function (event) {
    return AjaxHelper.onXhrStateChange(event, xhr, handler);
  };

  xhr.responseType = handler.tipoRetorno;
  handler.antesDeEnviar();
  xhr.open(handler.metodo, handler.url, handler.assicrono);
  xhr.setRequestHeader("Content-type", handler.tipoDados);
  setTimeout(function () {
    return xhr.send(handler.dados);
  }, 1000); // simulando um delay de requisição...
});

_defineProperty(AjaxHelper, "onXhrLoad", function (event, xhr, handler) {
  if (200 <= xhr.status && xhr.status < 300) {
    // 2xx : ok
    handler.sucesso(xhr.response);
  } else if (xhr.status >= 400) {
    // 4xx : erro no cliente | 5xx : erro no servidor
    handler.erro(xhr.response);
  }
});
//# sourceMappingURL=AjaxHelper.js.map