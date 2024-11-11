// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-real-events'
// require('cypress-real-events') -- this will also work 
                                   // The import 'cypress-real-events' and require('cypress-real-events') methods work because 
                                   // they are simply loading the JavaScript module into your environment, 
                                   // without worrying about TypeScript types
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
// /// <reference types="cypress-real-events" /> directive is specific to TypeScript and requires the package to have type definitions either bundled or available via @types/. Since cypress-real-events may not have types available for TypeScript, it doesn’t work as expected.
import '@4tw/cypress-drag-drop'