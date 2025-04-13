

Author : TeamHPower
# 🩺 MEDICARE – Decentralized, AI-Powered Healthcare Platform

**MEDICARE** is a decentralized healthcare platform built using React, Ethereum Blockchain, and Google’s Gemini 2.0 Flash AI. It enables smart doctor-patient interaction, secure health data storage on IPFS, and AI-powered medical insights — all while ensuring data ownership and privacy.

---

## 🚀 Features

- 💬 **Doctor-Patient Chat**: Real-time messaging between patients and healthcare professionals.
- 🧠 **AI Medical Assistant**: Gemini 2.0 Flash integration for health tips, early diagnosis, and query handling.
- 🔐 **Decentralized Authentication**: Wallet-based login (MetaMask) using Ethereum smart contracts.
- 🗂️ **Secure Medical Records**: Encrypted and stored on IPFS for tamper-proof access.
- 📅 **Appointment Booking**: Schedule appointments with available doctors.
- 🌍 **Blockchain Integration**: Immutable smart contracts to manage users and health data.

---

## 🛠️ Tech Stack

| Frontend       | Backend         | AI / NLP              | Blockchain     | Storage         |
|----------------|------------------|------------------------|----------------|------------------|
| React (JSX)    | Node.js, Express | **Gemini 2.0 Flash API** | Ethereum, Solidity | IPFS via Pinata  |
| Tailwind CSS   | JWT / MetaMask   | LangChain Integration | Hardhat        | Decentralized Web |

---

## 📁 Folder Structure

```bash
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.js
│   └── .env.local         # Gemini & Pinata Keys (gitignored)
├── server/                # Node.js backend
├── smart-contracts/       # Solidity contracts
│   └── ...
├── README.md
└── package.json
