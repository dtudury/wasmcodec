const { readFileSync, writeFileSync } = require("fs");
const wabt = require("wabt")();
const path = require("path");
const inputWat = './src/main.wat'
const outputWasm = './out/main.wasm'

const wasmModule = wabt.parseWat(inputWat, readFileSync(inputWat, "utf8"));
const { buffer } = wasmModule.toBinary({ write_debug_names: true });
writeFileSync(outputWasm, new Buffer(buffer));
