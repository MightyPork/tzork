//////////////////////////////////////////////////////////////////////////////
// THIS IS A GENERATED FILE, CHANGES WILL BE LOST!!!                        //
//                                                                          //
// Please edit files in js/source, and then run 'make js' in project root.  //
//////////////////////////////////////////////////////////////////////////////

// Names of all timezones
var tz_names = [
	"Europe/Andorra",
	"Asia/Dubai",
	"Asia/Kabul",
	"Europe/Tirane",
	"Asia/Yerevan",
	"Antarctica/Rothera",
	"Antarctica/Palmer",
	"Antarctica/Mawson",
	"Antarctica/Davis",
	"Antarctica/Casey",
	"Antarctica/Vostok",
	"Antarctica/DumontDUrville",
	"Antarctica/Syowa",
	"Antarctica/Troll",
	"America/Argentina/Buenos_Aires",
	"America/Argentina/Cordoba",
	"America/Argentina/Salta",
	"America/Argentina/Jujuy",
	"America/Argentina/Tucuman",
	"America/Argentina/Catamarca",
	"America/Argentina/La_Rioja",
	"America/Argentina/San_Juan",
	"America/Argentina/Mendoza",
	"America/Argentina/San_Luis",
	"America/Argentina/Rio_Gallegos",
	"America/Argentina/Ushuaia",
	"Pacific/Pago_Pago",
	"Europe/Vienna",
	"Australia/Lord_Howe",
	"Antarctica/Macquarie",
	"Australia/Hobart",
	"Australia/Currie",
	"Australia/Melbourne",
	"Australia/Sydney",
	"Australia/Broken_Hill",
	"Australia/Brisbane",
	"Australia/Lindeman",
	"Australia/Adelaide",
	"Australia/Darwin",
	"Australia/Perth",
	"Australia/Eucla",
	"Asia/Baku",
	"America/Barbados",
	"Asia/Dhaka",
	"Europe/Brussels",
	"Europe/Sofia",
	"Atlantic/Bermuda",
	"Asia/Brunei",
	"America/La_Paz",
	"America/Noronha",
	"America/Belem",
	"America/Fortaleza",
	"America/Recife",
	"America/Araguaina",
	"America/Maceio",
	"America/Bahia",
	"America/Sao_Paulo",
	"America/Campo_Grande",
	"America/Cuiaba",
	"America/Santarem",
	"America/Porto_Velho",
	"America/Boa_Vista",
	"America/Manaus",
	"America/Eirunepe",
	"America/Rio_Branco",
	"America/Nassau",
	"Asia/Thimphu",
	"Europe/Minsk",
	"America/Belize",
	"America/St_Johns",
	"America/Halifax",
	"America/Glace_Bay",
	"America/Moncton",
	"America/Goose_Bay",
	"America/Blanc-Sablon",
	"America/Toronto",
	"America/Nipigon",
	"America/Thunder_Bay",
	"America/Iqaluit",
	"America/Pangnirtung",
	"America/Resolute",
	"America/Atikokan",
	"America/Rankin_Inlet",
	"America/Winnipeg",
	"America/Rainy_River",
	"America/Regina",
	"America/Swift_Current",
	"America/Edmonton",
	"America/Cambridge_Bay",
	"America/Yellowknife",
	"America/Inuvik",
	"America/Creston",
	"America/Dawson_Creek",
	"America/Vancouver",
	"America/Whitehorse",
	"America/Dawson",
	"Indian/Cocos",
	"Europe/Zurich",
	"Africa/Abidjan",
	"Pacific/Rarotonga",
	"America/Santiago",
	"Pacific/Easter",
	"Asia/Shanghai",
	"Asia/Urumqi",
	"America/Bogota",
	"America/Costa_Rica",
	"America/Havana",
	"Atlantic/Cape_Verde",
	"America/Curacao",
	"Indian/Christmas",
	"Asia/Nicosia",
	"Europe/Prague",
	"Europe/Berlin",
	"Europe/Copenhagen",
	"America/Santo_Domingo",
	"Africa/Algiers",
	"America/Guayaquil",
	"Pacific/Galapagos",
	"Europe/Tallinn",
	"Africa/Cairo",
	"Africa/El_Aaiun",
	"Europe/Madrid",
	"Africa/Ceuta",
	"Atlantic/Canary",
	"Europe/Helsinki",
	"Pacific/Fiji",
	"Atlantic/Stanley",
	"Pacific/Chuuk",
	"Pacific/Pohnpei",
	"Pacific/Kosrae",
	"Atlantic/Faroe",
	"Europe/Paris",
	"Europe/London",
	"Asia/Tbilisi",
	"America/Cayenne",
	"Africa/Accra",
	"Europe/Gibraltar",
	"America/Godthab",
	"America/Danmarkshavn",
	"America/Scoresbysund",
	"America/Thule",
	"Europe/Athens",
	"Atlantic/South_Georgia",
	"America/Guatemala",
	"Pacific/Guam",
	"Africa/Bissau",
	"America/Guyana",
	"Asia/Hong_Kong",
	"America/Tegucigalpa",
	"America/Port-au-Prince",
	"Europe/Budapest",
	"Asia/Jakarta",
	"Asia/Pontianak",
	"Asia/Makassar",
	"Asia/Jayapura",
	"Europe/Dublin",
	"Asia/Jerusalem",
	"Asia/Kolkata",
	"Indian/Chagos",
	"Asia/Baghdad",
	"Asia/Tehran",
	"Atlantic/Reykjavik",
	"Europe/Rome",
	"America/Jamaica",
	"Asia/Amman",
	"Asia/Tokyo",
	"Africa/Nairobi",
	"Asia/Bishkek",
	"Pacific/Tarawa",
	"Pacific/Enderbury",
	"Pacific/Kiritimati",
	"Asia/Pyongyang",
	"Asia/Seoul",
	"Asia/Almaty",
	"Asia/Qyzylorda",
	"Asia/Aqtobe",
	"Asia/Aqtau",
	"Asia/Oral",
	"Asia/Beirut",
	"Asia/Colombo",
	"Africa/Monrovia",
	"Europe/Vilnius",
	"Europe/Luxembourg",
	"Europe/Riga",
	"Africa/Tripoli",
	"Africa/Casablanca",
	"Europe/Monaco",
	"Europe/Chisinau",
	"Pacific/Majuro",
	"Pacific/Kwajalein",
	"Asia/Rangoon",
	"Asia/Ulaanbaatar",
	"Asia/Hovd",
	"Asia/Choibalsan",
	"Asia/Macau",
	"America/Martinique",
	"Europe/Malta",
	"Indian/Mauritius",
	"Indian/Maldives",
	"America/Mexico_City",
	"America/Cancun",
	"America/Merida",
	"America/Monterrey",
	"America/Matamoros",
	"America/Mazatlan",
	"America/Chihuahua",
	"America/Ojinaga",
	"America/Hermosillo",
	"America/Tijuana",
	"America/Santa_Isabel",
	"America/Bahia_Banderas",
	"Asia/Kuala_Lumpur",
	"Asia/Kuching",
	"Africa/Maputo",
	"Africa/Windhoek",
	"Pacific/Noumea",
	"Pacific/Norfolk",
	"Africa/Lagos",
	"America/Managua",
	"Europe/Amsterdam",
	"Europe/Oslo",
	"Asia/Kathmandu",
	"Pacific/Nauru",
	"Pacific/Niue",
	"Pacific/Auckland",
	"Pacific/Chatham",
	"America/Panama",
	"America/Lima",
	"Pacific/Tahiti",
	"Pacific/Marquesas",
	"Pacific/Gambier",
	"Pacific/Port_Moresby",
	"Pacific/Bougainville",
	"Asia/Manila",
	"Asia/Karachi",
	"Europe/Warsaw",
	"America/Miquelon",
	"Pacific/Pitcairn",
	"America/Puerto_Rico",
	"Asia/Gaza",
	"Asia/Hebron",
	"Europe/Lisbon",
	"Atlantic/Madeira",
	"Atlantic/Azores",
	"Pacific/Palau",
	"America/Asuncion",
	"Asia/Qatar",
	"Indian/Reunion",
	"Europe/Bucharest",
	"Europe/Belgrade",
	"Europe/Kaliningrad",
	"Europe/Moscow",
	"Europe/Simferopol",
	"Europe/Volgograd",
	"Europe/Samara",
	"Asia/Yekaterinburg",
	"Asia/Omsk",
	"Asia/Novosibirsk",
	"Asia/Novokuznetsk",
	"Asia/Krasnoyarsk",
	"Asia/Irkutsk",
	"Asia/Chita",
	"Asia/Yakutsk",
	"Asia/Khandyga",
	"Asia/Vladivostok",
	"Asia/Sakhalin",
	"Asia/Ust-Nera",
	"Asia/Magadan",
	"Asia/Srednekolymsk",
	"Asia/Kamchatka",
	"Asia/Anadyr",
	"Asia/Riyadh",
	"Pacific/Guadalcanal",
	"Indian/Mahe",
	"Africa/Khartoum",
	"Europe/Stockholm",
	"Asia/Singapore",
	"America/Paramaribo",
	"America/El_Salvador",
	"Asia/Damascus",
	"America/Grand_Turk",
	"Africa/Ndjamena",
	"Indian/Kerguelen",
	"Asia/Bangkok",
	"Asia/Dushanbe",
	"Pacific/Fakaofo",
	"Asia/Dili",
	"Asia/Ashgabat",
	"Africa/Tunis",
	"Pacific/Tongatapu",
	"Europe/Istanbul",
	"America/Port_of_Spain",
	"Pacific/Funafuti",
	"Asia/Taipei",
	"Europe/Kiev",
	"Europe/Uzhgorod",
	"Europe/Zaporozhye",
	"Pacific/Wake",
	"America/New_York",
	"America/Detroit",
	"America/Kentucky/Louisville",
	"America/Kentucky/Monticello",
	"America/Indiana/Indianapolis",
	"America/Indiana/Vincennes",
	"America/Indiana/Winamac",
	"America/Indiana/Marengo",
	"America/Indiana/Petersburg",
	"America/Indiana/Vevay",
	"America/Chicago",
	"America/Indiana/Tell_City",
	"America/Indiana/Knox",
	"America/Menominee",
	"America/North_Dakota/Center",
	"America/North_Dakota/New_Salem",
	"America/North_Dakota/Beulah",
	"America/Denver",
	"America/Boise",
	"America/Phoenix",
	"America/Los_Angeles",
	"America/Metlakatla",
	"America/Anchorage",
	"America/Juneau",
	"America/Sitka",
	"America/Yakutat",
	"America/Nome",
	"America/Adak",
	"Pacific/Honolulu",
	"America/Montevideo",
	"Asia/Samarkand",
	"Asia/Tashkent",
	"America/Caracas",
	"Asia/Ho_Chi_Minh",
	"Pacific/Efate",
	"Pacific/Wallis",
	"Pacific/Apia",
	"Africa/Johannesburg"
];
var tz_aliases = {

	// --- single-timezone countries ---

	"Afghanistan": "Asia/Kabul",
	"Aland Islands": "Europe/Mariehamn",
	"Albania": "Europe/Tirane",
	"Algeria": "Africa/Algiers",
	"American Samoa": "Pacific/Pago_Pago",
	"Andorra": "Europe/Andorra",
	"Angola": "Africa/Luanda",
	"Anguilla": "America/Anguilla",
	"Antigua and Barbuda": "America/Antigua",
	"Armenia": "Asia/Yerevan",
	"Aruba": "America/Aruba",
	"Austria": "Europe/Vienna",
	"Azerbaijan": "Asia/Baku",
	"Bahamas": "America/Nassau",
	"Bahrain": "Asia/Bahrain",
	"Bangladesh": "Asia/Dhaka",
	"Barbados": "America/Barbados",
	"Belarus": "Europe/Minsk",
	"Belgium": "Europe/Brussels",
	"Belize": "America/Belize",
	"Benin": "Africa/Porto-Novo",
	"Bermuda": "Atlantic/Bermuda",
	"Bhutan": "Asia/Thimphu",
	"Bolivia": "America/La_Paz",
	"Bonaire, Saint Eustatius and Saba": "America/Kralendijk",
	"Bosnia and Herzegovina": "Europe/Sarajevo",
	"Botswana": "Africa/Gaborone",
	"British Indian Ocean Territory": "Indian/Chagos",
	"British Virgin Islands": "America/Tortola",
	"Brunei": "Asia/Brunei",
	"Bulgaria": "Europe/Sofia",
	"Burkina Faso": "Africa/Ouagadougou",
	"Burundi": "Africa/Bujumbura",
	"Cambodia": "Asia/Phnom_Penh",
	"Cameroon": "Africa/Douala",
	"Cape Verde": "Atlantic/Cape_Verde",
	"Cayman Islands": "America/Cayman",
	"Central African Republic": "Africa/Bangui",
	"Chad": "Africa/Ndjamena",
	"Christmas Island": "Indian/Christmas",
	"Cocos Islands": "Indian/Cocos",
	"Colombia": "America/Bogota",
	"Comoros": "Indian/Comoro",
	"Cook Islands": "Pacific/Rarotonga",
	"Costa Rica": "America/Costa_Rica",
	"Croatia": "Europe/Zagreb",
	"Cuba": "America/Havana",
	"Curaçao": "America/Curacao",
	"Cyprus": "Asia/Nicosia",
	"Czech Republic": "Europe/Prague",
	"Denmark": "Europe/Copenhagen",
	"Djibouti": "Africa/Djibouti",
	"Dominica": "America/Dominica",
	"Dominican Republic": "America/Santo_Domingo",
	"East Timor": "Asia/Dili",
	"Egypt": "Africa/Cairo",
	"El Salvador": "America/El_Salvador",
	"Equatorial Guinea": "Africa/Malabo",
	"Eritrea": "Africa/Asmara",
	"Estonia": "Europe/Tallinn",
	"Ethiopia": "Africa/Addis_Ababa",
	"Falkland Islands": "Atlantic/Stanley",
	"Faroe Islands": "Atlantic/Faroe",
	"Fiji": "Pacific/Fiji",
	"Finland": "Europe/Helsinki",
	"France": "Europe/Paris",
	"French Guiana": "America/Cayenne",
	"French Southern Territories": "Indian/Kerguelen",
	"Gabon": "Africa/Libreville",
	"Gambia": "Africa/Banjul",
	"Georgia": "Asia/Tbilisi",
	"Ghana": "Africa/Accra",
	"Gibraltar": "Europe/Gibraltar",
	"Greece": "Europe/Athens",
	"Grenada": "America/Grenada",
	"Guadeloupe": "America/Guadeloupe",
	"Guam": "Pacific/Guam",
	"Guatemala": "America/Guatemala",
	"Guernsey": "Europe/Guernsey",
	"Guinea": "Africa/Conakry",
	"Guinea-Bissau": "Africa/Bissau",
	"Guyana": "America/Guyana",
	"Haiti": "America/Port-au-Prince",
	"Honduras": "America/Tegucigalpa",
	"Hong Kong": "Asia/Hong_Kong",
	"Hungary": "Europe/Budapest",
	"Iceland": "Atlantic/Reykjavik",
	"India": "Asia/Kolkata",
	"Iran": "Asia/Tehran",
	"Iraq": "Asia/Baghdad",
	"Ireland": "Europe/Dublin",
	"Isle of Man": "Europe/Isle_of_Man",
	"Israel": "Asia/Jerusalem",
	"Italy": "Europe/Rome",
	"Ivory Coast": "Africa/Abidjan",
	"Jamaica": "America/Jamaica",
	"Japan": "Asia/Tokyo",
	"Jersey": "Europe/Jersey",
	"Jordan": "Asia/Amman",
	"Kenya": "Africa/Nairobi",
	"Kuwait": "Asia/Kuwait",
	"Kyrgyzstan": "Asia/Bishkek",
	"Laos": "Asia/Vientiane",
	"Latvia": "Europe/Riga",
	"Lebanon": "Asia/Beirut",
	"Lesotho": "Africa/Maseru",
	"Liberia": "Africa/Monrovia",
	"Libya": "Africa/Tripoli",
	"Liechtenstein": "Europe/Vaduz",
	"Lithuania": "Europe/Vilnius",
	"Luxembourg": "Europe/Luxembourg",
	"Macao": "Asia/Macau",
	"Macedonia": "Europe/Skopje",
	"Madagascar": "Indian/Antananarivo",
	"Malawi": "Africa/Blantyre",
	"Maldives": "Indian/Maldives",
	"Mali": "Africa/Bamako",
	"Malta": "Europe/Malta",
	"Martinique": "America/Martinique",
	"Mauritania": "Africa/Nouakchott",
	"Mauritius": "Indian/Mauritius",
	"Mayotte": "Indian/Mayotte",
	"Moldova": "Europe/Chisinau",
	"Monaco": "Europe/Monaco",
	"Montenegro": "Europe/Podgorica",
	"Montserrat": "America/Montserrat",
	"Morocco": "Africa/Casablanca",
	"Mozambique": "Africa/Maputo",
	"Myanmar": "Asia/Rangoon",
	"Namibia": "Africa/Windhoek",
	"Nauru": "Pacific/Nauru",
	"Nepal": "Asia/Kathmandu",
	"Netherlands": "Europe/Amsterdam",
	"New Caledonia": "Pacific/Noumea",
	"Nicaragua": "America/Managua",
	"Niger": "Africa/Niamey",
	"Nigeria": "Africa/Lagos",
	"Niue": "Pacific/Niue",
	"Norfolk Island": "Pacific/Norfolk",
	"North Korea": "Asia/Pyongyang",
	"Northern Mariana Islands": "Pacific/Saipan",
	"Norway": "Europe/Oslo",
	"Oman": "Asia/Muscat",
	"Pakistan": "Asia/Karachi",
	"Palau": "Pacific/Palau",
	"Panama": "America/Panama",
	"Paraguay": "America/Asuncion",
	"Peru": "America/Lima",
	"Philippines": "Asia/Manila",
	"Pitcairn": "Pacific/Pitcairn",
	"Poland": "Europe/Warsaw",
	"Puerto Rico": "America/Puerto_Rico",
	"Qatar": "Asia/Qatar",
	"Republic of the Congo": "Africa/Brazzaville",
	"Reunion": "Indian/Reunion",
	"Romania": "Europe/Bucharest",
	"Rwanda": "Africa/Kigali",
	"Saint Barthélemy": "America/St_Barthelemy",
	"Saint Helena": "Atlantic/St_Helena",
	"Saint Kitts and Nevis": "America/St_Kitts",
	"Saint Lucia": "America/St_Lucia",
	"Saint Martin": "America/Marigot",
	"Saint Pierre and Miquelon": "America/Miquelon",
	"Saint Vincent and the Grenadines": "America/St_Vincent",
	"Samoa": "Pacific/Apia",
	"San Marino": "Europe/San_Marino",
	"Sao Tome and Principe": "Africa/Sao_Tome",
	"Saudi Arabia": "Asia/Riyadh",
	"Senegal": "Africa/Dakar",
	"Serbia": "Europe/Belgrade",
	"Seychelles": "Indian/Mahe",
	"Sierra Leone": "Africa/Freetown",
	"Singapore": "Asia/Singapore",
	"Sint Maarten": "America/Lower_Princes",
	"Slovakia": "Europe/Bratislava",
	"Slovenia": "Europe/Ljubljana",
	"Solomon Islands": "Pacific/Guadalcanal",
	"Somalia": "Africa/Mogadishu",
	"South Africa": "Africa/Johannesburg",
	"South Georgia and the South Sandwich Islands": "Atlantic/South_Georgia",
	"South Korea": "Asia/Seoul",
	"South Sudan": "Africa/Juba",
	"Sri Lanka": "Asia/Colombo",
	"Sudan": "Africa/Khartoum",
	"Suriname": "America/Paramaribo",
	"Svalbard and Jan Mayen": "Arctic/Longyearbyen",
	"Swaziland": "Africa/Mbabane",
	"Sweden": "Europe/Stockholm",
	"Switzerland": "Europe/Zurich",
	"Syria": "Asia/Damascus",
	"Taiwan": "Asia/Taipei",
	"Tajikistan": "Asia/Dushanbe",
	"Tanzania": "Africa/Dar_es_Salaam",
	"Thailand": "Asia/Bangkok",
	"Togo": "Africa/Lome",
	"Tokelau": "Pacific/Fakaofo",
	"Tonga": "Pacific/Tongatapu",
	"Trinidad and Tobago": "America/Port_of_Spain",
	"Tunisia": "Africa/Tunis",
	"Turkey": "Europe/Istanbul",
	"Turkmenistan": "Asia/Ashgabat",
	"Turks and Caicos Islands": "America/Grand_Turk",
	"Tuvalu": "Pacific/Funafuti",
	"U.S. Virgin Islands": "America/St_Thomas",
	"Uganda": "Africa/Kampala",
	"United Arab Emirates": "Asia/Dubai",
	"United Kingdom": "Europe/London",
	"Uruguay": "America/Montevideo",
	"Vanuatu": "Pacific/Efate",
	"Vatican": "Europe/Vatican",
	"Venezuela": "America/Caracas",
	"Vietnam": "Asia/Ho_Chi_Minh",
	"Wallis and Futuna": "Pacific/Wallis",
	"Western Sahara": "Africa/El_Aaiun",
	"Yemen": "Asia/Aden",
	"Zambia": "Africa/Lusaka",
	"Zimbabwe": "Africa/Harare",

	// --- Countries with obvious default timezone, and the weird parts ---

	"Germany": "Europe/Berlin",
	"Busingen": "Europe/Busingen",
	"Germany, Busingen": "Europe/Busingen", // alias (?)
	"Galapagos": "Pacific/Galapagos",
	"Ecuador": "America/Guayaquil",
	"Chile": "America/Santiago",
	"Easter Island": "Pacific/Easter",
	"Spain": "Europe/Madrid",
	"Portugal": "Europe/Lisbon",
	"Madeira": "Atlantic/Madeira",
	"Azores": "Atlantic/Azores",
	"Ceuta": "Africa/Ceuta",
	"Canary": "Atlantic/Canary",

	// --- Multi-zone countries ---

	// Antarctica
	"Antarctica, McMurdo": "Antarctica/McMurdo",
	"Antarctica, Rothera": "Antarctica/Rothera",
	"Antarctica, Palmer": "Antarctica/Palmer",
	"Antarctica, Mawson": "Antarctica/Mawson",
	"Antarctica, Davis": "Antarctica/Davis",
	"Antarctica, Casey": "Antarctica/Casey",
	"Antarctica, Vostok": "Antarctica/Vostok",
	"Antarctica, DumontDUrville": "Antarctica/DumontDUrville",
	"Antarctica, Syowa": "Antarctica/Syowa",
	"Antarctica, Troll": "Antarctica/Troll",
	"Antarctica, Macquarie": "Antarctica/Macquarie",

	// Argentina
	"Argentina, Buenos Aires": "America/Argentina/Buenos_Aires",
	"Argentina, Cordoba": "America/Argentina/Cordoba",
	"Argentina, Salta": "America/Argentina/Salta",
	"Argentina, Jujuy": "America/Argentina/Jujuy",
	"Argentina, Tucuman": "America/Argentina/Tucuman",
	"Argentina, Catamarca": "America/Argentina/Catamarca",
	"Argentina, La Rioja": "America/Argentina/La_Rioja",
	"Argentina, San Juan": "America/Argentina/San_Juan",
	"Argentina, Mendoza": "America/Argentina/Mendoza",
	"Argentina, San Luis": "America/Argentina/San_Luis",
	"Argentina, Rio Gallegos": "America/Argentina/Rio_Gallegos",
	"Argentina, Ushuaia": "America/Argentina/Ushuaia",

	// Australia
	"Australia, Lord Howe": "Australia/Lord_Howe",
	"Australia, Hobart": "Australia/Hobart",
	"Australia, Currie": "Australia/Currie",
	"Australia, Melbourne": "Australia/Melbourne",
	"Australia, Sydney": "Australia/Sydney",
	"Australia, Broken Hill": "Australia/Broken_Hill",
	"Australia, Brisbane": "Australia/Brisbane",
	"Australia, Lindeman": "Australia/Lindeman",
	"Australia, Adelaide": "Australia/Adelaide",
	"Australia, Darwin": "Australia/Darwin",
	"Australia, Perth": "Australia/Perth",
	"Australia, Eucla": "Australia/Eucla",

	// Brazil
	"Brazil, Noronha": "America/Noronha",
	"Brazil, Belem": "America/Belem",
	"Brazil, Fortaleza": "America/Fortaleza",
	"Brazil, Recife": "America/Recife",
	"Brazil, Araguaina": "America/Araguaina",
	"Brazil, Maceio": "America/Maceio",
	"Brazil, Bahia": "America/Bahia",
	"Brazil, Sao Paulo": "America/Sao_Paulo",
	"Brazil, Campo Grande": "America/Campo_Grande",
	"Brazil, Cuiaba": "America/Cuiaba",
	"Brazil, Santarem": "America/Santarem",
	"Brazil, Porto Velho": "America/Porto_Velho",
	"Brazil, Boa Vista": "America/Boa_Vista",
	"Brazil, Manaus": "America/Manaus",
	"Brazil, Eirunepe": "America/Eirunepe",
	"Brazil, Rio Branco": "America/Rio_Branco",

	// Canada
	"Canada, St_Johns": "America/St_Johns",
	"Canada, Halifax": "America/Halifax",
	"Canada, Glace Bay": "America/Glace_Bay",
	"Canada, Moncton": "America/Moncton",
	"Canada, Goose Bay": "America/Goose_Bay",
	"Canada, Blanc-Sablon": "America/Blanc-Sablon",
	"Canada, Toronto": "America/Toronto",
	"Canada, Nipigon": "America/Nipigon",
	"Canada, Thunder Bay": "America/Thunder_Bay",
	"Canada, Iqaluit": "America/Iqaluit",
	"Canada, Pangnirtung": "America/Pangnirtung",
	"Canada, Resolute": "America/Resolute",
	"Canada, Atikokan": "America/Atikokan",
	"Canada, Rankin Inlet": "America/Rankin_Inlet",
	"Canada, Winnipeg": "America/Winnipeg",
	"Canada, Rainy River": "America/Rainy_River",
	"Canada, Regina": "America/Regina",
	"Canada, Swift Current": "America/Swift_Current",
	"Canada, Edmonton": "America/Edmonton",
	"Canada, Cambridge Bay": "America/Cambridge_Bay",
	"Canada, Yellowknife": "America/Yellowknife",
	"Canada, Inuvik": "America/Inuvik",
	"Canada, Creston": "America/Creston",
	"Canada, Dawson Creek": "America/Dawson_Creek",
	"Canada, Vancouver": "America/Vancouver",
	"Canada, Whitehorse": "America/Whitehorse",
	"Canada, Dawson": "America/Dawson",

	// China
	"China, Shanghai": "Asia/Shanghai",
	"China, Urumqi": "Asia/Urumqi",

	// Congo
	"Congo, Kinshasa": "Africa/Kinshasa",
	"Congo, Lubumbashi": "Africa/Lubumbashi", //Democratic Republic of the

	// French Polynesia
	"French Polynesia, Tahiti": "Pacific/Tahiti",
	"French Polynesia, Marquesas": "Pacific/Marquesas",
	"French Polynesia, Gambier": "Pacific/Gambier",

	// Greenland
	"Greenland, Godthab": "America/Godthab",
	"Greenland, Danmarkshavn": "America/Danmarkshavn",
	"Greenland, Scoresbysund": "America/Scoresbysund",
	"Greenland, Thule": "America/Thule",

	// Indonesia
	"Indonesia, Jakarta": "Asia/Jakarta",
	"Indonesia, Pontianak": "Asia/Pontianak",
	"Indonesia, Makassar": "Asia/Makassar",
	"Indonesia, Jayapura": "Asia/Jayapura",

	// Kazach
	"Kazakhstan, Almaty": "Asia/Almaty",
	"Kazakhstan, Qyzylorda": "Asia/Qyzylorda",
	"Kazakhstan, Aqtobe": "Asia/Aqtobe",
	"Kazakhstan, Aqtau": "Asia/Aqtau",
	"Kazakhstan, Oral": "Asia/Oral",

	// Kiribati
	"Kiribati, Tarawa": "Pacific/Tarawa",
	"Kiribati, Enderbury": "Pacific/Enderbury",
	"Kiribati, Kiritimati": "Pacific/Kiritimati",

	// Malay
	"Malaysia, Kuala Lumpur": "Asia/Kuala_Lumpur",
	"Malaysia, Kuching": "Asia/Kuching",

	// Marshall
	"Marshall Islands, Majuro": "Pacific/Majuro",
	"Marshall Islands, Kwajalein": "Pacific/Kwajalein",

	// Mexico
	"Mexico": "America/Mexico_City", // shortcut for the most common
	"Mexico, Mexico City": "America/Mexico_City",
	"Mexico, Cancun": "America/Cancun",
	"Mexico, Merida": "America/Merida",
	"Mexico, Monterrey": "America/Monterrey",
	"Mexico, Matamoros": "America/Matamoros",
	"Mexico, Mazatlan": "America/Mazatlan",
	"Mexico, Chihuahua": "America/Chihuahua",
	"Mexico, Ojinaga": "America/Ojinaga",
	"Mexico, Hermosillo": "America/Hermosillo",
	"Mexico, Tijuana": "America/Tijuana",
	"Mexico, Santa Isabel": "America/Santa_Isabel",
	"Mexico, Bahia Banderas": "America/Bahia_Banderas",

	// Micronesia
	"Micronesia, Chuuk": "Pacific/Chuuk",
	"Micronesia, Pohnpei": "Pacific/Pohnpei",
	"Micronesia, Kosrae": "Pacific/Kosrae",

	// Mongolia
	"Mongolia, Ulaanbaatar": "Asia/Ulaanbaatar",
	"Mongolia, Hovd": "Asia/Hovd",
	"Mongolia, Choibalsan": "Asia/Choibalsan",

	// NZ
	"New Zealand, Auckland": "Pacific/Auckland",
	"New Zealand, Chatham": "Pacific/Chatham",

	// Palestina
	"Palestina, Gaza": "Asia/Gaza",
	"Palestina, Hebron": "Asia/Hebron",

	// Papua
	"Papua New Guinea, Port_Moresby": "Pacific/Port_Moresby",
	"Papua New Guinea, Bougainville": "Pacific/Bougainville",

	// Russia
	"Russia, Kaliningrad": "Europe/Kaliningrad",
	"Russia, Moscow": "Europe/Moscow",
	"Russia, Simferopol": "Europe/Simferopol",
	"Russia, Volgograd": "Europe/Volgograd",
	"Russia, Samara": "Europe/Samara",
	"Russia, Yekaterinburg": "Asia/Yekaterinburg",
	"Russia, Omsk": "Asia/Omsk",
	"Russia, Novosibirsk": "Asia/Novosibirsk",
	"Russia, Novokuznetsk": "Asia/Novokuznetsk",
	"Russia, Krasnoyarsk": "Asia/Krasnoyarsk",
	"Russia, Irkutsk": "Asia/Irkutsk",
	"Russia, Chita": "Asia/Chita",
	"Russia, Yakutsk": "Asia/Yakutsk",
	"Russia, Khandyga": "Asia/Khandyga",
	"Russia, Vladivostok": "Asia/Vladivostok",
	"Russia, Sakhalin": "Asia/Sakhalin",
	"Russia, Ust-Nera": "Asia/Ust-Nera",
	"Russia, Magadan": "Asia/Magadan",
	"Russia, Srednekolymsk": "Asia/Srednekolymsk",
	"Russia, Kamchatka": "Asia/Kamchatka",
	"Russia, Anadyr": "Asia/Anadyr",

	// Ukraine
	"Ukraine, Kiev": "Europe/Kiev",
	"Ukraine, Uzhgorod": "Europe/Uzhgorod",
	"Ukraine, Zaporozhye": "Europe/Zaporozhye",

	// Uzbekistan
	"Uzbekistan, Samarkand": "Asia/Samarkand",
	"Uzbekistan, Tashkent": "Asia/Tashkent",

	// USA
	"United States, New York": "America/New_York",
	"United States, Michigan - Detroit": "America/Detroit",
	"United States, Michigan - Menominee": "America/Menominee",
	"United States, Kentucky - Louisville": "America/Kentucky/Louisville",
	"United States, Kentucky - Monticello": "America/Kentucky/Monticello",
	"United States, Indiana - Indianapolis": "America/Indiana/Indianapolis",
	"United States, Indiana - Vincennes": "America/Indiana/Vincennes",
	"United States, Indiana - Winamac": "America/Indiana/Winamac",
	"United States, Indiana - Marengo": "America/Indiana/Marengo",
	"United States, Indiana - Petersburg": "America/Indiana/Petersburg",
	"United States, Indiana - Vevay": "America/Indiana/Vevay",
	"United States, Indiana - Tell City": "America/Indiana/Tell_City",
	"United States, Indiana - Knox": "America/Indiana/Knox",
	"United States, Illinois": "America/Chicago",
	"United States, North Dakota - Center": "America/North_Dakota/Center",
	"United States, North Dakota - New Salem": "America/North_Dakota/New_Salem",
	"United States, North Dakota - Beulah": "America/North_Dakota/Beulah",
	"United States, Colorado": "America/Denver",
	"United States, Idaho": "America/Boise",
	"United States, Arizona": "America/Phoenix",
	"United States, California": "America/Los_Angeles",
	"United States, Alaska - Metlakatla": "America/Metlakatla",
	"United States, Alaska - Anchorage": "America/Anchorage",
	"United States, Alaska - Juneau": "America/Juneau",
	"United States, Alaska - Sitka": "America/Sitka",
	"United States, Alaska - Yakutat": "America/Yakutat",
	"United States, Alaska - Nome": "America/Nome",
	"United States, Alaska - Adak": "America/Adak",
	"United States, Hawaii": "Pacific/Honolulu",

	// The same as above, but with "USA"
	"USA, New York": "America/New_York",
	"USA, Michigan - Detroit": "America/Detroit",
	"USA, Michigan - Menominee": "America/Menominee",
	"USA, Kentucky - Louisville": "America/Kentucky/Louisville",
	"USA, Kentucky - Monticello": "America/Kentucky/Monticello",
	"USA, Indiana - Indianapolis": "America/Indiana/Indianapolis",
	"USA, Indiana - Vincennes": "America/Indiana/Vincennes",
	"USA, Indiana - Winamac": "America/Indiana/Winamac",
	"USA, Indiana - Marengo": "America/Indiana/Marengo",
	"USA, Indiana - Petersburg": "America/Indiana/Petersburg",
	"USA, Indiana - Vevay": "America/Indiana/Vevay",
	"USA, Indiana - Tell City": "America/Indiana/Tell_City",
	"USA, Indiana - Knox": "America/Indiana/Knox",
	"USA, Illinois": "America/Chicago",
	"USA, North Dakota - Center": "America/North_Dakota/Center",
	"USA, North Dakota - New Salem": "America/North_Dakota/New_Salem",
	"USA, North Dakota - Beulah": "America/North_Dakota/Beulah",
	"USA, Colorado": "America/Denver",
	"USA, Idaho": "America/Boise",
	"USA, Arizona": "America/Phoenix",
	"USA, California": "America/Los_Angeles",
	"USA, Alaska - Metlakatla": "America/Metlakatla",
	"USA, Alaska - Anchorage": "America/Anchorage",
	"USA, Alaska - Juneau": "America/Juneau",
	"USA, Alaska - Sitka": "America/Sitka",
	"USA, Alaska - Yakutat": "America/Yakutat",
	"USA, Alaska - Nome": "America/Nome",
	"USA, Alaska - Adak": "America/Adak",
	"USA, Hawaii": "Pacific/Honolulu",
	"Hawaii": "Pacific/Honolulu", // alias


	// --- Aliases for big time zones ---
	"USA, Eastern Time": "America/New_York",
	"USA, Central Time": "America/Chicago",
	"USA, Mountain Time": "America/Denver",
	"USA, Pacific Time": "America/Los_Angeles",

	"GMT": "Africa/Dakar", // senegal
	"UTC": "Africa/Dakar", // senegal

	"CET": "Europe/Berlin",
	"CEST": "Europe/Berlin" // it'll be the same
};
var people = [
	{name: '@MightyPork', tz: 'Czech Republic', color: '#EAF425'},
	{name: '@lastofavari', tz: 'Belarus', color: '#4ECEFF'},
	{name: '@Locercus', tz: 'Denmark', color: 'lime'},
	{name: '@Creeper32605', tz: 'Denmark', color: 'teal'},
	{name: '@JesperJacoben', tz: 'Denmark', color: 'skyblue'},
	{name: '@Jaredlll08', tz: 'South Africa', color: 'orange'},
	{name: '@ciba43', tz: 'Latvia', color: 'cyan'},
	{name: '@coolsquid_', tz: 'Norway', color: 'purple'},
	{name: '@TheBadFame', tz: 'Mexico', color: '#329AFF'},
	{name: '@ImReble548', tz: 'USA, Mountain Time', color: '#69E79E'},
	{name: '@Deli731234', tz: 'USA, Pacific Time', color: '#F57126'},
	{name: '@eevblog', tz: 'Australia, Sydney', color: '#E63E3F'},
	{name: 'dummy1', tz: 'Asia/Shanghai', color: 'green'},
	{name: 'dummy2', tz: 'Hawaii', color: 'green'},
	{name: 'dummy2', tz: 'Hawaii', color: 'green'},
	{name: 'dummy2', tz: 'Hawaii', color: 'green'},
	{name: 'dummy2', tz: 'Hawaii', color: 'green'},
	{name: 'dummy2', tz: 'Hawaii', color: 'green'},
	{name: 'dummy2', tz: 'Hawaii', color: 'green'},
	{name: 'Thick Dummy 3', tz: 'America/Thule', color: 'green'},
	{name: 'Long Dummy 4', tz: 'GMT', color: 'green'}
];
/**
 * Convert hour to angle (deg)
 *
 * @param h hour 0..24
 * @returns {number} angle in degrees
 */
function hour2angle(h) {
	var a = (18 - h) * 15;
	while (a < 0) a += 360;
	return a;
}


/**
 * Position an element using polar coordinates
 *
 * @param element
 * @param angle    degrees
 * @param distance radius (in "unit")
 * @param octant what octant it's in (determines from where we're positioning)
 */
function positionAt(element, angle, distance, octant) {
	if (typeof octant === 'undefined') {
		octant = 0;
	}

	var xx = distance * Math.cos((angle / 180) * Math.PI);
	var yy = distance * Math.sin((angle / 180) * Math.PI);

	switch (octant) {
		case 0:
		case 1:
		case 7:
			element.style.left = (50 + xx) + '%';
			element.style.top = (50 - yy) + '%';
			break;

		case 2:
		case 3:
		case 4:
			element.style.right = (50 - xx) + '%';
			element.style.top = (50 - yy) + '%';
			break;

		case 5:
			element.style.right = (50 - xx) + '%';
			element.style.bottom = (50 + yy) + '%';
			break;

		case 6:
			element.style.left = (50 + xx) + '%';
			element.style.bottom = (50 + yy) + '%';
			break;
	}
}


/**
 * Determine if person is in prev / next day.
 * Takes moment.js instances as arguments.
 *
 * Returns -1, 0, 1 if "there"-day is before, at, or after "here".
 */
function mmtDayCompare(here, there) {

	// local
	var d0 = here.dayOfYear();
	var y0 = here.year();

	// remote
	var d1 = there.dayOfYear();
	var y1 = there.year();

	if (y1 < y0) {
		return -1;
	} else if (y1 > y0) {
		return 1;
	} else {
		if (d1 < d0) {
			return -1;
		} else if (d1 > d0) {
			return 1;
		}
	}

	return 0;
}
// TimeZone resolving utilities


/** Work out timezone from a name (country name, timezone name etc) */
function resolveTZ(tz) {
	// Resolve, if it's alias
	if (tz in tz_aliases) {
		var old = tz;
		tz = tz_aliases[tz];

		console.log('TZ "' + old + '" resolved as "' + tz + '"');
	}

	// Check if it's valid for Moment.js
	if (!moment.tz.zone(tz)) {
		return false;
	}
	return tz;
}


/** Get proper timezone name for a person */
function getTimezoneForPerson(obj) {
	// Resolve timezone, cache result in the object.
	var tz = obj._tz_cached;
	if (!tz) {
		tz = obj._tz_cached = resolveTZ(obj.tz);
	}

	if (tz === false) {
		console.error('Invalid timezone for ' + obj.name);
		return false;
	}

	return tz;
}


/** Resolve current time for a person - convert to seconds since midnight */
function getTimeForPerson(obj) {
	var tz = getTimezoneForPerson(obj);
	if (tz === false) return false;

	// Create a Moment and format it
	var mmt = moment().tz(tz);

	// Get pieces of time, convert to seconds
	return mmt.hour() * 3600 + mmt.minute() * 60 + mmt.second();
}
var disc;
// req. global arrays: tz_aliases, people.


/** Initialize the app */
function init() {

	disc = document.getElementById('disc');
	buildClockMarks();

	update();

	// refresh the disc every N seconds
//	setInterval(update, 1000 * 10);
//	setInterval(changeColon, 1000);

	// force refresh after tab gets focused
//	window.onfocus = update;
}


/** Build the hour numbers */
function buildClockMarks() {
	// The clock marks
	for (var i = 0; i < 24; i++) {
		// mark div
		var mark = document.createElement('div');
		mark.classList.add('mark');
		mark.classList.add('hour-' + i);

		if (i == 0 || i == 6 || i == 12 || i == 18) {
			mark.classList.add('sixth');
		}

		mark.textContent = '' + i;

		var angle = hour2angle(i);
		positionAt(mark, angle, 45);
		disc.appendChild(mark);
	}
}


/** Toggle colon visibility each second (uses sec % 2) */
function changeColon() {
	var s = (new Date()).getSeconds() % 2;

	document.getElementById('loctimecolon').style.opacity = s ? 1 : 0;
}


/** Update people positions & time */
function update() {
	redrawPeople();
	redrawTime();
}


/** Redraw people (actually deletes and re-adds them) */
function redrawPeople() {
	// Delete all old stuff
	var x = document.querySelectorAll('.bullet, .person, .people-list');
	for (var i in x) {
		if (x.hasOwnProperty(i)) {
			var e = x[i];
			if (!e || !e.parentNode) continue;

			e.parentNode.removeChild(e);
		}
	}

	buildPeople();
}


/** Update the local time display */
function redrawTime() {
	// redraw time, wrap colon in span
	var mmt = moment();

	// need zero-padded minutes!
	var parts = mmt.format('H:mm').split(':');
	document.getElementById('localtime').innerHTML = parts[0] + '<span id="loctimecolon">:</span>' + parts[1];

	changeColon();
}


/** Build all people labels */
function buildPeople() {
	var resolved = [];

	// Group people with similar time
	people.forEach(function (obj) {
		var t = getTimeForPerson(obj);
		if (t === false) return; // fail in TZ?

		obj._t = t; // store time in the object for further use

		var placed;
		resolved.some(function (v) {
			// If the time is very close
			// merge
			if (Math.abs(v.t - t) < 60) {
				v.p.push(obj);
				placed = true;
				return true;
			}
		});

		if (!placed) {
			resolved.push({t: t, p: [obj]});
		}
	});

	resolved.forEach(function (x) {
		console.log('Time ' + x.t + ', people #: ' + x.p.length);
		addPeopleAtTime(x.t, x.p);
	});
}


/** Add a bunch of people at specified time (s) */
function addPeopleAtTime(secs, people) {
	var first = people[0];

	// Convert to hours & to degrees
	var t = secs / 3600;
	var angle = hour2angle(t);

	var octant = Math.floor(angle / 45);
	var quadrant = Math.floor(octant / 2);
	var is_up = quadrant < 2;
	var is_left = (quadrant > 0 && quadrant < 3);

	console.log('angle = ' + angle + ', octant ' + octant + ', quadrant ' + quadrant + ', up ' + is_up + ', left ' + is_left);

	// Create a bullet
	var bu = document.createElement('div');
	bu.className = 'bullet';
	bu.style.backgroundColor = first.color;
	positionAt(bu, angle, 50.2);
	disc.appendChild(bu);

	// Create a label

	// make it a link if it's twitter name
	var la = document.createElement('div');
	la.classList.add('people-list');


	// add location classes
	la.classList.add(is_left ? 'left' : 'right');
	la.classList.add(is_up ? 'up' : 'down');

	la.classList.add('quad' + quadrant);
	la.classList.add('oct' + octant);


	// Determine if this is in prev / next day
	var here = moment();
	var there = moment().tz(getTimezoneForPerson(first));
	var i = mmtDayCompare(here, there);
	var clz = (i == -1) ? 'day-prev' : (i == 1) ? 'day-next' : null;
	if (clz !== null) {
		la.classList.add(clz);
		bu.classList.add(clz);
	}

	la.innerHTML = first.name;
	if (people.length > 1) {
		la.classList.add('multiple');
		la.classList.add('count-'+people.length);
		la.innerHTML += ' + ' + (people.length - 1);

		for (var j = 1; j < people.length; j++) {
			la.innerHTML += '<br>' + people[j].name;
		}
	}
	la.title = there.format('H:mm, MMM Do YYYY'); // tooltip
	la.style.color = first.color;

	positionAt(la, angle, 53.5, octant); // label distance
	disc.appendChild(la);
}


/**
 * Add a person to the clock.
 *
 * @param obj info about the person (name, tz, color)
 */
function addPerson(obj) {
	var secs = obj._t;

	// Convert to hours & to degrees
	var t = (secs / 3600);
	var angle = hour2angle(t);


	// Create a bullet
	var bu = document.createElement('div');
	bu.className = 'bullet';
	bu.style.backgroundColor = obj.color;
	positionAt(bu, angle, 50.2);
	disc.appendChild(bu);


	// Create a label

	// make it a link if it's twitter name
	var twi = (obj.name.indexOf('@') === 0);
	var la = document.createElement(twi ? 'a' : 'span');

	if (twi) {
		la.href = 'https://twitter.com/' + obj.name;
		la.classList.add('twitter-link');
	}

	la.classList.add('person');
	la.classList.add((t < 12) ? 'left' : 'right'); // left and right side of the clock


	// Determine if person is in prev / next day
	var here = moment();
	var there = moment().tz(getTimezoneForPerson(obj));
	var i = mmtDayCompare(here, there);
	var clz = (i == -1) ? 'day-prev' : (i == 1) ? 'day-next' : null;

	if (clz !== null) {
		la.classList.add(clz);
		bu.classList.add(clz);
	}


	la.textContent = obj.name;
	la.title = there.format('H:mm, MMM Do YYYY') + ' (' + obj.tz + ')'; // tooltip
	la.style.color = obj.color;

	positionAt(la, angle, 53.5); // label distance
	disc.appendChild(la);
}

