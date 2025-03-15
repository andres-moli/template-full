"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSuscription = exports.TypeMessage = void 0;
var TypeMessage;
(function (TypeMessage) {
    TypeMessage["Progress"] = "Progress";
    TypeMessage["Notification"] = "Notification";
})(TypeMessage || (exports.TypeMessage = TypeMessage = {}));
var TypeSuscription;
(function (TypeSuscription) {
    TypeSuscription["startProcess"] = "startProcess";
    TypeSuscription["endProcess"] = "endProcess";
    TypeSuscription["common"] = "common";
    TypeSuscription["forceEndProcess"] = "forceEndProcess";
    TypeSuscription["error"] = "error";
    TypeSuscription["pause"] = "pause";
})(TypeSuscription || (exports.TypeSuscription = TypeSuscription = {}));
//# sourceMappingURL=type-suscription.enum.js.map