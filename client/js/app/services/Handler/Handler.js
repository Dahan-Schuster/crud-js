"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Handler = /*#__PURE__*/function () {
  function Handler() {
    _classCallCheck(this, Handler);

    for (var _len = arguments.length, propriedadesRastreadas = new Array(_len), _key = 0; _key < _len; _key++) {
      propriedadesRastreadas[_key] = arguments[_key];
    }

    this._propriedadesRastreadas = propriedadesRastreadas;

    if (this._isRastreado(Handler.construtor)) {
      this._interceptarConstrutor();
    }

    Object.freeze(this);
  }

  _createClass(Handler, [{
    key: "_interceptarConstrutor",
    value: function _interceptarConstrutor() {
      throw new MetodoAbstradoError('_interceptarConstrutor', 'Interceptação de construtor deve ser implementada por uma classe filha');
    }
  }, {
    key: "_isRastreado",
    value: function _isRastreado(propriedade) {
      return this._propriedadesRastreadas.includes(propriedade);
    }
  }, {
    key: "set",
    value: function set(model, propriedade, valor) {
      if (this._isRastreado(propriedade)) {
        this._interceptarSetPropriedade(model, propriedade, valor);
      }

      return true;
    }
  }, {
    key: "get",
    value: function get(model, propriedade) {
      var self = this;

      if (this._isRastreado(propriedade)) {
        if (Handler._isMetodo(model, propriedade)) {
          return function () {
            self._interceptarMetodo(model, propriedade, arguments);
          };
        }

        return this._interceptarGetPropriedade(model, propriedade);
      }

      return model[propriedade];
    }
  }, {
    key: "_interceptarMetodo",
    value: function _interceptarMetodo(model, propriedade, argumentos) {
      model[propriedade].apply(model, _toConsumableArray(argumentos));
    }
  }, {
    key: "_interceptarSetPropriedade",
    value: function _interceptarSetPropriedade(model, propriedade, valor) {
      model[propriedade] = valor;
    }
  }, {
    key: "_interceptarGetPropriedade",
    value: function _interceptarGetPropriedade(model, propriedade) {
      return model[propriedade];
    }
  }, {
    key: "propriedadesRastreadas",
    get: function get() {
      return _construct(Array, _toConsumableArray(this._propriedadesRastreadas));
    }
  }], [{
    key: "_isMetodo",
    value: function _isMetodo(model, propriedade) {
      return _typeof(model[propriedade] === (typeof Function === "undefined" ? "undefined" : _typeof(Function)));
    }
  }]);

  return Handler;
}();

_defineProperty(Handler, "construtor", 'constructor');
//# sourceMappingURL=Handler.js.map