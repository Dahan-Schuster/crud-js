System.register([], function (_export, _context) {
  "use strict";

  var ClasseAbstrataError, MetodoAbstradoError;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  return {
    setters: [],
    execute: function () {
      _export("ClasseAbstrataError", ClasseAbstrataError = /*#__PURE__*/function (_Error) {
        _inherits(ClasseAbstrataError, _Error);

        function ClasseAbstrataError(classe, mensagem) {
          var _this;

          _classCallCheck(this, ClasseAbstrataError);

          mensagem = ClasseAbstrataError.formatarMensagem(classe, mensagem);
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ClasseAbstrataError).call(this, mensagem));
          _this.name = "ClasseAbstrataError";
          return _this;
        }

        _createClass(ClasseAbstrataError, null, [{
          key: "formatarMensagem",
          value: function formatarMensagem(classe, mensagem) {
            return classe ? mensagem ? "".concat(classe, ": ").concat(mensagem) : "Classe \"".concat(classe, "\" n\xE3o pode ser instanciada") : mensagem ? mensagem : "Classe abstrata n\xE3o pode ser instanciada";
          }
        }]);

        return ClasseAbstrataError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      _export("MetodoAbstradoError", MetodoAbstradoError = /*#__PURE__*/function (_Error2) {
        _inherits(MetodoAbstradoError, _Error2);

        function MetodoAbstradoError(metodo, mensagem) {
          var _this2;

          _classCallCheck(this, MetodoAbstradoError);

          mensagem = MetodoAbstradoError.formatarMensagem(metodo, mensagem);
          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MetodoAbstradoError).call(this, mensagem));
          _this2.name = "MetodoAbstradoError";
          return _this2;
        }

        _createClass(MetodoAbstradoError, null, [{
          key: "formatarMensagem",
          value: function formatarMensagem(metodo, mensagem) {
            return metodo ? mensagem ? "".concat(metodo, ": ").concat(mensagem) : "M\xE9todo \"".concat(metodo, "\" deve ser implementado por inst\xE2ncias da classe") : mensagem ? mensagem : "M\xE9todos abstratos devem ser implementados";
          }
        }]);

        return MetodoAbstradoError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
    }
  };
});
//# sourceMappingURL=Errors.js.map