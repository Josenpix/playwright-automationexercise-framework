# Playwright Automation Framework

UI and API automation framework built with Playwright and TypeScript.

The project includes:
- UI testing
- API testing
- Page Object Model
- Fixtures
- Reusable API layer
- TypeScript typing

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Project Structure

pages/ - page objects  
components/ - reusable UI components  
tests/ui/ - UI tests  
tests/api/ - API tests  
fixtures/ - Playwright fixtures  
types/ - TypeScript models/types  
utils/assertions/ - reusable assertions  
test-data/ - test data  

## Installation

```bash
npm install
```

## Run Tests

Run all tests:

```bash
npm test
```

Run UI tests:

```bash
npm run test:ui
```

Run API tests:

```bash
npm run test:api
```

Run headed mode:

```bash
npm run test:headed
```

## Open Playwright Report

```bash
npm run report
```

## Features

- UI automation
- API automation
- Reusable API layer
- Base API abstraction
- Page Object Model
- Playwright fixtures
- Typed API responses
- Reusable assertions