System.register([], function (_export, _context) {
  "use strict";

  var Mensagem;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("Mensagem", Mensagem = /*#__PURE__*/function () {
        function Mensagem() {
          var texto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

          _classCallCheck(this, Mensagem);

          this._texto = texto;
          this._tipo = 'info';
        }

        _createClass(Mensagem, [{
          key: "erro",
          value: function erro(texto) {
            this._tipo = 'danger';
            this._texto = texto;
          }
        }, {
          key: "info",
          value: function info(texto) {
            this._tipo = 'info';
            this._texto = texto;
          }
        }, {
          key: "sucesso",
          value: function sucesso(texto) {
            this._tipo = 'success';
            this._texto = texto;
          }
        }, {
          key: "aviso",
          value: function aviso(texto) {
            this._tipo = 'warning';
            this._texto = texto;
          }
        }, {
          key: "tipo",
          get: function get() {
            return this._tipo;
          }
        }, {
          key: "texto",
          get: function get() {
            return this._texto;
          }
        }]);

        return Mensagem;
      }());
    }
  };
});
//# sourceMappingURL=Mensagem.js.map