"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JulepApiTimeoutError = exports.JulepApiError = exports.JulepApiEnvironment = exports.JulepApiClient = exports.JulepApi = void 0;
exports.JulepApi = __importStar(require("./api"));
var Client_1 = require("./Client");
Object.defineProperty(exports, "JulepApiClient", { enumerable: true, get: function () { return Client_1.JulepApiClient; } });
var environments_1 = require("./environments");
Object.defineProperty(exports, "JulepApiEnvironment", { enumerable: true, get: function () { return environments_1.JulepApiEnvironment; } });
var errors_1 = require("./errors");
Object.defineProperty(exports, "JulepApiError", { enumerable: true, get: function () { return errors_1.JulepApiError; } });
Object.defineProperty(exports, "JulepApiTimeoutError", { enumerable: true, get: function () { return errors_1.JulepApiTimeoutError; } });
