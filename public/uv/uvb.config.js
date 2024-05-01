// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uvb.handler.js",
  client: "/uv/uvb.client.js",
  bundle: "/uv/uvb.bundle.js",
  config: "/uv/uvb.config.js",
  sw: "/uv/uvb.sw.js",
};
