// Configuration management for RSM website
// This file handles environment variables and API configuration

class Config {
    constructor() {
        this.isDevelopment = window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1' ||
                           window.location.hostname.includes('netlify.app') ||
                           window.location.hostname.includes('vercel.app');
        
        this.initializeConfig();
    }
    
    initializeConfig() {
        // In production, these should be injected at build time
        // For now, using direct values but with better security practices
        
        this.config = {
            googleMaps: {
                // This should be replaced with a restricted API key for your domain
                apiKey: this.getApiKey('GOOGLE_MAPS_API_KEY', ''),
                mapId: '1_gIQrPnpmRdjGL-U-AJLk7xkL6B2ykQ'
            },
            gemini: {
                // This should be handled server-side in production
                apiKey: this.getApiKey('GEMINI_API_KEY', ''),
                apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'
            },
            site: {
                url: this.getConfig('SITE_URL', window.location.origin),
                name: 'RSM Competition Program',
                description: 'Russian School of Mathematics Competition Program'
            },
            features: {
                enableAnalytics: this.getConfig('ENABLE_ANALYTICS', 'true') === 'true',
                enableErrorReporting: this.getConfig('ENABLE_ERROR_REPORTING', 'true') === 'true',
                enableProblemGeneration: this.getConfig('ENABLE_PROBLEM_GENERATION', 'false') === 'true'
            }
        };
    }
    
    getApiKey(key, defaultValue = '') {
        // In a real production environment, this would be injected at build time
        // or fetched from a secure backend endpoint
        
        if (typeof process !== 'undefined' && process.env && process.env[key]) {
            return process.env[key];
        }
        
        // For now, return empty string to prevent exposure
        // This will disable features that require API keys
        return defaultValue;
    }
    
    getConfig(key, defaultValue) {
        if (typeof process !== 'undefined' && process.env && process.env[key]) {
            return process.env[key];
        }
        return defaultValue;
    }
    
    // Security helper methods
    isSecureContext() {
        return window.isSecureContext || window.location.protocol === 'https:';
    }
    
    shouldEnableFeature(featureName) {
        return this.config.features[featureName] && this.isSecureContext();
    }
    
    // API key validation
    isApiKeyConfigured(service) {
        const key = this.config[service]?.apiKey;
        return key && key.length > 0 && !key.includes('your_') && !key.includes('_here');
    }
    
    // Get configuration with security checks
    getSecureConfig(service) {
        if (!this.isSecureContext()) {
            console.warn('Secure context required for API operations');
            return null;
        }
        
        if (!this.isApiKeyConfigured(service)) {
            console.warn(`${service} API key not properly configured`);
            return null;
        }
        
        return this.config[service];
    }
}

// Export singleton instance
window.RSMConfig = new Config();

// Security warning for development
if (window.RSMConfig.isDevelopment) {
    console.warn('🔧 Development mode detected. Ensure API keys are properly secured before production deployment.');
}

// Disable console in production (optional security measure)
if (!window.RSMConfig.isDevelopment) {
    console.log = console.warn = console.error = function() {};
}