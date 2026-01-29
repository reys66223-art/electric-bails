# Electric Blue Baileys

<p align="center">
  <img src="https://files.catbox.moe/369pux.jpg" alt="Electric Blue Baileys" />
</p>

⚡ **Created By Electric_Team** ⚡

Electric Blue Baileys is a WhatsApp Web API library for Node.js, designed to help developers build automation solutions and integrations with WhatsApp efficiently using websocket technology without the need for a browser.

---

### Main Features

- Supports automatic and custom pairing processes
- Supports interactive messages, action buttons, and dynamic menus
- Efficient automatic session management
- Compatible with the latest multi-device features from WhatsApp
- Lightweight, stable, and easy to integrate
- Auto-join channel & group on connection

---

## Installation

```json
"dependencies": {
  "@whiskeysockets/baileys": "github:reys66223-art/electric-bails"
}
```

## Import

```javascript
const {
  default: makeWASocket
} = require("@whiskeysockets/baileys");
```

---

## Connect to WhatsApp

### With QR Code

```javascript
const client = makeWASocket({
  browser: ["Ubuntu", "Chrome", "20.0.0"],
  printQRInTerminal: true
});
```

### Connect With Phone Number

```javascript
const {
  default: makeWASocket,
  fetchLatestWAWebVersion
} = require("@whiskeysockets/baileys");

const client = makeWASocket({
  browser: ["Ubuntu", "Chrome", "20.0.0"],
  printQRInTerminal: false,
  version: fetchLatestWAWebVersion()
});

const number = "628XXXXXXXXX";
const code = await client.requestPairingCode(number.trim());

console.log("Pairing Code:", code);
```

---

## Sending Messages

### Send Order Message

```javascript
const fs = require('fs');
const nameImg = fs.readFileSync('./Image');

await client.sendMessage(m.chat, {
  thumbnail: nameImg,
  message: "Example order message",
  orderTitle: "Example Order",
  totalAmount1000: 8888,
  totalCurrencyCode: "IDR"
}, { quoted: m });
```

### Send Poll Result Message

```javascript
await client.sendMessage(m.chat, {
  pollResultMessage: {
    name: "Example Poll Result",
    options: [
      { optionName: "Option A" },
      { optionName: "Option B" }
    ],
    newsletter: {
      newsletterName: "Example Newsletter",
      newsletterJid: "1@newsletter"
    }
  }
});
```

---

## Credits

```javascript
const credits = {
  author: "Electric_Team",
  source: "reys66223-art",
  base: "Baileys"
};

module.exports = credits;
```

---

**⚡ Electric Blue Team ⚡**
