"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Modal.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  var closeModal = _ref.closeModal,
    message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_background"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal_closeButton",
    onClick: closeModal
  }, "\u2716"), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal_body"
  }, message)));
}
var _default = Modal;
exports.default = _default;