# 🔐 SecureBox CLI

**SecureBox** é um kit de utilidade em linha de comando (CLI) para geração de **senhas seguras** e **QR Codes** diretamente no terminal.  
O projeto foi desenvolvido em **Node.js (ESM)** utilizando as bibliotecas [Commander](https://www.npmjs.com/package/commander), [Chalk](https://www.npmjs.com/package/chalk) e [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal).  

---

## 🚀 Funcionalidades

- Gerar **senhas seguras** com opções personalizadas:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Símbolos especiais
  - Definição do comprimento da senha
- Gerar **QR Codes**:
  - QR Code normal
  - QR Code compacto para terminal
- Configurações por **variáveis de ambiente** (`.env`)
- Feedback visual no terminal com **cores** e **validações**

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/securebox.git
cd securebox
npm install
```

---

## ⚙️ Configuração

Você pode configurar valores padrão no arquivo `.env`:

```env
UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=false
PASSWORD_LENGTH=8
```

Essas variáveis definem o comportamento inicial da geração de senhas.  
Os valores podem ser sobrescritos passando **flags** via CLI.

---

## ▶️ Uso

### Rodar diretamente com `npm`:

```bash
npm start -- <comando> [opções]
```

### Ou instalar globalmente:

```bash
npm link
```

E então rodar:

```bash
securebox <comando> [opções]
```

---

## 🔑 Comandos

### 📌 Geração de Senha

```bash
securebox password --length <n> [opções]
```

**Opções:**

- `-L, --length <number>` → comprimento da senha (mínimo: 6)
- `-u, --uppercase` → incluir letras maiúsculas
- `-l, --lowercase` → incluir letras minúsculas
- `-n, --numbers` → incluir números
- `-s, --symbols` → incluir caracteres especiais

**Exemplo:**

```bash
securebox password --length 12 --uppercase --numbers --symbols
```

---

### 📌 Geração de QR Code

```bash
securebox qrcode --link <url> [opções]
```

**Opções:**

- `-l, --link <string>` → link ou texto a ser convertido em QR Code
- `-t, --terminal` → gerar QR Code compacto para terminal

**Exemplo:**

```bash
securebox qrcode --link https://exemplo.com --terminal
```

---

## 🧪 Testes

O projeto utiliza **Jest** para testes unitários.  
Para rodar os testes:

```bash
npm test
```

---

## 🧹 Lint

Para formatar e corrigir automaticamente problemas de estilo:

```bash
npm run lint
```

---

## 📂 Estrutura do Projeto

```
src/
 ├─ index.js                # Entrada principal (CLI)
 ├─ services/
 │   ├─ password/           # Lógica de senhas
 │   └─ qr-code/            # Lógica de QR Codes
 ├─ utils/                  # Funções auxiliares
configs/
 └─ defaults.js             # Configurações padrão
```

---

## 📜 Licença

Este projeto está licenciado sob a licença **ISC**.  
