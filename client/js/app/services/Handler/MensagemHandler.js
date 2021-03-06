System.register(["./Handler.js", "../../helpers/Container/CD.js"], function (_export, _context) {
  "use strict";

  var Handler, CD, MensagemHandler;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_HandlerJs) {
      Handler = _HandlerJs.Handler;
    }, function (_helpersContainerCDJs) {
      CD = _helpersContainerCDJs.CD;
    }],
    execute: function () {
      _export("MensagemHandler", MensagemHandler = /*#__PURE__*/function (_Handler) {
        _inherits(MensagemHandler, _Handler);

        function MensagemHandler() {
          _classCallCheck(this, MensagemHandler);

          return _possibleConstructorReturn(this, _getPrototypeOf(MensagemHandler).call(this, "info", "erro", "aviso", "sucesso"));
        }

        _createClass(MensagemHandler, [{
          key: "_interceptarMetodo",
          value: function _interceptarMetodo(mensagemModel, propriedade, argumentos) {
            _get(_getPrototypeOf(MensagemHandler.prototype), "_interceptarMetodo", this).call(this, mensagemModel, propriedade, argumentos);

            CD.mensagemView.update(mensagemModel);
          }
        }]);

        return MensagemHandler;
      }(Handler));
    }
  };
});
//# sourceMappingURL=MensagemHandler.js.map