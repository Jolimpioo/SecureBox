import handle from "./handle-qrcode.js";

async function createQRCode(options) {
  if (!options.link) {
    throw new Error(
      "É necessário informar um link para gerar o QR Code. \n" +
      "Exemplo: securebox qrcode --link https://meusite.com"
    );
  }

  const result = {
    link: options.link,
    type: options.terminal ? 2 : 1,
  };

  await handle(null, result);
}

export default createQRCode;