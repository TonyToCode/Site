# Google My Maps Setup Guide for RSM Locations

This guide will walk you through creating a custom Google My Maps with all RSM locations and custom pins, then embedding it into the website.

## Step 1: Access Google My Maps

1. Go to [https://mymaps.google.com](https://mymaps.google.com)
2. Sign in with your Google account
3. Click **"Create a New Map"**

## Step 2: Set Up Your Map

1. **Name your map**: Click "Untitled map" and rename it to "RSM Competition Program Locations"
2. **Add description**: "Find Russian School of Mathematics locations worldwide. 80+ centers across the US, Canada, Israel, and UAE."

## Step 3: Import Location Data

### Option A: Import CSV File (Recommended)
1. Click **"Import"** in the left panel
2. Upload the file `assets/data/rsm-locations.csv`
3. Select **"Name"** as the title for markers
4. Select **"Description"** for the description
5. Click **"Done"**

### Option B: Add Locations Manually
1. Click **"Add marker"** for each location
2. Search for the city/address
3. Add the location name (e.g., "RSM Newton")
4. Add description: "Russian School of Mathematics - Competition Math Program"

## Step 4: Customize Markers

1. **Upload RSM Logo**:
   - Click on the paint bucket icon next to your layer
   - Select **"More icons"**
   - Click **"Custom icon"** 
   - Upload `assets/RSM/rsm.svg` or create a custom RSM pin icon

2. **Set Uniform Style**:
   - Select **"Uniform style"**
   - Choose your uploaded RSM icon
   - This will apply the RSM branding to all markers

## Step 5: Organize by Regions (Optional)

Create separate layers for better organization:

1. **United States** (75+ locations)
   - Color: Blue (#005dab - RSM Primary)
   - Use RSM logo icon

2. **International** (Canada, Israel, UAE)
   - Color: Gold (#ffc72c - RSM Secondary) 
   - Use RSM logo icon

## Step 6: Configure Map Settings

1. **Set Default View**:
   - Position the map to show all locations
   - Go to map menu (three dots) → **"Set default view"**

2. **Map Style** (optional):
   - Click the style icon
   - Choose a clean, professional style that complements RSM branding

## Step 7: Make Map Public

1. Click **"Share"** in the top right
2. Change visibility to **"Public on the web"**
3. Set permissions to **"Anyone with the link can view"**
4. Click **"Save"**

## Step 8: Get Embed Code

1. Click **"Share"** again
2. Click **"Embed on my site"**
3. Choose your preferred size:
   - **Main page**: Medium (640 x 480) 
   - **Locations page**: Large (800 x 600)
4. Copy the iframe embed code

## Step 9: Update Website

### For Main Page (index.html):
Replace the iframe src in line 534:
```html
<iframe 
    src="YOUR_GOOGLE_MY_MAPS_EMBED_URL_HERE"
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### For Locations Page (pages/locations.html):
Replace the iframe src in line 145:
```html
<iframe 
    src="YOUR_GOOGLE_MY_MAPS_EMBED_URL_HERE"
    width="100%" 
    height="500" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## Step 10: Remove Setup Instructions

After successfully embedding your map:
1. Remove the blue instruction box from `index.html` (lines 545-563)
2. Test the map functionality on both pages

## Features Your Map Will Have

✅ **Interactive Navigation**: Users can zoom, pan, and explore
✅ **Custom RSM Pins**: Branded markers with RSM logo
✅ **Click for Details**: Each location shows name and description
✅ **Search Functionality**: Built-in Google Maps search
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **No API Restrictions**: Free to use with unlimited views

## Tips for Success

- **Test on Mobile**: Ensure the map works well on phones and tablets
- **Check Load Times**: Monitor map loading performance
- **Update Regularly**: Add new locations as RSM expands
- **Backup Your Data**: Keep the CSV file updated with any changes

## Troubleshooting

**Map not loading?**
- Check that the map is set to "Public on the web"
- Verify the embed URL is correct
- Ensure you're using the iframe embed code, not the sharing link

**Markers not showing?**
- Confirm all coordinates in the CSV are correct
- Check that the CSV import completed successfully
- Verify the layer is visible (eye icon should be open)

## Result

You'll have a professional, interactive map showing all 80+ RSM locations worldwide with:
- Custom RSM-branded markers
- Click-to-view location details
- Full interactivity (zoom, search, navigate)
- Mobile responsiveness
- No API costs or restrictions

This provides a much better user experience than static maps and showcases RSM's extensive global presence effectively.