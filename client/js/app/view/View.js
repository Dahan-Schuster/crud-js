System.register(["../error/Errors.js"], function (_export, _context) {
  "use strict";

  var ClasseAbstrataError, MetodoAbstradoError, View;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_errorErrorsJs) {
      ClasseAbstrataError = _errorErrorsJs.ClasseAbstrataError;
      MetodoAbstradoError = _errorErrorsJs.MetodoAbstradoError;
    }],
    execute: function () {
      _export("View", View = /*#__PURE__*/function () {
        function View(elemento) {
          _classCallCheck(this, View);

          // Validar que o construtor não é da classe View
          // (uma classe filha, mesmo que não implemente um construtor
          // explicitamente, terá um construtor vazio)
          if (this.constructor === View) {
            throw new ClasseAbstrataError('View');
          } // Se o código não lançou nenhum erro até agora, então
          // a classe é uma herança de View e implementa os métodos
          // necessários. Logo podemos continuar :)


          this._elemento = elemento;
        }

        _createClass(View, [{
          key: "_template",
          value: function _template() {
            throw new MetodoAbstradoError('View._template');
          }
        }, {
          key: "update",
          value: function update(model) {
            this._elemento.innerHTML = this._template(model);
          }
        }]);

        return View;
      }());
    }
  };
});
//# sourceMappingURL=View.js.map