# Hello World Agent (Node.js)

A simple Node.js agent that prints `"hello world"` every 10 seconds.

## 📦 Features

* Lightweight and minimal setup
* Runs continuously like a basic agent
* Two implementations:

  * `setInterval` (simple)
  * `async loop` (more control)

---

## 🚀 Getting Started

### 1. Install Node.js

Make sure you have Node.js installed:

```bash
node -v
```

---

### 2. Create the file

#### Option A: Using `setInterval`

Create a file named `hello-agent.js`

```js
function sayHello() {
  console.log("hello world");
}

setInterval(sayHello, 10000);

// Run immediately (optional)
sayHello();
```

---

#### Option B: Using async loop

Create a file named `hello-agent-async.js`

```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAgent() {
  while (true) {
    console.log("hello world");
    await sleep(10000);
  }
}

runAgent();
```

---

## ▶️ Run the Agent

```bash
node hello-agent.js
```

or

```bash
node hello-agent-async.js
```

---

## 🧠 How It Works

* Runs continuously in a loop
* Prints `"hello world"` every 10 seconds
* Uses either:

  * `setInterval` for simplicity
  * `async/await` for better control

---

## ⚙️ Customization

### Add timestamp

```js
console.log(`[${new Date().toISOString()}] hello world`);
```

### Change interval

```js
setInterval(sayHello, 5000); // every 5 seconds
```

---

## 🛠️ Future Improvements

* Add CLI arguments (e.g. interval config)
* Logging system
* Error handling & retries
* Deploy as background service (PM2 / Docker)
* Convert to npm package

---

## 📄 License

MIT
