# Node.js and Bun Setup Guide

## Pre-requisites

- **Node**: `<18`
- **Bun**: `<1.1.23`

### Install NVM (Node Version Manager)

For macOS/Linux, run:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

After installation, you may need to restart the terminal.

### Download and Install Node.js

```bash
nvm install 20
```

Verify the Node.js version:

```bash
node -v # should print `v20.16.0`
```

Verify the npm version:

```bash
npm -v # should print `10.8.1`
```

### Install Bun

For macOS, Linux, and WSL, run:

```bash
curl -fsSL https://bun.sh/install | bash
```

Alternatively, install with npm:

```bash
npm install -g bun # the last `npm` command you'll ever need
```

## Running the App

 1. **Download Dependencies**
   ```bash
   bun i
   ```
 2. **Run the Server**
   ```bash
   bun run dev
   ```
