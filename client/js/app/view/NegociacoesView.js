System.register(["./View.js", "../model/Negociacao/NegociacaoList.js", "../helpers/DateHelper.js", "../controller/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var View, NegociacaoList, DateHelper, instanciaAtual, NegociacoesView;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_ViewJs) {
      View = _ViewJs.View;
    }, function (_modelNegociacaoNegociacaoListJs) {
      NegociacaoList = _modelNegociacaoNegociacaoListJs.NegociacaoList;
    }, function (_helpersDateHelperJs) {
      DateHelper = _helpersDateHelperJs.DateHelper;
    }, function (_controllerNegociacaoControllerJs) {
      instanciaAtual = _controllerNegociacaoControllerJs.instanciaAtual;
    }],
    execute: function () {
      _export("NegociacoesView", NegociacoesView = /*#__PURE__*/function (_View) {
        _inherits(NegociacoesView, _View);

        function NegociacoesView(elemento) {
          var _this;

          _classCallCheck(this, NegociacoesView);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(NegociacoesView).call(this, elemento));
          elemento.addEventListener('click', function (event) {
            if (event.target.nodeName === 'TH') {
              instanciaAtual().ordenarLista(event.target.dataset.orderBy);
            }
          });
          return _this;
        }

        _createClass(NegociacoesView, [{
          key: "_template",
          value: function _template() {
            var negociacaoListModel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new NegociacaoList();
            var orderBy = negociacaoListModel.ordenarPor;
            var asc = negociacaoListModel.ordenarAsc;
            return "<table class=\"table table-hover table-bordered\">\n     \t\t\t\t<thead>\n\t\t\t\t\t\t<tr class=\"order-table ".concat(orderBy, " ").concat(asc ? 'asc' : 'desc', "\">\n\t\t\t\t\t\t\t<th data-order-by=\"data\" class=\"data\"\">\n\t\t\t\t\t\t\t\tDATA\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t        <th data-order-by=\"quantidade\" class=\"qte\"\">\n\t\t\t\t\t        \tQUANTIDADE\n\t\t\t\t\t        </th>\n\t\t\t\t\t        <th data-order-by=\"valor\" class=\"valor\"\">\n\t\t\t\t\t        \tVALOR\n\t\t\t\t\t        </th>\n\t\t\t\t\t        <th data-order-by=\"volume\" class=\"volume\"\">\n\t\t\t\t\t        \tVOLUME\n\t\t\t\t\t        </th>\n    \t\t\t\t\t</tr>\n     \t\t\t\t</thead>\n\t\t\t\t     <tbody>\n\t\t\t\t\t\t").concat(negociacaoListModel.negociacoes.map(function (negociacao) {
              return "\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>".concat(DateHelper.dataParaTexto(negociacao.data), "</td>\n\t\t\t\t\t\t\t\t\t\t<td>").concat(negociacao.quantidade, "</td>\n\t\t\t\t\t\t\t\t\t\t<td>R$ ").concat(negociacao.valor.toFixed(2), "</td>\n\t\t\t\t\t\t\t\t\t\t<td>R$ ").concat(negociacao.volume.toFixed(2), "</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t");
            }).join(''), "\n\t\t\t\t     </tbody>\n\t\t\t\t     <tfoot>\n\t\t\t\t     \t<tr>\n\t\t\t\t\t        <th colspan=\"3\">Total</th>\n\t\t\t\t\t        <td>\n\t\t\t\t\t\t\t\tR$ ").concat(negociacaoListModel.getVolumeTotal(), "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t     </tfoot>\n\t\t\t\t </table>");
          }
        }]);

        return NegociacoesView;
      }(View));
    }
  };
});
//# sourceMappingURL=NegociacoesView.js.map