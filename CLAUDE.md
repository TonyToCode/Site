# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a website project for the Russian School of Mathematics (RSM) competition program. The project is a modernization and redesign of the existing RSM website at https://www.mathschool.com/. The goal is to create a more engaging, accessible, and performant digital presence for RSM's math competition programs.

## Collaboration Guidelines

### Git Workflow
- **ALWAYS check for new commits** before making changes: Run `git pull origin main` to ensure you have the latest changes from other collaborators
- **ALWAYS push changes** after completing work: Use `git add .`, `git commit -m "descriptive message"`, and `git push origin main`
- **Collaborate transparently**: Since multiple people may be working on this project, communicate changes clearly through commit messages

### Developer Support
- **Assume limited coding experience**: The collaborators on this project are new to coding and development
- **Provide detailed explanations**: When suggesting changes or fixes, explain what the code does and why the changes are needed
- **Offer learning opportunities**: Help developers understand concepts and best practices as you work together
- **Be patient and thorough**: Take time to explain technical decisions and provide context for improvements

## File Structure

- `index.html` - Complete landing page for RSM's math competition program

## Development Setup

This is a static HTML project requiring no build process or package management. Simply open `index.html` in a web browser to view the application.

## Key Features and Architecture

### Technology Stack
- HTML5 with semantic structure
- TailwindCSS (via CDN) for styling
- Vanilla JavaScript for interactivity
- Feather Icons (via CDN) for iconography
- Google Fonts (Inter) for typography

### Custom CSS Variables
The application uses RSM brand colors defined as CSS custom properties:
- `--rsm-blue: #005dab`
- `--rsm-gold: #ffc72c`
- `--rsm-dark-blue: #003e7a`
- `--rsm-light-gray: #f8f9fa`

### JavaScript Functionality
Key interactive features include:
- Mobile menu toggle
- FAQ accordion functionality
- Modal system for displaying generated problems
- Gemini API integration for problem generation (API key placeholder)

### External Dependencies
- TailwindCSS: `https://cdn.tailwindcss.com`
- Feather Icons: `https://unpkg.com/feather-icons`
- Google Fonts: Inter font family

## Content Sections

The page includes these main sections:
1. Hero section with call-to-action
2. "Why Math Competitions?" benefits overview
3. Four-stage competition pathway
4. MCP and NMCP program descriptions
5. Student/parent testimonials
6. Coach profiles
7. FAQ with accordion functionality
8. School finder
9. Contact form

## API Integration

The page includes placeholder integration with Google's Gemini API for generating sample math problems. The API key is intentionally left blank and would need to be configured in a production environment.

## Deployment

Since this is a static HTML file, deployment is straightforward:
- No build process required
- Host the `index.html` file on any web server
- Ensure external CDN resources are accessible