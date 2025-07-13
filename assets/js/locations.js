// RSM Locations Data with coordinates and ZIP codes
const RSM_LOCATIONS = {
    "US": {
        "CA": [
            { name: "Burlingame", state: "CA", country: "US", lat: 37.5844, lng: -122.3661, zip: "94010" },
            { name: "Chino Hills", state: "CA", country: "US", lat: 33.9898, lng: -117.7326, zip: "91709" },
            { name: "Cupertino", state: "CA", country: "US", lat: 37.3230, lng: -122.0322, zip: "95014" },
            { name: "Dublin", state: "CA", country: "US", lat: 37.7022, lng: -121.9358, zip: "94568" },
            { name: "Evergreen", state: "CA", country: "US", lat: 37.2969, lng: -121.7914, zip: "95148" },
            { name: "Fremont Center", state: "CA", country: "US", lat: 37.5485, lng: -121.9886, zip: "94536" },
            { name: "Fremont Mission", state: "CA", country: "US", lat: 37.5331, lng: -121.9738, zip: "94539" },
            { name: "Fremont Stevenson", state: "CA", country: "US", lat: 37.5663, lng: -122.0553, zip: "94538" },
            { name: "Irvine", state: "CA", country: "US", lat: 33.6846, lng: -117.8265, zip: "92614" },
            { name: "Irvine Woodbury", state: "CA", country: "US", lat: 33.7175, lng: -117.7931, zip: "92602" },
            { name: "Milpitas", state: "CA", country: "US", lat: 37.4323, lng: -121.8995, zip: "95035" },
            { name: "Mountain View", state: "CA", country: "US", lat: 37.3861, lng: -122.0839, zip: "94041" },
            { name: "North San Francisco", state: "CA", country: "US", lat: 37.7849, lng: -122.4094, zip: "94109" },
            { name: "Pasadena", state: "CA", country: "US", lat: 34.1478, lng: -118.1445, zip: "91101" },
            { name: "Pleasanton", state: "CA", country: "US", lat: 37.6624, lng: -121.8747, zip: "94566" },
            { name: "San Diego", state: "CA", country: "US", lat: 32.7157, lng: -117.1611, zip: "92101" },
            { name: "San Fernando Valley", state: "CA", country: "US", lat: 34.2401, lng: -118.4312, zip: "91344" },
            { name: "San Francisco Lakeside", state: "CA", country: "US", lat: 37.7349, lng: -122.4531, zip: "94116" },
            { name: "San Jose", state: "CA", country: "US", lat: 37.3382, lng: -121.8863, zip: "95110" },
            { name: "San Jose Westgate", state: "CA", country: "US", lat: 37.3688, lng: -121.9511, zip: "95129" },
            { name: "San Mateo", state: "CA", country: "US", lat: 37.5630, lng: -122.3255, zip: "94403" },
            { name: "San Ramon", state: "CA", country: "US", lat: 37.7799, lng: -121.9780, zip: "94583" },
            { name: "San Ramon Alcosta", state: "CA", country: "US", lat: 37.7640, lng: -121.9618, zip: "94582" },
            { name: "Saratoga", state: "CA", country: "US", lat: 37.2638, lng: -122.0230, zip: "95070" },
            { name: "South Orange County", state: "CA", country: "US", lat: 33.6189, lng: -117.9298, zip: "92612" },
            { name: "Sunnyvale", state: "CA", country: "US", lat: 37.3688, lng: -122.0363, zip: "94085" },
            { name: "Sunnyvale II", state: "CA", country: "US", lat: 37.3541, lng: -122.0077, zip: "94087" }
        ],
        "CT": [
            { name: "Avon", state: "CT", country: "US", lat: 41.8009, lng: -72.8370, zip: "06001" },
            { name: "Greenwich", state: "CT", country: "US", lat: 41.0262, lng: -73.6282, zip: "06830" },
            { name: "Rocky Hill", state: "CT", country: "US", lat: 41.6598, lng: -72.6581, zip: "06067" },
            { name: "Stamford", state: "CT", country: "US", lat: 41.0534, lng: -73.5387, zip: "06901" }
        ],
        "IL": [
            { name: "Buffalo Grove", state: "IL", country: "US", lat: 42.1664, lng: -87.9595, zip: "60089" },
            { name: "Lincoln Park", state: "IL", country: "US", lat: 41.9242, lng: -87.6369, zip: "60614" },
            { name: "Naperville", state: "IL", country: "US", lat: 41.7508, lng: -88.1535, zip: "60540" },
            { name: "Schaumburg", state: "IL", country: "US", lat: 42.0334, lng: -88.0834, zip: "60173" },
            { name: "Skokie", state: "IL", country: "US", lat: 42.0334, lng: -87.7337, zip: "60076" },
            { name: "Wheeling", state: "IL", country: "US", lat: 42.1392, lng: -87.9289, zip: "60090" }
        ],
        "KY": [
            { name: "Louisville", state: "KY", country: "US", lat: 38.2527, lng: -85.7585, zip: "40202" }
        ],
        "MA": [
            { name: "Acton", state: "MA", country: "US", lat: 42.4851, lng: -71.4328, zip: "01720" },
            { name: "Andover", state: "MA", country: "US", lat: 42.6584, lng: -71.1370, zip: "01810" },
            { name: "Arlington", state: "MA", country: "US", lat: 42.4153, lng: -71.1564, zip: "02474" },
            { name: "Belmont", state: "MA", country: "US", lat: 42.3959, lng: -71.1786, zip: "02478" },
            { name: "Brookline", state: "MA", country: "US", lat: 42.3318, lng: -71.1211, zip: "02446" },
            { name: "Franklin", state: "MA", country: "US", lat: 42.0834, lng: -71.3967, zip: "02038" },
            { name: "Lexington", state: "MA", country: "US", lat: 42.4473, lng: -71.2245, zip: "02421" },
            { name: "Metrowest / Framingham", state: "MA", country: "US", lat: 42.2793, lng: -71.4162, zip: "01701" },
            { name: "Milton", state: "MA", country: "US", lat: 42.2496, lng: -71.0662, zip: "02186" },
            { name: "Newton", state: "MA", country: "US", lat: 42.3370, lng: -71.2092, zip: "02458" },
            { name: "Sharon", state: "MA", country: "US", lat: 42.1237, lng: -71.1786, zip: "02067" },
            { name: "Shrewsbury", state: "MA", country: "US", lat: 42.2959, lng: -71.7123, zip: "01545" },
            { name: "Wellesley", state: "MA", country: "US", lat: 42.2968, lng: -71.2928, zip: "02481" },
            { name: "West Newton", state: "MA", country: "US", lat: 42.3648, lng: -71.2245, zip: "02465" },
            { name: "Winchester", state: "MA", country: "US", lat: 42.4526, lng: -71.1370, zip: "01890" }
        ],
        "MD": [
            { name: "Chevy Chase", state: "MD", country: "US", lat: 38.9784, lng: -77.0747, zip: "20815" },
            { name: "North Bethesda", state: "MD", country: "US", lat: 39.0437, lng: -77.1211, zip: "20852" },
            { name: "Rockville", state: "MD", country: "US", lat: 39.0840, lng: -77.1528, zip: "20850" }
        ],
        "NH": [
            { name: "Nashua", state: "NH", country: "US", lat: 42.7654, lng: -71.4676, zip: "03060" }
        ],
        "NJ": [
            { name: "Edison", state: "NJ", country: "US", lat: 40.5187, lng: -74.4121, zip: "08817" },
            { name: "Livingston", state: "NJ", country: "US", lat: 40.7962, lng: -74.3146, zip: "07039" },
            { name: "Princeton", state: "NJ", country: "US", lat: 40.3573, lng: -74.6672, zip: "08540" }
        ],
        "NY": [
            { name: "Battery Park", state: "NY", country: "US", lat: 40.7033, lng: -74.0170, zip: "10004" },
            { name: "Brooklyn", state: "NY", country: "US", lat: 40.6782, lng: -73.9442, zip: "11201" },
            { name: "Park Slope", state: "NY", country: "US", lat: 40.6736, lng: -73.9796, zip: "11215" },
            { name: "Scarsdale", state: "NY", country: "US", lat: 40.9890, lng: -73.7785, zip: "10583" },
            { name: "Upper East Side 1 Ave", state: "NY", country: "US", lat: 40.7736, lng: -73.9566, zip: "10021" },
            { name: "Upper East Side 78th St", state: "NY", country: "US", lat: 40.7767, lng: -73.9549, zip: "10075" },
            { name: "Upper West Side", state: "NY", country: "US", lat: 40.7870, lng: -73.9754, zip: "10024" }
        ],
        "TX": [
            { name: "Coppell", state: "TX", country: "US", lat: 32.9546, lng: -97.0150, zip: "75019" },
            { name: "Houston", state: "TX", country: "US", lat: 29.7604, lng: -95.3698, zip: "77002" },
            { name: "Katy", state: "TX", country: "US", lat: 29.7858, lng: -95.8244, zip: "77494" },
            { name: "North Austin", state: "TX", country: "US", lat: 30.3909, lng: -97.7173, zip: "78729" },
            { name: "Plano", state: "TX", country: "US", lat: 33.0198, lng: -96.6989, zip: "75023" },
            { name: "Sugar Land", state: "TX", country: "US", lat: 29.6196, lng: -95.6349, zip: "77478" }
        ],
        "VA": [
            { name: "Arlington", state: "VA", country: "US", lat: 38.8816, lng: -77.0910, zip: "22201" },
            { name: "Ashburn", state: "VA", country: "US", lat: 39.0437, lng: -77.4875, zip: "20147" },
            { name: "Herndon", state: "VA", country: "US", lat: 38.9697, lng: -77.3864, zip: "20170" },
            { name: "Tysons Corner", state: "VA", country: "US", lat: 38.9184, lng: -77.2311, zip: "22102" }
        ],
        "WA": [
            { name: "Bellevue", state: "WA", country: "US", lat: 47.6101, lng: -122.2015, zip: "98004" },
            { name: "Factoria", state: "WA", country: "US", lat: 47.5732, lng: -122.1651, zip: "98006" },
            { name: "Redmond", state: "WA", country: "US", lat: 47.6740, lng: -122.1215, zip: "98052" }
        ]
    },
    "International": {
        "Canada": [
            { name: "Richmond Hill", state: "ON", country: "Canada", lat: 43.8828, lng: -79.4403, zip: "L4C" },
            { name: "Toronto", state: "ON", country: "Canada", lat: 43.6532, lng: -79.3832, zip: "M5H" }
        ],
        "Israel": [
            { name: "Givatayim", state: "", country: "Israel", lat: 32.0678, lng: 34.8063, zip: "" },
            { name: "Jerusalem", state: "", country: "Israel", lat: 31.7683, lng: 35.2137, zip: "" },
            { name: "Rishon LeZion", state: "", country: "Israel", lat: 31.9730, lng: 34.7925, zip: "" },
            { name: "Tel Aviv Central", state: "", country: "Israel", lat: 32.0853, lng: 34.7818, zip: "" },
            { name: "Tel Aviv North", state: "", country: "Israel", lat: 32.1133, lng: 34.8044, zip: "" }
        ],
        "UAE": [
            { name: "Dubai", state: "", country: "UAE", lat: 25.2048, lng: 55.2708, zip: "" }
        ]
    }
};

// Get all locations as a flat array
function getAllLocations() {
    const allLocations = [];
    
    // US locations
    Object.keys(RSM_LOCATIONS.US).forEach(state => {
        allLocations.push(...RSM_LOCATIONS.US[state]);
    });
    
    // International locations
    Object.keys(RSM_LOCATIONS.International).forEach(country => {
        allLocations.push(...RSM_LOCATIONS.International[country]);
    });
    
    return allLocations;
}

// Search locations by name or ZIP code
function searchLocations(query) {
    const allLocations = getAllLocations();
    const searchTerm = query.toLowerCase().trim();
    
    return allLocations.filter(location => {
        return location.name.toLowerCase().includes(searchTerm) ||
               location.zip.toLowerCase().includes(searchTerm) ||
               location.state.toLowerCase().includes(searchTerm) ||
               location.country.toLowerCase().includes(searchTerm);
    });
}

// Format location display name
function formatLocationName(location) {
    if (location.country === "US") {
        return `${location.name}, ${location.state}`;
    } else {
        return location.state ? 
            `${location.name}, ${location.state}, ${location.country}` : 
            `${location.name}, ${location.country}`;
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RSM_LOCATIONS, getAllLocations, searchLocations, formatLocationName };
}