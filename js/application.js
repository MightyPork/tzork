//////////////////////////////////////////////////////////////////////////////
// THIS IS A GENERATED FILE, CHANGES WILL BE LOST!!!                        //
//                                                                          //
// Please edit files in js/source, and then run 'make js' in project root.  //
//////////////////////////////////////////////////////////////////////////////

// Names of all timezones
var tz_names = [
	"Africa/Abidjan",
	"Africa/Accra",
	"Africa/Algiers",
	"Africa/Bissau",
	"Africa/Cairo",
	"Africa/Casablanca",
	"Africa/Ceuta",
	"Africa/El_Aaiun",
	"Africa/Johannesburg",
	"Africa/Khartoum",
	"Africa/Lagos",
	"Africa/Maputo",
	"Africa/Monrovia",
	"Africa/Nairobi",
	"Africa/Ndjamena",
	"Africa/Tripoli",
	"Africa/Tunis",
	"Africa/Windhoek",
	"America/Adak",
	"America/Anchorage",
	"America/Araguaina",
	"America/Argentina/Buenos_Aires",
	"America/Argentina/Catamarca",
	"America/Argentina/Cordoba",
	"America/Argentina/Jujuy",
	"America/Argentina/La_Rioja",
	"America/Argentina/Mendoza",
	"America/Argentina/Rio_Gallegos",
	"America/Argentina/Salta",
	"America/Argentina/San_Juan",
	"America/Argentina/San_Luis",
	"America/Argentina/Tucuman",
	"America/Argentina/Ushuaia",
	"America/Asuncion",
	"America/Atikokan",
	"America/Bahia",
	"America/Bahia_Banderas",
	"America/Barbados",
	"America/Belem",
	"America/Belize",
	"America/Blanc-Sablon",
	"America/Boa_Vista",
	"America/Bogota",
	"America/Boise",
	"America/Cambridge_Bay",
	"America/Campo_Grande",
	"America/Cancun",
	"America/Caracas",
	"America/Cayenne",
	"America/Chicago",
	"America/Chihuahua",
	"America/Costa_Rica",
	"America/Creston",
	"America/Cuiaba",
	"America/Curacao",
	"America/Danmarkshavn",
	"America/Dawson",
	"America/Dawson_Creek",
	"America/Denver",
	"America/Detroit",
	"America/Edmonton",
	"America/Eirunepe",
	"America/El_Salvador",
	"America/Fortaleza",
	"America/Glace_Bay",
	"America/Godthab",
	"America/Goose_Bay",
	"America/Grand_Turk",
	"America/Guatemala",
	"America/Guayaquil",
	"America/Guyana",
	"America/Halifax",
	"America/Havana",
	"America/Hermosillo",
	"America/Indiana/Indianapolis",
	"America/Indiana/Knox",
	"America/Indiana/Marengo",
	"America/Indiana/Petersburg",
	"America/Indiana/Tell_City",
	"America/Indiana/Vevay",
	"America/Indiana/Vincennes",
	"America/Indiana/Winamac",
	"America/Inuvik",
	"America/Iqaluit",
	"America/Jamaica",
	"America/Juneau",
	"America/Kentucky/Louisville",
	"America/Kentucky/Monticello",
	"America/La_Paz",
	"America/Lima",
	"America/Los_Angeles",
	"America/Maceio",
	"America/Managua",
	"America/Manaus",
	"America/Martinique",
	"America/Matamoros",
	"America/Mazatlan",
	"America/Menominee",
	"America/Merida",
	"America/Metlakatla",
	"America/Mexico_City",
	"America/Miquelon",
	"America/Moncton",
	"America/Monterrey",
	"America/Montevideo",
	"America/Nassau",
	"America/New_York",
	"America/Nipigon",
	"America/Nome",
	"America/Noronha",
	"America/North_Dakota/Beulah",
	"America/North_Dakota/Center",
	"America/North_Dakota/New_Salem",
	"America/Ojinaga",
	"America/Panama",
	"America/Pangnirtung",
	"America/Paramaribo",
	"America/Phoenix",
	"America/Port-au-Prince",
	"America/Port_of_Spain",
	"America/Porto_Velho",
	"America/Puerto_Rico",
	"America/Rainy_River",
	"America/Rankin_Inlet",
	"America/Recife",
	"America/Regina",
	"America/Resolute",
	"America/Rio_Branco",
	"America/Santa_Isabel",
	"America/Santarem",
	"America/Santiago",
	"America/Santo_Domingo",
	"America/Sao_Paulo",
	"America/Scoresbysund",
	"America/Sitka",
	"America/St_Johns",
	"America/Swift_Current",
	"America/Tegucigalpa",
	"America/Thule",
	"America/Thunder_Bay",
	"America/Tijuana",
	"America/Toronto",
	"America/Vancouver",
	"America/Whitehorse",
	"America/Winnipeg",
	"America/Yakutat",
	"America/Yellowknife",
	"Antarctica/Casey",
	"Antarctica/Davis",
	"Antarctica/DumontDUrville",
	"Antarctica/Macquarie",
	"Antarctica/Mawson",
	"Antarctica/Palmer",
	"Antarctica/Rothera",
	"Antarctica/Syowa",
	"Antarctica/Troll",
	"Antarctica/Vostok",
	"Asia/Almaty",
	"Asia/Amman",
	"Asia/Anadyr",
	"Asia/Aqtau",
	"Asia/Aqtobe",
	"Asia/Ashgabat",
	"Asia/Baghdad",
	"Asia/Baku",
	"Asia/Bangkok",
	"Asia/Beirut",
	"Asia/Bishkek",
	"Asia/Brunei",
	"Asia/Chita",
	"Asia/Choibalsan",
	"Asia/Colombo",
	"Asia/Damascus",
	"Asia/Dhaka",
	"Asia/Dili",
	"Asia/Dubai",
	"Asia/Dushanbe",
	"Asia/Gaza",
	"Asia/Hebron",
	"Asia/Ho_Chi_Minh",
	"Asia/Hong_Kong",
	"Asia/Hovd",
	"Asia/Irkutsk",
	"Asia/Jakarta",
	"Asia/Jayapura",
	"Asia/Jerusalem",
	"Asia/Kabul",
	"Asia/Kamchatka",
	"Asia/Karachi",
	"Asia/Kathmandu",
	"Asia/Khandyga",
	"Asia/Kolkata",
	"Asia/Krasnoyarsk",
	"Asia/Kuala_Lumpur",
	"Asia/Kuching",
	"Asia/Macau",
	"Asia/Magadan",
	"Asia/Makassar",
	"Asia/Manila",
	"Asia/Nicosia",
	"Asia/Novokuznetsk",
	"Asia/Novosibirsk",
	"Asia/Omsk",
	"Asia/Oral",
	"Asia/Pontianak",
	"Asia/Pyongyang",
	"Asia/Qatar",
	"Asia/Qyzylorda",
	"Asia/Rangoon",
	"Asia/Riyadh",
	"Asia/Sakhalin",
	"Asia/Samarkand",
	"Asia/Seoul",
	"Asia/Shanghai",
	"Asia/Singapore",
	"Asia/Srednekolymsk",
	"Asia/Taipei",
	"Asia/Tashkent",
	"Asia/Tbilisi",
	"Asia/Tehran",
	"Asia/Thimphu",
	"Asia/Tokyo",
	"Asia/Ulaanbaatar",
	"Asia/Urumqi",
	"Asia/Ust-Nera",
	"Asia/Vladivostok",
	"Asia/Yakutsk",
	"Asia/Yekaterinburg",
	"Asia/Yerevan",
	"Atlantic/Azores",
	"Atlantic/Bermuda",
	"Atlantic/Canary",
	"Atlantic/Cape_Verde",
	"Atlantic/Faroe",
	"Atlantic/Madeira",
	"Atlantic/Reykjavik",
	"Atlantic/South_Georgia",
	"Atlantic/Stanley",
	"Australia/Adelaide",
	"Australia/Brisbane",
	"Australia/Broken_Hill",
	"Australia/Currie",
	"Australia/Darwin",
	"Australia/Eucla",
	"Australia/Hobart",
	"Australia/Lindeman",
	"Australia/Lord_Howe",
	"Australia/Melbourne",
	"Australia/Perth",
	"Australia/Sydney",
	"Europe/Amsterdam",
	"Europe/Andorra",
	"Europe/Athens",
	"Europe/Belgrade",
	"Europe/Berlin",
	"Europe/Brussels",
	"Europe/Bucharest",
	"Europe/Budapest",
	"Europe/Chisinau",
	"Europe/Copenhagen",
	"Europe/Dublin",
	"Europe/Gibraltar",
	"Europe/Helsinki",
	"Europe/Istanbul",
	"Europe/Kaliningrad",
	"Europe/Kiev",
	"Europe/Lisbon",
	"Europe/London",
	"Europe/Luxembourg",
	"Europe/Madrid",
	"Europe/Malta",
	"Europe/Minsk",
	"Europe/Monaco",
	"Europe/Moscow",
	"Europe/Oslo",
	"Europe/Paris",
	"Europe/Prague",
	"Europe/Riga",
	"Europe/Rome",
	"Europe/Samara",
	"Europe/Simferopol",
	"Europe/Sofia",
	"Europe/Stockholm",
	"Europe/Tallinn",
	"Europe/Tirane",
	"Europe/Uzhgorod",
	"Europe/Vienna",
	"Europe/Vilnius",
	"Europe/Volgograd",
	"Europe/Warsaw",
	"Europe/Zaporozhye",
	"Europe/Zurich",
	"Indian/Chagos",
	"Indian/Christmas",
	"Indian/Cocos",
	"Indian/Kerguelen",
	"Indian/Mahe",
	"Indian/Maldives",
	"Indian/Mauritius",
	"Indian/Reunion",
	"Pacific/Apia",
	"Pacific/Auckland",
	"Pacific/Bougainville",
	"Pacific/Chatham",
	"Pacific/Chuuk",
	"Pacific/Easter",
	"Pacific/Efate",
	"Pacific/Enderbury",
	"Pacific/Fakaofo",
	"Pacific/Fiji",
	"Pacific/Funafuti",
	"Pacific/Galapagos",
	"Pacific/Gambier",
	"Pacific/Guadalcanal",
	"Pacific/Guam",
	"Pacific/Honolulu",
	"Pacific/Kiritimati",
	"Pacific/Kosrae",
	"Pacific/Kwajalein",
	"Pacific/Majuro",
	"Pacific/Marquesas",
	"Pacific/Nauru",
	"Pacific/Niue",
	"Pacific/Norfolk",
	"Pacific/Noumea",
	"Pacific/Pago_Pago",
	"Pacific/Palau",
	"Pacific/Pitcairn",
	"Pacific/Pohnpei",
	"Pacific/Port_Moresby",
	"Pacific/Rarotonga",
	"Pacific/Tahiti",
	"Pacific/Tarawa",
	"Pacific/Tongatapu",
	"Pacific/Wake",
	"Pacific/Wallis"
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
	"UK": "Europe/London",
	"GB": "Europe/London",
	"Great Britain": "Europe/London",

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
	{
		"name": "@emmablackery",
		"tz": "United Kingdom",
		"color": "#F431A9"
	},
	{
		"name": "@thetomska",
		"tz": "United Kingdom",
		"color": "#5BDFA8"
	},
	{
		"name": "@MightyPork",
		"tz": "Europe/Prague",
		"color": "orange"
	},
	{
		"name": "Pacific Time",
		"tz": "USA, Pacific Time",
		"color": "#B2FF5D"
	},
	{
		"name": "Mountain Time",
		"tz": "USA, Mountain Time",
		"color": "#EAFF5D"
	},
	{
		"name": "Central Time",
		"tz": "USA, Central Time",
		"color": "#FFD55D"
	},
	{
		"name": "Eastern Time",
		"tz": "USA, Eastern Time",
		"color": "#FFA55D"
	},
	{
		"name": "Москва",
		"tz": "Москва",
		"color": "red"
	},
	{
		"name": "Sydney",
		"tz": "Australia/Sydney",
		"color": "#36CBFF"
	},
	{
		"name": "Athens",
		"tz": "Athens",
		"color": "#87E0FF"
	},
	{
		"name": "@pontifex",
		"tz": "Vatican",
		"color": "white"
	},
	{
		"name": "@potus",
		"tz": "Washington DC",
		"color": "skyblue"
	},
	{
		"name": "@BritishMonarchy",
		"tz": "United Kingdom",
		"color": "#D3213D"
	},
	{
		"name": "Christmas Island",
		"tz": "Cristmas Island",
		"color": "teal"
	},
	{
		"name": "Grand Canyon",
		"tz": "Grand Canyon",
		"color": "#DEA84B"
	}
];
function callAjax(url, success, failure) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status >= 200 && request.status < 400) {
				if (typeof success == 'function')
					success(request.responseText);
			} else {
				// We reached our target server, but it returned an error
				if (typeof failure == 'function')
					failure(xhr.status)
			}
		}
	};

	request.onError = function () {
		// There was a connection error of some sort
		if (typeof failure == 'function')
			failure(-1);
	};

	//console.log('request sent');

	request.send();
}
function LocalRepository() {}

LocalRepository.prototype.load = function() {

	var profiles = localStorage['profiles'];

	if (typeof profiles != 'undefined') {
		try {
			this.profiles = JSON.parse(profiles);
		} catch (e) {
			console.error('Error when parsing profiles array from localstorage', e);
		}
	} else {
		this.profiles = [];
	}

	var config = localStorage['config'];

};
// TimeZone resolving utilities

(function () {

	/** Load people array & prepare people for rendering */
	function loadPeopleArray(onDone) {
		// Try to load from localstorage
		var localPeople = localStorage['people'];
		if (typeof localPeople != 'undefined') {
			try {
				people = JSON.parse(localPeople);
			} catch (e) {
				console.error('Error when parsing people array from localstorage', e);
			}
		}

		resolvePeopleTimezones(people, onDone);
	}


	var people_loading = 0;

	function resolvePeopleTimezones(people, onDone) {
		//people_loading = 0;

		// Parse timezones, mark invalid people
		people.forEach(function (obj) {
			obj._valid = true;

			// check if person valid
			var bad = false;
			['name', 'color', 'tz'].forEach(function (e) {
				if (typeof(obj[e]) == 'undefined') {
					console.error('Missing "' + e + '" field in person object', obj);
					bad = true;
				}
			});
			if (bad) {
				obj._valid = false; // mark as bad
				return;
			}

			people_loading++;
			resolveTimezone(obj);
		});

		var probe = function () {
			//console.log('probe');

			if (people_loading <= 0) {
				console.log('LOADING DONE');
				onDone();
				return;
			}

			setTimeout(probe, 10);
		};

		// launch probing
		probe();
	}


	var last_google_call_timestamp = 0;

	/** Work out timezone from a name (country name, timezone name etc) */
	function resolveTimezone(obj) {
		obj._tz_cached = obj.tz;

		// Resolve, if it's alias
		if (obj.tz in tz_aliases) {
			obj._tz_cached = tz_aliases[obj.tz];
			console.log('TZ "' + obj.tz + '" resolved as "' + obj._tz_cached + '"');
		}

		// Check if it's valid for Moment.js
		if (moment.tz.zone(obj._tz_cached)) {
			people_loading--; // valid
			return;
		}

		// Ask Google what it is
		scheduleGoogleReq(obj);
	}

	// Must not poll the GEO api faster than 10x per second
	function scheduleGoogleReq(obj) {
		var elapsed = (Date.now() - last_google_call_timestamp);
		var t = Math.max(0, (110 - elapsed));

		//console.log('Scheduling Google request in ' + t + 'ms');

		if (t == 0) {
			last_google_call_timestamp = Date.now();
			getTimezoneFromGoogleApis(obj);
			return;
		}

		setTimeout(function () {
			//console.log('GOOGLE REQUEST NOW');
			scheduleGoogleReq(obj);
		}, t);
	}


	function getTimezoneFromGoogleApis(obj) {
		var url1 = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + encodeURIComponent(obj.tz);
		callAjax(url1, function (resp) {
			try {
				var rj = JSON.parse(resp);
				console.log('Reply from getAPI:', rj);

				if (rj.status === 'OK') {

					// we got something
					console.log('resp. is OK');

					var results = rj.results;
					console.log(results);

					if (results.length > 1) {
						console.error('WARNING: Google found multiple matches. Try to be more specific at "' + obj.tz + '"');
					}

					var lat = results[0].geometry.location.lat;
					var lon = results[0].geometry.location.lng;

					var timestamp = Math.floor(Date.now() / 1000);

					// Get TZ for location
					var url2 = "https://maps.googleapis.com/maps/api/timezone/json?location=" + lat + "," + lon + "&timestamp=" + timestamp + "&sensor=false";
					callAjax(url2, function (resp) {
						console.log('Reply from tzAPI: ' + resp);

						try {
							var rj = JSON.parse(resp);
							console.log('Reply from Google:', rj);

							if (rj.status === 'OK') {
								console.log('Resolved TZ as ' + rj.timeZoneId);
								obj._tz_cached = rj.timeZoneId;
							} else {
								obj._valid = false;
							}

						} catch (e) {
							console.log(e);
							obj._valid = false;
						}

						people_loading--; // final

					}, function (resp) {
						console.log('FAIL tzAPI: ' + resp);
						obj._valid = false;
						people_loading--; // final, fail
					});

				} else {
					obj._valid = false;
					people_loading--; // final, fail
				}

			} catch (e) {
				console.log(e);
				obj._valid = false;

				people_loading--; // final, fail
			}

		}, function (resp) {
			console.log('FAIL geoAPI: ' + resp);
			obj._valid = false;
			people_loading--; // final, fail
		});
	}

	// Public functions
	window.loadPeopleArray = loadPeopleArray;
	window.resolvePeopleTimezones = resolvePeopleTimezones;
})();


/** Get proper timezone name for a person */
function getTimezoneForPerson(obj) {
	// Resolve timezone, cache result in the object.
	return obj._tz_cached;
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
if (!Date.now) {
	Date.now = function() { return new Date().getTime(); }
}

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
function momentDayCompare(here, there) {

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



/** Make <tab> key work properly in textareas */
function fixTextareaTabKey() {
	var textareas = document.getElementsByTagName('textarea');
	var count = textareas.length;
	for (var i = 0; i < count; i++) {
		textareas[i].onKeyDown = function (e) {
			if (e.keyCode == 9 || e.which == 9) {
				e.preventDefault();
				var s = this.selectionStart;
				this.value = this.value.substring(0, this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
				this.selectionEnd = s + 1;
			}
		}
	}
}
// TimeZone resolving utilities

(function () {

	/** Load people array & prepare people for rendering */
	function loadPeopleArray(onDone) {
		// Try to load from localstorage
		var localPeople = localStorage['people'];
		if (typeof localPeople != 'undefined') {
			try {
				people = JSON.parse(localPeople);
			} catch (e) {
				console.error('Error when parsing people array from localstorage', e);
			}
		}

		resolvePeopleTimezones(people, onDone);
	}


	var people_loading = 0;

	function resolvePeopleTimezones(people, onDone) {
		//people_loading = 0;

		// Parse timezones, mark invalid people
		people.forEach(function (obj) {
			obj._valid = true;

			// check if person valid
			var bad = false;
			['name', 'color', 'tz'].forEach(function (e) {
				if (typeof(obj[e]) == 'undefined') {
					console.error('Missing "' + e + '" field in person object', obj);
					bad = true;
				}
			});
			if (bad) {
				obj._valid = false; // mark as bad
				return;
			}

			people_loading++;
			resolveTimezone(obj);
		});

		var probe = function () {
			//console.log('probe');

			if (people_loading <= 0) {
				console.log('LOADING DONE');
				onDone();
				return;
			}

			setTimeout(probe, 10);
		};

		// launch probing
		probe();
	}


	var last_google_call_timestamp = 0;

	/** Work out timezone from a name (country name, timezone name etc) */
	function resolveTimezone(obj) {
		obj._tz_cached = obj.tz;

		// Resolve, if it's alias
		if (obj.tz in tz_aliases) {
			obj._tz_cached = tz_aliases[obj.tz];
			console.log('TZ "' + obj.tz + '" resolved as "' + obj._tz_cached + '"');
		}

		// Check if it's valid for Moment.js
		if (moment.tz.zone(obj._tz_cached)) {
			people_loading--; // valid
			return;
		}

		// Ask Google what it is
		scheduleGoogleReq(obj);
	}

	// Must not poll the GEO api faster than 10x per second
	function scheduleGoogleReq(obj) {
		var elapsed = (Date.now() - last_google_call_timestamp);
		var t = Math.max(0, (110 - elapsed));

		//console.log('Scheduling Google request in ' + t + 'ms');

		if (t == 0) {
			last_google_call_timestamp = Date.now();
			getTimezoneFromGoogleApis(obj);
			return;
		}

		setTimeout(function () {
			//console.log('GOOGLE REQUEST NOW');
			scheduleGoogleReq(obj);
		}, t);
	}


	function getTimezoneFromGoogleApis(obj) {
		var url1 = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + encodeURIComponent(obj.tz);
		callAjax(url1, function (resp) {
			try {
				var rj = JSON.parse(resp);
				console.log('Reply from getAPI:', rj);

				if (rj.status === 'OK') {

					// we got something
					console.log('resp. is OK');

					var results = rj.results;
					console.log(results);

					if (results.length > 1) {
						console.error('WARNING: Google found multiple matches. Try to be more specific at "' + obj.tz + '"');
					}

					var lat = results[0].geometry.location.lat;
					var lon = results[0].geometry.location.lng;

					var timestamp = Math.floor(Date.now() / 1000);

					// Get TZ for location
					var url2 = "https://maps.googleapis.com/maps/api/timezone/json?location=" + lat + "," + lon + "&timestamp=" + timestamp + "&sensor=false";
					callAjax(url2, function (resp) {
						console.log('Reply from tzAPI: ' + resp);

						try {
							var rj = JSON.parse(resp);
							console.log('Reply from Google:', rj);

							if (rj.status === 'OK') {
								console.log('Resolved TZ as ' + rj.timeZoneId);
								obj._tz_cached = rj.timeZoneId;
							} else {
								obj._valid = false;
							}

						} catch (e) {
							console.log(e);
							obj._valid = false;
						}

						people_loading--; // final

					}, function (resp) {
						console.log('FAIL tzAPI: ' + resp);
						obj._valid = false;
						people_loading--; // final, fail
					});

				} else {
					obj._valid = false;
					people_loading--; // final, fail
				}

			} catch (e) {
				console.log(e);
				obj._valid = false;

				people_loading--; // final, fail
			}

		}, function (resp) {
			console.log('FAIL geoAPI: ' + resp);
			obj._valid = false;
			people_loading--; // final, fail
		});
	}

	// Public functions
	window.loadPeopleArray = loadPeopleArray;
	window.resolvePeopleTimezones = resolvePeopleTimezones;
})();


/** Get proper timezone name for a person */
function getTimezoneForPerson(obj) {
	// Resolve timezone, cache result in the object.
	return obj._tz_cached;
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
function openSetupDialog() {
	// Clear error text
	document.getElementById('people_error').textContent = '';

	// Populate the textarea
	var ta = document.getElementById('people_json');

	var people_clone = JSON.parse(JSON.stringify(people));
	people_clone.forEach(function (obj) {
		delete obj._t;
		delete obj._valid;
		delete obj._tz_cached;
	});

	ta.value = JSON.stringify(people_clone, null, '\t');

	var modal = document.getElementById('setup_dialog');
	modal.style.display = 'block';

	setTimeout(function () {
		modal.style.opacity = 1;
	}, 1);
}


// called from "onClick"
function submitPeopleEdit(action) {
	switch (action) {
		case 'defaults':
			localStorage['people'] = JSON.stringify(people_orig);
			init();
			hideSetupModal();
			break;

		case 'close':
			hideSetupModal();
			break;

		case 'save':
			try {
				var ta = document.getElementById('people_json');
				var pp = JSON.parse(ta.value);

				pp.forEach(function (obj) {
					if (typeof obj.name == 'undefined') {
						throw new SyntaxError('Missing "name"');
					}

					if (typeof obj.tz == 'undefined') {
						throw new SyntaxError('Missing "tz" for '+obj.name);
					}

					if (typeof obj.color == 'undefined') {
						throw new SyntaxError('Missing "color" for '+obj.name);
					}
				});


				localStorage['people'] = JSON.stringify(pp);
				init();
				hideSetupModal();
			} catch (e) {
				var er = document.getElementById('people_error');

				if (e.message.match(/^Unexpected token [,\]}]/g)) {
					er.textContent = 'Syntax error: trailing comma ?';
				} else if (e.message.match(/^Unexpected string/g)) {
					er.textContent = 'Syntax error: missing comma ?';
				} else {
					er.textContent = 'Syntax error: ' + e.message;
				}

				console.log('Error in user-entered JSON', e);
			}

			break;
	}


}


function hideSetupModal() {
	// Hide modal
	var modal = document.getElementById('setup_dialog');
	modal.style.opacity = 0;
	setTimeout(function () {
		modal.style.display = 'none';
	}, 500);
}
// req. global arrays: tz_aliases, people.

(function (window) {

	window.Tzork = {
		repository: null,
		profile: null
	};

	function initTzork() {
		Tzork.repository = new LocalRepository();
		Tzork.repository.load();


	}

	var mouse_on_list; // flag that user is hovering a list -> suppress redraw
	var last_time; // time when last time the time was redrawn
	var disc;

	var interval_time;
	var interval_people;

	var first_init = true;

	/** Initialize the app */
	function buildClock() {
		var i;

		fixTextareaTabKey();

		// Clean up (it may be called second time)
		var old = document.querySelectorAll('.mark, .bullet, .person-label, .people-list');
		for (i = 0; i < old.length; i++) {
			old[i].parentNode.removeChild(old[i]);
		}
		clearInterval(interval_people);
		clearInterval(interval_time);


		// init
		disc = document.getElementById('disc');
		buildClockMarks();

		updateTime();
		interval_time = setInterval(updateTime, 1000);

		loadPeopleArray(function () {
			updatePeople();

			// refresh the disc every N seconds
			interval_people = setInterval(updatePeople, 1000 * 10);

			// force refresh after tab gets focused
			window.onFocus = function () {
				updatePeople();
				updateTime();
			};

			var e = document.getElementById('setup_btn');
			e.addEventListener('click', function () {
				openSetupDialog();
			});
		});
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


	/** Update the local time display */
	function updateTime() {
		// redraw time, wrap colon in span
		var mmt = moment();

		var t = mmt.format('H:mm');
		if (t !== last_time) {
			last_time = t;
			// need zero-padded minutes!
			var parts = t.split(':');
			document.getElementById('localtime').innerHTML = parts[0] + '<span id="loctimecolon">:</span>' + parts[1];
		}

		var s = (new Date()).getSeconds() % 2;
		document.getElementById('loctimecolon').style.visibility = s ? 'visible' : 'hidden';
	}


	/** Redraw people (actually deletes and re-adds them) */
	function updatePeople() {
		if (mouse_on_list) {
			console.log('Mouse over list, not redrawing.');
			return;
		}

		// Delete all old stuff
		var x = document.querySelectorAll('.bullet, .person, .people-list');
		for (var i in x) {
			if (x.hasOwnProperty(i)) {
				var e = x[i];
				if (!e || !e.parentNode) continue;

				e.parentNode.removeChild(e);
			}
		}

		// Rebuild
		buildPeople();
	}


	/** Build all people labels */
	function buildPeople() {
		var resolved = [];

		// Group people with similar time
		people.forEach(function (obj) {
			if (!obj._valid) return;

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
			//console.log('Time ' + x.t + ', people #: ' + x.p.length);
			addPeopleAtTime(x.t, x.p);
		});
	}


	/** Add a bunch of people at specified time (s) */
	function addPeopleAtTime(secs, people) {
		var i;

		var first = people[0];

		// Convert to hours & to degrees
		var t = secs / 3600;
		var angle = hour2angle(t);


		// Work out position
		var octant = Math.floor(angle / 45);
		var quadrant = Math.floor(octant / 2);
		var is_up = quadrant < 2;
		var is_left = (quadrant > 0 && quadrant < 3);


		// --- Create & place a bullet ---
		var bu = document.createElement('div');
		bu.className = 'bullet';
		bu.style.backgroundColor = first.color;
		positionAt(bu, angle, 50.2);
		disc.appendChild(bu);


		// --- Create a list element ---

		var list = document.createElement('div');
		list.classList.add('people-list');


		// add location classes (where the list is)
		list.classList.add(is_left ? 'left' : 'right');
		list.classList.add(is_up ? 'up' : 'down');
		list.classList.add('quad' + quadrant);
		list.classList.add('oct' + octant);


		// Determine if this is in prev / next day
		var here = moment();
		var there = moment().tz(getTimezoneForPerson(first));
		i = momentDayCompare(here, there);
		var clz = (i == -1) ? 'day-prev' : (i == 1) ? 'day-next' : null;
		if (clz !== null) {
			list.classList.add(clz);
			bu.classList.add(clz);
		}


		// Add classes for multi-person list
		if (people.length > 1) {
			list.classList.add('multiple');
			list.classList.add('count-' + people.length);
		}


		// add the people
		for (i = 0; i < people.length; i++) {
			var peep = people[i];
			var child = createPersonLabel(peep);
			child.title = there.format('H:mm, MMM Do') + ' — ' + peep._tz_cached;
			list.appendChild(child);
		}


		// Mouse listeners, to suppress redraw when mouse is on list
		list.addEventListener('mouseover', function () {
			mouse_on_list = true;
		});

		list.addEventListener('mouseout', function () {
			mouse_on_list = false;
		});


		// --- Place the list ---
		positionAt(list, angle, 53.5, octant);
		disc.appendChild(list);
	}


	function createPersonLabel(obj) {
		var twi = (obj.name.indexOf('@') === 0);
		var la = document.createElement(twi ? 'a' : 'span');
		la.classList.add('person-label');

		if (twi) {
			la.href = 'https://twitter.com/' + obj.name;
			la.target = '_blank';
		}

		la.style.color = obj.color;
		la.textContent = obj.name;

		return la;
	}

	// public
	window.updatePeople = updatePeople;
	window.buildClock = buildClock;
})(window);
