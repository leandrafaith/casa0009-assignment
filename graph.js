TESTER = document.getElementById("choropleth-map");

// var jsonData;
// $.getJSON(
//     "http://geoportal.statistics.gov.uk/datasets/8edafbe3276d4b56aec60991cbddda50_2.geojson",
//     function (json) {
//         jsonData = json;
//     }
// );

// to replace these two lists with data from our own API
var lad_names = [
    "Hartlepool",
    "Middlesbrough",
    "Redcar and Cleveland",
    "Stockton-on-Tees",
    "Darlington",
    "Halton",
    "Warrington",
    "Blackburn with Darwen",
    "Blackpool",
    "Kingston upon Hull, City of",
    "East Riding of Yorkshire",
    "North East Lincolnshire",
    "North Lincolnshire",
    "York",
    "Derby",
    "Leicester",
    "Rutland",
    "Nottingham",
    "Herefordshire, County of",
    "Telford and Wrekin",
    "Stoke-on-Trent",
    "Bath and North East Somerset",
    "Bristol, City of",
    "North Somerset",
    "South Gloucestershire",
    "Plymouth",
    "Torbay",
    "Swindon",
    "Peterborough",
    "Luton",
    "Southend-on-Sea",
    "Thurrock",
    "Medway",
    "Bracknell Forest",
    "West Berkshire",
    "Reading",
    "Slough",
    "Windsor and Maidenhead",
    "Wokingham",
    "Milton Keynes",
    "Brighton and Hove",
    "Portsmouth",
    "Southampton",
    "Isle of Wight",
    "County Durham",
    "Cheshire East",
    "Cheshire West and Chester",
    "Shropshire",
    "Cornwall",
    "Isles of Scilly",
    "Wiltshire",
    "Bedford",
    "Central Bedfordshire",
    "Northumberland",
    "Bournemouth, Christchurch and Poole",
    "Dorset",
    "Buckinghamshire",
    "Cambridge",
    "East Cambridgeshire",
    "Fenland",
    "Huntingdonshire",
    "South Cambridgeshire",
    "Allerdale",
    "Barrow-in-Furness",
    "Carlisle",
    "Copeland",
    "Eden",
    "South Lakeland",
    "Amber Valley",
    "Bolsover",
    "Chesterfield",
    "Derbyshire Dales",
    "Erewash",
    "High Peak",
    "North East Derbyshire",
    "South Derbyshire",
    "East Devon",
    "Exeter",
    "Mid Devon",
    "North Devon",
    "South Hams",
    "Teignbridge",
    "Torridge",
    "West Devon",
    "Eastbourne",
    "Hastings",
    "Lewes",
    "Rother",
    "Wealden",
    "Basildon",
    "Braintree",
    "Brentwood",
    "Castle Point",
    "Chelmsford",
    "Colchester",
    "Epping Forest",
    "Harlow",
    "Maldon",
    "Rochford",
    "Tendring",
    "Uttlesford",
    "Cheltenham",
    "Cotswold",
    "Forest of Dean",
    "Gloucester",
    "Stroud",
    "Tewkesbury",
    "Basingstoke and Deane",
    "East Hampshire",
    "Eastleigh",
    "Fareham",
    "Gosport",
    "Hart",
    "Havant",
    "New Forest",
    "Rushmoor",
    "Test Valley",
    "Winchester",
    "Broxbourne",
    "Dacorum",
    "Hertsmere",
    "North Hertfordshire",
    "Three Rivers",
    "Watford",
    "Ashford",
    "Canterbury",
    "Dartford",
    "Dover",
    "Gravesham",
    "Maidstone",
    "Sevenoaks",
    "Folkestone and Hythe",
    "Swale",
    "Thanet",
    "Tonbridge and Malling",
    "Tunbridge Wells",
    "Burnley",
    "Chorley",
    "Fylde",
    "Hyndburn",
    "Lancaster",
    "Pendle",
    "Preston",
    "Ribble Valley",
    "Rossendale",
    "South Ribble",
    "West Lancashire",
    "Wyre",
    "Blaby",
    "Charnwood",
    "Harborough",
    "Hinckley and Bosworth",
    "Melton",
    "North West Leicestershire",
    "Oadby and Wigston",
    "Boston",
    "East Lindsey",
    "Lincoln",
    "North Kesteven",
    "South Holland",
    "South Kesteven",
    "West Lindsey",
    "Breckland",
    "Broadland",
    "Great Yarmouth",
    "King's Lynn and West Norfolk",
    "North Norfolk",
    "Norwich",
    "South Norfolk",
    "Corby",
    "Daventry",
    "East Northamptonshire",
    "Kettering",
    "Northampton",
    "South Northamptonshire",
    "Wellingborough",
    "Craven",
    "Hambleton",
    "Harrogate",
    "Richmondshire",
    "Ryedale",
    "Scarborough",
    "Selby",
    "Ashfield",
    "Bassetlaw",
    "Broxtowe",
    "Gedling",
    "Mansfield",
    "Newark and Sherwood",
    "Rushcliffe",
    "Cherwell",
    "Oxford",
    "South Oxfordshire",
    "Vale of White Horse",
    "West Oxfordshire",
    "Mendip",
    "Sedgemoor",
    "South Somerset",
    "Cannock Chase",
    "East Staffordshire",
    "Lichfield",
    "Newcastle-under-Lyme",
    "South Staffordshire",
    "Stafford",
    "Staffordshire Moorlands",
    "Tamworth",
    "Babergh",
    "Ipswich",
    "Mid Suffolk",
    "Elmbridge",
    "Epsom and Ewell",
    "Guildford",
    "Mole Valley",
    "Reigate and Banstead",
    "Runnymede",
    "Spelthorne",
    "Surrey Heath",
    "Tandridge",
    "Waverley",
    "Woking",
    "North Warwickshire",
    "Nuneaton and Bedworth",
    "Rugby",
    "Stratford-on-Avon",
    "Warwick",
    "Adur",
    "Arun",
    "Chichester",
    "Crawley",
    "Horsham",
    "Mid Sussex",
    "Worthing",
    "Bromsgrove",
    "Malvern Hills",
    "Redditch",
    "Worcester",
    "Wychavon",
    "Wyre Forest",
    "St Albans",
    "Welwyn Hatfield",
    "East Hertfordshire",
    "Stevenage",
    "East Suffolk",
    "West Suffolk",
    "Somerset West and Taunton",
    "Bolton",
    "Bury",
    "Manchester",
    "Oldham",
    "Rochdale",
    "Salford",
    "Stockport",
    "Tameside",
    "Trafford",
    "Wigan",
    "Knowsley",
    "Liverpool",
    "St. Helens",
    "Sefton",
    "Wirral",
    "Barnsley",
    "Doncaster",
    "Rotherham",
    "Sheffield",
    "Newcastle upon Tyne",
    "North Tyneside",
    "South Tyneside",
    "Sunderland",
    "Birmingham",
    "Coventry",
    "Dudley",
    "Sandwell",
    "Solihull",
    "Walsall",
    "Wolverhampton",
    "Bradford",
    "Calderdale",
    "Kirklees",
    "Leeds",
    "Wakefield",
    "Gateshead",
    "City of London",
    "Barking and Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith and Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington and Chelsea",
    "Kingston upon Thames",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
    "Antrim and Newtownabbey",
    "Armagh City, Banbridge and Craigavon",
    "Belfast",
    "Causeway Coast and Glens",
    "Derry City and Strabane",
    "Fermanagh and Omagh",
    "Lisburn and Castlereagh",
    "Mid and East Antrim",
    "Mid Ulster",
    "Newry, Mourne and Down",
    "Ards and North Down",
    "Clackmannanshire",
    "Dumfries and Galloway",
    "East Ayrshire",
    "East Lothian",
    "East Renfrewshire",
    "Na h-Eileanan Siar",
    "Falkirk",
    "Highland",
    "Inverclyde",
    "Midlothian",
    "Moray",
    "North Ayrshire",
    "Orkney Islands",
    "Scottish Borders",
    "Shetland Islands",
    "South Ayrshire",
    "South Lanarkshire",
    "Stirling",
    "Aberdeen City",
    "Aberdeenshire",
    "Argyll and Bute",
    "City of Edinburgh",
    "Renfrewshire",
    "West Dunbartonshire",
    "West Lothian",
    "Angus",
    "Dundee City",
    "East Dunbartonshire",
    "Fife",
    "Perth and Kinross",
    "Glasgow City",
    "North Lanarkshire",
    "Isle of Anglesey",
    "Gwynedd",
    "Conwy",
    "Denbighshire",
    "Flintshire",
    "Wrexham",
    "Ceredigion",
    "Pembrokeshire",
    "Carmarthenshire",
    "Swansea",
    "Neath Port Talbot",
    "Bridgend",
    "Vale of Glamorgan",
    "Cardiff",
    "Rhondda Cynon Taf",
    "Caerphilly",
    "Blaenau Gwent",
    "Torfaen",
    "Monmouthshire",
    "Newport",
    "Powys",
    "Merthyr Tydfil",
];

var color_vals = [
    93.242, 140.545, 136.718, 197.213, 106.566, 128.432, 209.547, 148.942,
    139.305, 260.645, 339.614, 159.821, 172.005, 209.893, 257.174, 355.218,
    39.697, 331.069, 192.107, 177.799, 255.833, 192.106, 463.405, 213.919,
    282.644, 263.1, 135.78, 221.996, 201.041, 214.109, 182.463, 172.525,
    277.855, 121.676, 158.527, 163.203, 149.112, 150.906, 167.979, 268.607,
    290.395, 215.133, 252.796, 141.538, 526.98, 380.79, 340.502, 320.274,
    565.968, 2.242, 498.064, 171.623, 283.606, 320.274, 395.784, 376.484,
    540.059, 125.758, 89.362, 101.491, 177.352, 157.519, 97.527, 67.137,
    108.387, 68.424, 52.881, 104.532, 126.678, 79.53, 104.628, 71.977, 115.49,
    92.221, 101.125, 104.493, 144.317, 130.428, 81.695, 96.11, 86.221, 132.844,
    68.143, 55.528, 103.16, 92.855, 102.744, 95.656, 160.175, 185.862, 151.561,
    76.55, 90.07, 177.079, 192.523, 131.137, 86.594, 64.425, 86.981, 145.803,
    89.179, 117.09, 89.022, 86.543, 129.285, 119.019, 92.599, 175.729, 120.681,
    131.819, 116.339, 85.283, 96.293, 125.813, 179.753, 95.142, 125.169,
    124.295, 96.876, 154.28, 104.205, 133.214, 93.045, 96.767, 129.281, 164.553,
    109.709, 116.969, 106.385, 169.955, 120.293, 112.578, 148.519, 141.819,
    130.508, 118.054, 88.527, 116.821, 79.77, 80.815, 144.246, 91.405, 141.818,
    60.057, 70.895, 110.527, 113.949, 111.223, 100.421, 182.643, 92.499,
    112.423, 51.1, 102.126, 57.056, 69.366, 140.741, 99.039, 115.985, 93.98,
    141.853, 94.869, 139.329, 129.464, 99.37, 151.811, 104.552, 141.137,
    138.017, 70.827, 84.484, 93.906, 101.266, 225.146, 92.515, 79.478, 56.832,
    91.134, 160.533, 53.244, 54.92, 108.736, 89.106, 127.151, 116.839, 113.272,
    117.786, 108.841, 121.566, 117.671, 149.161, 154.327, 140.504, 133.732,
    109.8, 114.881, 122.791, 167.861, 100.109, 118.574, 103.965, 129.49,
    112.126, 135.88, 98.397, 76.678, 91.401, 137.532, 102.493, 136.626, 79.928,
    147.889, 87.253, 147.757, 88.0, 99.334, 88.874, 87.496, 125.61, 101.167,
    64.85, 128.902, 107.194, 127.58, 142.484, 63.869, 159.827, 120.75, 112.448,
    142.217, 149.716, 110.025, 98.662, 78.113, 84.989, 101.891, 127.34, 101.062,
    147.373, 122.746, 148.105, 87.754, 248.249, 178.881, 153.866, 285.372,
    190.108, 547.627, 235.623, 220.001, 254.408, 291.775, 225.197, 236.37,
    326.088, 149.571, 494.814, 180.049, 275.396, 323.235, 245.199, 310.542,
    264.671, 582.506, 300.196, 205.985, 150.265, 277.417, 1141.374, 366.785,
    320.626, 327.378, 214.909, 283.378, 262.008, 537.173, 210.082, 438.727,
    789.194, 345.038, 202.508, 8.706, 211.998, 392.14, 247.258, 330.795,
    331.096, 262.226, 385.346, 341.982, 333.869, 286.186, 279.665, 185.426,
    270.624, 250.149, 257.81, 304.824, 270.782, 239.142, 156.197, 175.47,
    325.917, 303.536, 206.186, 352.005, 303.858, 196.904, 317.256, 204.525,
    317.705, 276.7, 326.474, 255.324, 142.492, 214.09, 341.877, 144.246,
    150.679, 116.835, 144.381, 138.773, 147.392, 180.012, 160.864, 51.4, 148.79,
    121.84, 105.79, 95.17, 26.83, 160.34, 235.54, 78.15, 91.34, 95.52, 135.28,
    22.19, 115.27, 22.99, 112.55, 319.02, 94.33, 227.56, 261.47, 86.26, 518.5,
    177.79, 89.13, 182.14, 116.04, 148.75, 108.33, 371.91, 151.29, 626.41,
    340.18, 69.961, 124.178, 117.181, 95.33, 155.593, 136.126, 72.992, 125.055,
    187.568, 246.466, 142.906, 144.876, 132.165, 364.248, 240.131, 181.019,
    69.713, 93.049, 94.142, 153.302, 132.447, 60.183,
];

var color_vals_test = [
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 500,
];

var data = [
    {
        type: "choroplethmapbox",
        geojson:
            // jsonData,
            "https://opendata.arcgis.com/datasets/bc2820b03de244698c0b0771ae4f345f_0.geojson",
        locations: lad_names,
        featureidkey: "properties.LAD20NM",
        z: color_vals,
        colorbar: {
            y: 0,
            yanchor: "bottom",
            title: { text: "Population", side: "right" },
        },
        // colorscale: "",
    },
];

var layout = {
    mapbox: {
        center: { lon: -1.5, lat: 54.5 },
        style: "carto-positron",
        zoom: 4.6,
    },
    width: 700,
    height: 600,
    margin: { t: 0, b: 0 },
    sliders: [
        {
            pad: { t: 30 },
            x: 0.05,
            len: 0.95,
            currentvalue: {
                xanchor: "right",
                prefix: "year: ",
                font: {
                    color: "#888",
                    size: 20,
                },
            },
            steps: [
                {
                    label: "2011",
                    method: "restyle",
                    args: ["z", [color_vals_test]],
                },
                {
                    label: "2012",
                    method: "restyle",
                    args: ["z", [color_vals_test]],
                },
                {
                    label: "2013",
                    method: "restyle",
                    args: [
                        {
                            "colorbar.title.text": "NEW TITLE",
                            z: [color_vals_test],
                        },
                    ],
                },
            ],
        },
    ],
};

var config = {
    mapboxAccessToken:
        "YOUR TOKEN HERE",
};

Plotly.newPlot(TESTER, data, layout, config);

lineChart = document.getElementById("line-chart");

Plotly.newPlot(
    lineChart,
    [
        {
            // to replace with data from our own API
            x: [
                2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
                2021,
            ],
            y: [1500, 1100, 1300, 1200, 800, 800, 700, 800, 1000, 500, 400],
        },
    ],
    {
        // margin: { t: 0 },
        title: "Total occurrences by Year",
        xaxis: {
            title: "Year",
            showgrid: false,
            zeroline: false,
        },
        yaxis: {
            title: "Count",
            showline: false,
        },
    }
);
