System.register(["./Negociacao.js"], function (_export, _context) {
  "use strict";

  var Negociacao, NegociacaoList;

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

  return {
    setters: [function (_NegociacaoJs) {
      Negociacao = _NegociacaoJs.Negociacao;
    }],
    execute: function () {
      _export("NegociacaoList", NegociacaoList = /*#__PURE__*/function () {
        function NegociacaoList() {
          var _this = this;

          _classCallCheck(this, NegociacaoList);

          _defineProperty(this, "getVolumeTotal", function () {
            return _this._negociacoes.reduce(function (total, negociacao) {
              return total + negociacao.volume;
            }, 0).toFixed(2);
          });

          this._negociacoes = [];
          this.ordenarPor = '';
          this.ordenarAsc = true;
        }

        _createClass(NegociacaoList, [{
          key: "adicionar",
          value: function adicionar(negociacao) {
            if (!(negociacao instanceof Negociacao)) throw new Error('Apenas instâncias de Negociacao são permitidas');

            this._negociacoes.push(negociacao);
          }
        }, {
          key: "esvaziar",
          value: function esvaziar() {
            this._negociacoes = [];
          }
        }, {
          key: "ordenarLista",
          value: function ordenarLista(campo) {
            var _this2 = this;

            this.ordenarAsc = this.ordenarPor === campo ? !this.ordenarAsc : true;
            this.ordenarPor = campo;

            this._negociacoes.sort(function (neg1, neg2) {
              return _this2.ordenarAsc ? neg1[campo] - neg2[campo] : neg2[campo] - neg1[campo];
            });
          }
        }, {
          key: "negociacoes",
          get: function get() {
            return _construct(Array, _toConsumableArray(this._negociacoes));
          }
        }]);

        return NegociacaoList;
      }());
    }
  };
});
//# sourceMappingURL=NegociacaoList.js.map