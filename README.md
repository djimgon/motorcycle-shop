# 🏍️ Motorcycle Shop

**Motorcycle Shop** is an interactive motorcycle catalog built with TypeScript.

The project allows users to browse motorcycles, view detailed information, and search by motorcycle name with real-time filtering and automatic result counting.

Developed as part of the **freeCodeCamp TypeScript Certification**.

## 🛠 Tech Stack

- TypeScript
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3
- Node.js
- Yarn
- Docker & Docker Compose
- Nginx

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Docker & Docker Compose
- Make
- Git

### Installation

**1. Clone the repository**

```bash
git clone git@github.com:djimgon/motorcycle-shop.git
cd motorcycle-shop
```

**2. Initialize and start the application**

```bash
make init
```

**3. Open the application**

http://localhost:8080

### Stopping the Application

```bash
make down
```

## 🎯 Features

The following features are planned:

- Motorcycle catalog with 25 motorcycles
- Motorcycle data loaded from an external API
- Dynamic motorcycle cards
- Motorcycle images and descriptions
- Manufacturer and category information
- Motorcycle prices and production years
- Real-time search by motorcycle name
- Automatic search result counting
- Responsive user interface

## 🧠 TypeScript Concepts Practiced

- Type Aliases
- Union Types
- Interfaces
- Static Typing
- Promises
- Async/Await
- Fetch API
- Classes
- Access Modifiers (`private`, `public`)
- DOM Manipulation
- Event Handling
- Array Filtering
- Template Literals

## 📁 Project Structure

```text
motorcycle-shop/
├── frontend/
│   ├── docker/
│   │   └── development/
│   │       ├── nginx/
│   │       └── node/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── main.ts
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   └── tsconfig.json
├── gateway/
│   └── docker/
│       └── development/
│           └── nginx/
├── docker-compose.yml
├── Makefile
├── README.md
└── LICENSE
```

## 📌 Project Status

🚧 **In Development** — Docker environment configured and TypeScript application initialized.

The next milestone is to implement the motorcycle catalog and pass all 28 freeCodeCamp project tests.

---

**Author:** [Dmitry Goncharov](https://github.com/djimgon)