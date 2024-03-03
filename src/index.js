// logger-ultra.js

class Logger_ultra {
    constructor(options = {}) {
      this.logLevel = options.logLevel || 'info';
    }
  
    log(message, level = 'info') {
      const levels = ['error', 'warn', 'info', 'debug'];
  
      if (!levels.includes(level)) {
        throw new Error(`Invalid log level: ${level}`);
      }
  
      if (levels.indexOf(level) <= levels.indexOf(this.logLevel)) {
        console[level](`[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}`);
      }
    }
  
    error(message) {
      this.log(message, 'error');
    }
  
    warn(message) {
      this.log(message, 'warn');
    }
  
    info(message) {
      this.log(message, 'info');
    }
  
    debug(message) {
      this.log(message, 'debug');
    }
  }
  
  module.exports = Logger_ultra;
  