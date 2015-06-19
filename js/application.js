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
	{name: '@MightyPork',    tz: 'Czech Republic',     color: '#FFAD00'},
	{name: '@lastofavari',   tz: 'Belarus',            color: '#05CDC0'},
	{name: '@Locercus',      tz: 'Denmark',            color: '#32CD32'},
	{name: '@Creeper32605',  tz: 'Denmark',            color: '#C8F080'},
	{name: '@JesperJacoben', tz: 'Denmark',            color: 'skyblue'},
	{name: '@Jaredlll08',    tz: 'South Africa',       color: '#F86752'},
	{name: '@ciba43',        tz: 'Latvia',             color: '#FE2F77'},
	{name: '@coolsquid_',    tz: 'Norway',             color: '#079DE9'},
	{name: '@TheBadFame',    tz: 'Mexico',             color: '#329AFF'},
	{name: '@ImReble548',    tz: 'USA, Mountain Time', color: '#69E79E'},
	{name: '@Deli731234',    tz: 'USA, Pacific Time',  color: '#A659E2'},
	{name: '@iamSethD',      tz: 'USA, Eastern Time',  color: '#ED2222'},
	{name: '@eevblog',       tz: 'Australia, Sydney',  color: '#E63E3F'},
	{name: '@AntonvonRaumer',tz: 'Germany',            color: '#FF8585'},
	{name: '@elakdawalla',   tz: 'USA, Pacific Time',  color: '#C49B6D'},
	{name: '@Vangoule273',   tz: 'United Kingdom',     color: '#FF0095'},
	{name: '@xTordX',        tz: 'Romania',            color: '#AE1AF7'},
	{name: '@ljfa2',         tz: 'Germany',            color: '#78FCFF'},
	{name: '@Rafmaninoff',   tz: 'Spain',              color: '#00CC00'},
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

		//console.log('TZ "' + old + '" resolved as "' + tz + '"');
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
var mouse_hovering_list; // flag that user is hovering a list -> suppress redraw
// req. global arrays: tz_aliases, people.


/** Initialize the app */
function init() {

	disc = document.getElementById('disc');
	buildClockMarks();

	update();

	// refresh the disc every N seconds
	setInterval(update, 1000 * 10);
	setInterval(changeColon, 1000);

	// force refresh after tab gets focused
	window.onfocus = update;
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
	if (mouse_hovering_list) {
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

	var octant = Math.floor(angle / 45);
	var quadrant = Math.floor(octant / 2);
	var is_up = quadrant < 2;
	var is_left = (quadrant > 0 && quadrant < 3);

	//console.log('angle = ' + angle + ', octant ' + octant + ', quadrant ' + quadrant + ', up ' + is_up + ', left ' + is_left);

	// Create a bullet
	var bu = document.createElement('div');
	bu.className = 'bullet';
	bu.style.backgroundColor = first.color;
	positionAt(bu, angle, 50.2);
	disc.appendChild(bu);

	// Create a label

	// make it a link if it's twitter name
	var list = document.createElement('div');
	list.classList.add('people-list');

	// add location classes
	list.classList.add(is_left ? 'left' : 'right');
	list.classList.add(is_up ? 'up' : 'down');

	list.classList.add('quad' + quadrant);
	list.classList.add('oct' + octant);


	// Determine if this is in prev / next day
	var here = moment();
	var there = moment().tz(getTimezoneForPerson(first));
	i = mmtDayCompare(here, there);
	var clz = (i == -1) ? 'day-prev' : (i == 1) ? 'day-next' : null;

	if (clz !== null) {
		list.classList.add(clz);
		bu.classList.add(clz);
	}

	if (people.length > 1) {
		list.classList.add('multiple');
		list.classList.add('count-' + people.length);
	}

	list.style.color = first.color;

	// add the people
	for (i = 0; i < people.length; i++) {
		var peep = people[i];
		var chld = createPersonLabel(peep);
		chld.title = there.format('H:mm, MMM Do') + ' — ' + peep.tz;
		list.appendChild(chld);
	}

	positionAt(list, angle, 53.5, octant); // label distance
	disc.appendChild(list);

	list.addEventListener('mouseover', function (e) {
		mouse_hovering_list = true;
	});

	list.addEventListener('mouseout', function (e) {
		mouse_hovering_list = false;
	})
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
