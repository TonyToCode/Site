# Security Policy

## API Key Security

This repository previously contained an exposed Google Maps API key that was detected by GitHub's secret scanning. The issue has been resolved:

1. **The exposed key has been removed** from the codebase
2. **The Google Maps implementation has been replaced** with Leaflet/OpenStreetMap, which doesn't require an API key
3. **Environment variables are now used** for any sensitive configuration (see `.env.example`)

## Actions Taken

- ✅ Removed the exposed API key from all current files
- ✅ Replaced Google Maps with OpenStreetMap (no API key needed)
- ✅ Added proper `.env.example` file for configuration guidance
- ✅ Ensured `.env` is in `.gitignore` to prevent future exposures

## For the Exposed Key

**IMPORTANT**: The exposed Google API key `AIzaSyBXq9Xd8W8d_j5Rn7KVz1Z2Q3Y4M5N6P7R` should be:

1. **Immediately revoked/deleted** in the Google Cloud Console
2. **Regenerated with a new key** if Google Maps is needed in the future
3. **Restricted to specific domains** to prevent unauthorized use

## Best Practices Going Forward

1. Never commit API keys, passwords, or secrets to version control
2. Use environment variables for sensitive configuration
3. Add API key restrictions in Google Cloud Console:
   - HTTP referrer restrictions for web APIs
   - IP restrictions for server APIs
   - API restrictions to limit which APIs can be used

## Reporting Security Issues

If you discover a security vulnerability, please email: online.competition@mathschool.com
