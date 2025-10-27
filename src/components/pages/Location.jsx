import React from "react";
import { useParams, Link } from "react-router-dom";
import SEO from '../SEO';

// Helper function to generate standardized content for each location
const generateLocationContent = (location, area) => ({
  location,
  slug: area,
  intro: `When you need clear answers to complex problems, the support from our specialist private investigators is essential. Henderson Thomas Investigations regularly supports clients across ${location}, equipped to supply the factual clarity you need to handle difficult situations with confidence.`,
  services: `Our services are built around delivering reliable intelligence tailored to your unique circumstances. Whether you are a business owner with corporate concerns or a private individual seeking resolution on a personal issue, we offer a discreet and effective approach.`,
  consultation: `For your free, no-obligation consultation, call us on 07826 416466 or complete our website enquiry form.`,
  headerImage: "/heronew.jpg",
  privateClientTitle: `${location} Investigators for Private Clients`,
  privateClientContent: `When personal matters create doubt and uncertainty, gaining clarity allows you to restore balance and make decisions with confidence. Our private investigators in ${location} are dedicated to providing the answers you need. Using advanced techniques, we gather the facts required to give you peace of mind and help you move forward in a positive direction. We recognise that your situation is personal, which is why our approach is always tailored to your specific objectives. We handle every case with complete discretion and professionalism, combining sophisticated investigative work with a commitment to client care.`,
  privateServices: [
    "Spouse investigations",
    "Covert surveillance",
    "Romance scams",
    "Fraud investigations",
    "Address tracing",
    "People tracing",
    "Missing person investigation"
  ],
  corporateTitle: `${location} Detectives for Corporate Clients`,
  corporateContent: `Protecting your company's reputation and financial stability is fundamental to long-term success. Our corporate investigators specialise in identifying and mitigating risks, providing the expert support you need to address complex business challenges. We manage every investigation with absolute discretion and precision, ensuring your business operations remain secure. Our services are designed to protect your assets, uphold your company's integrity, and supply the assurance you need to act decisively. You can rely on our private detectives to handle your case with the diligence and attention it requires.`,
  corporateServices: [
    "Fraud investigations",
    "Background checks",
    "Private surveillance",
    "Bug sweeping",
    "Asset tracing",
    "Cyber security",
    "Internal investigations",
    "Employee investigations"
  ]
});

// Region data with locations
const regionData = {
  "london-south-east": {
    title: "London & South East",
    locations: [
      { name: "Central London", slug: "central-london" },
      { name: "North London", slug: "north-london" },
      { name: "East London", slug: "east-london" },
      { name: "South London", slug: "south-london" },
      { name: "West London", slug: "west-london" },
      { name: "Croydon", slug: "croydon" },
      { name: "Bromley", slug: "bromley" },
      { name: "Kingston upon Thames", slug: "kingston-upon-thames" },
      { name: "Surrey", slug: "surrey" },
      { name: "Kent", slug: "kent" },
      { name: "Sussex", slug: "sussex" },
      { name: "Essex", slug: "essex" },
      { name: "Hertfordshire", slug: "hertfordshire" },
      { name: "St Albans", slug: "st-albans" },
      { name: "Reading", slug: "reading" },
      { name: "Berkshire", slug: "berkshire" },
      { name: "Slough", slug: "slough" },
      { name: "Guildford", slug: "guildford" }
    ]
  },
  "south-west-england": {
    title: "South West England",
    locations: [
      { name: "Bristol", slug: "bristol" },
      { name: "Bath", slug: "bath" },
      { name: "Gloucester", slug: "gloucester" },
      { name: "Gloucestershire", slug: "gloucestershire" },
      { name: "Somerset", slug: "somerset" },
      { name: "Dorset", slug: "dorset" },
      { name: "Devon", slug: "devon" },
      { name: "Cornwall", slug: "cornwall" },
      { name: "Wiltshire", slug: "wiltshire" }
    ]
  },
  "south-central-east": {
    title: "South Central & East England",
    locations: [
      { name: "Oxfordshire", slug: "oxfordshire" },
      { name: "Cambridge", slug: "cambridge" },
      { name: "Bedford", slug: "bedford" },
      { name: "Milton Keynes", slug: "milton-keynes" },
      { name: "Luton", slug: "luton" },
      { name: "Norfolk", slug: "norfolk" },
      { name: "Suffolk", slug: "suffolk" },
      { name: "Buckinghamshire", slug: "buckinghamshire" }
    ]
  },
  "midlands": {
    title: "Midlands",
    locations: [
      { name: "Birmingham", slug: "birmingham" },
      { name: "Coventry", slug: "coventry" },
      { name: "Leicester", slug: "leicester" },
      { name: "Nottingham", slug: "nottingham" },
      { name: "Derby", slug: "derby" },
      { name: "Northampton", slug: "northampton" },
      { name: "Worcester", slug: "worcester" },
      { name: "Hereford", slug: "hereford" },
      { name: "Shropshire", slug: "shropshire" },
      { name: "Staffordshire", slug: "staffordshire" },
      { name: "Wolverhampton", slug: "wolverhampton" }
    ]
  },
  "north-england": {
    title: "North of England",
    locations: [
      { name: "Manchester", slug: "manchester" },
      { name: "Liverpool", slug: "liverpool" },
      { name: "Chester", slug: "chester" },
      { name: "Leeds", slug: "leeds" },
      { name: "Sheffield", slug: "sheffield" },
      { name: "York", slug: "york" },
      { name: "Newcastle", slug: "newcastle" },
      { name: "Durham", slug: "durham" },
      { name: "Carlisle", slug: "carlisle" },
      { name: "Lancaster", slug: "lancaster" },
      { name: "Preston", slug: "preston" }
    ]
  },
  "scotland": {
    title: "Scotland",
    locations: [
      { name: "Edinburgh", slug: "edinburgh" },
      { name: "Glasgow", slug: "glasgow" },
      { name: "Aberdeen", slug: "aberdeen" },
      { name: "Dundee", slug: "dundee" },
      { name: "Inverness", slug: "inverness" },
      { name: "Stirling", slug: "stirling" },
      { name: "Perth", slug: "perth" }
    ]
  },
  "wales-region": {
    title: "Wales",
    locations: [
      { name: "Cardiff", slug: "cardiff" },
      { name: "Swansea", slug: "swansea" },
      { name: "Newport", slug: "newport" },
      { name: "Wrexham", slug: "wrexham" },
      { name: "Bangor", slug: "bangor" },
      { name: "Aberystwyth", slug: "aberystwyth" }
    ]
  },
  "northern-ireland": {
    title: "Northern Ireland",
    locations: [
      { name: "Belfast", slug: "belfast" },
      { name: "Derry / Londonderry", slug: "derry" },
      { name: "Lisburn", slug: "lisburn" },
      { name: "Newry", slug: "newry" }
    ]
  }
};

// All location data
const locationsData = {
  "central-london": generateLocationContent("Central London", "central-london"),
  "north-london": generateLocationContent("North London", "north-london"),
  "east-london": generateLocationContent("East London", "east-london"),
  "south-london": generateLocationContent("South London", "south-london"),
  "west-london": generateLocationContent("West London", "west-london"),
  "croydon": generateLocationContent("Croydon", "croydon"),
  "bromley": generateLocationContent("Bromley", "bromley"),
  "kingston-upon-thames": generateLocationContent("Kingston upon Thames", "kingston-upon-thames"),
  "surrey": generateLocationContent("Surrey", "surrey"),
  "kent": generateLocationContent("Kent", "kent"),
  "sussex": generateLocationContent("Sussex", "sussex"),
  "essex": generateLocationContent("Essex", "essex"),
  "hertfordshire": generateLocationContent("Hertfordshire", "hertfordshire"),
  "st-albans": generateLocationContent("St Albans", "st-albans"),
  "reading": generateLocationContent("Reading", "reading"),
  "berkshire": generateLocationContent("Berkshire", "berkshire"),
  "slough": generateLocationContent("Slough", "slough"),
  "guildford": generateLocationContent("Guildford", "guildford"),
  "bristol": generateLocationContent("Bristol", "bristol"),
  "bath": generateLocationContent("Bath", "bath"),
  "gloucester": generateLocationContent("Gloucester", "gloucester"),
  "gloucestershire": generateLocationContent("Gloucestershire", "gloucestershire"),
  "somerset": generateLocationContent("Somerset", "somerset"),
  "dorset": generateLocationContent("Dorset", "dorset"),
  "devon": generateLocationContent("Devon", "devon"),
  "cornwall": generateLocationContent("Cornwall", "cornwall"),
  "wiltshire": generateLocationContent("Wiltshire", "wiltshire"),
  "oxfordshire": generateLocationContent("Oxfordshire", "oxfordshire"),
  "cambridge": generateLocationContent("Cambridge", "cambridge"),
  "bedford": generateLocationContent("Bedford", "bedford"),
  "milton-keynes": generateLocationContent("Milton Keynes", "milton-keynes"),
  "luton": generateLocationContent("Luton", "luton"),
  "norfolk": generateLocationContent("Norfolk", "norfolk"),
  "suffolk": generateLocationContent("Suffolk", "suffolk"),
  "buckinghamshire": generateLocationContent("Buckinghamshire", "buckinghamshire"),
  "birmingham": generateLocationContent("Birmingham", "birmingham"),
  "coventry": generateLocationContent("Coventry", "coventry"),
  "leicester": generateLocationContent("Leicester", "leicester"),
  "nottingham": generateLocationContent("Nottingham", "nottingham"),
  "derby": generateLocationContent("Derby", "derby"),
  "northampton": generateLocationContent("Northampton", "northampton"),
  "worcester": generateLocationContent("Worcester", "worcester"),
  "hereford": generateLocationContent("Hereford", "hereford"),
  "shropshire": generateLocationContent("Shropshire", "shropshire"),
  "staffordshire": generateLocationContent("Staffordshire", "staffordshire"),
  "wolverhampton": generateLocationContent("Wolverhampton", "wolverhampton"),
  "manchester": generateLocationContent("Manchester", "manchester"),
  "liverpool": generateLocationContent("Liverpool", "liverpool"),
  "chester": generateLocationContent("Chester", "chester"),
  "leeds": generateLocationContent("Leeds", "leeds"),
  "sheffield": generateLocationContent("Sheffield", "sheffield"),
  "york": generateLocationContent("York", "york"),
  "newcastle": generateLocationContent("Newcastle", "newcastle"),
  "durham": generateLocationContent("Durham", "durham"),
  "carlisle": generateLocationContent("Carlisle", "carlisle"),
  "lancaster": generateLocationContent("Lancaster", "lancaster"),
  "preston": generateLocationContent("Preston", "preston"),
  "edinburgh": generateLocationContent("Edinburgh", "edinburgh"),
  "glasgow": generateLocationContent("Glasgow", "glasgow"),
  "aberdeen": generateLocationContent("Aberdeen", "aberdeen"),
  "dundee": generateLocationContent("Dundee", "dundee"),
  "inverness": generateLocationContent("Inverness", "inverness"),
  "stirling": generateLocationContent("Stirling", "stirling"),
  "perth": generateLocationContent("Perth", "perth"),
  "cardiff": generateLocationContent("Cardiff", "cardiff"),
  "swansea": generateLocationContent("Swansea", "swansea"),
  "newport": generateLocationContent("Newport", "newport"),
  "wrexham": generateLocationContent("Wrexham", "wrexham"),
  "bangor": generateLocationContent("Bangor", "bangor"),
  "aberystwyth": generateLocationContent("Aberystwyth", "aberystwyth"),
  "belfast": generateLocationContent("Belfast", "belfast"),
  "derry": generateLocationContent("Derry / Londonderry", "derry"),
  "lisburn": generateLocationContent("Lisburn", "lisburn"),
  "newry": generateLocationContent("Newry", "newry")
};

const Location = () => {
  const { locationName } = useParams();
  
  // Check if it's a region
  const regionData_obj = regionData[locationName?.toLowerCase()];
  if (regionData_obj) {
    // Render region page with location list
    return (
      <div className="bg-gray-50 pt-0 min-h-screen">
        <SEO 
          title={`Private Detectives in ${regionData_obj.title} | Henderson Thomas Investigations`}
          description={`Professional private investigation services across ${regionData_obj.title}. Henderson Thomas Investigations provides confidential, discreet investigative services.`}
          keywords={`private detectives ${regionData_obj.title}, ${regionData_obj.title} investigators, private investigation ${regionData_obj.title}`}
          url={`/location/${locationName}`}
        />
        
        {/* Hero Section */}
        <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
            style={{
              backgroundImage: `url('/heroOld2.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 px-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Private Detectives in {regionData_obj.title}
              </h1>
              <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
                Professional & Confidential Investigation Services
              </p>
            </div>
          </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10 text-left md:text-justify">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                When you need clear answers to complex problems, the support from our specialist private investigators is essential. Henderson Thomas Investigations regularly supports clients across {regionData_obj.title}, equipped to supply the factual clarity you need to handle difficult situations with confidence.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Our services are built around delivering reliable intelligence tailored to your unique circumstances. Whether you are a business owner with corporate concerns or a private individual seeking resolution on a personal issue, we offer a discreet and effective approach.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                For your free, no-obligation consultation, call us on 07826 416466 or complete our website enquiry form.
              </p>
            </div>

            {/* Our Services Section */}
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Our Services
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                Henderson Thomas Investigations offers a comprehensive range of professional investigative services designed to meet your specific needs. Explore our specialized services below:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  Background Checks
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  Covert Surveillance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  Fraud Investigation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  Missing Persons
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  Personal Investigation
                </li>
              </ul>
            </div>

            {/* Locations List */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">
                Locations We Serve in {regionData_obj.title}
              </h2>
              <p className="text-gray-600 mb-6 text-center text-sm md:text-lg">Our private investigators are available in the following locations:</p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-lg">
                {regionData_obj.locations.map((loc, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span>
                      Private Investigator in {loc.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Clients Section */}
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {regionData_obj.title} Investigators for Private Clients
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                When personal matters create doubt and uncertainty, gaining clarity allows you to restore balance and make decisions with confidence. Our private investigators across {regionData_obj.title} are dedicated to providing the answers you need. Using advanced techniques, we gather the facts required to give you peace of mind and help you move forward in a positive direction. We recognise that your situation is personal, which is why our approach is always tailored to your specific objectives. We handle every case with complete discretion and professionalism, combining sophisticated investigative work with a commitment to client care.
              </p>

              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">Popular Investigations for Individuals</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-lg">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Spouse investigations
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Covert surveillance
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Romance scams
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Fraud investigations
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Address tracing
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    People tracing
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Missing person investigation
                  </li>
                </ul>
              </div>
            </div>

            {/* Corporate Clients Section */}
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {regionData_obj.title} Detectives for Corporate Clients
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Protecting your company's reputation and financial stability is fundamental to long-term success. Our corporate investigators specialise in identifying and mitigating risks, providing the expert support you need to address complex business challenges. We manage every investigation with absolute discretion and precision, ensuring your business operations remain secure. Our services are designed to protect your assets, uphold your company's integrity, and supply the assurance you need to act decisively. You can rely on our private detectives to handle your case with the diligence and attention it requires.
              </p>

              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">Popular Investigations for Corporate Clients</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-lg">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Fraud investigations
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Background checks
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Private surveillance
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Bug sweeping
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Asset tracing
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Cyber security
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Internal investigations
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                    Employee investigations
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold text-lg"
              >
                Get Your Free Consultation
              </Link>
            </div>
          </div>
      </div>
    );
  }
  
  // Check if it's a location
  const locationData = locationsData[locationName?.toLowerCase()];
  if (locationData) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Private Detectives ${locationData.location}`,
      "description": `Professional private investigation services in ${locationData.location}. Henderson Thomas Investigations provides confidential, discreet investigative services.`,
      "provider": {
        "@type": "Organization",
        "name": "Henderson Thomas Investigations",
        "url": "https://hendersonthomasinvestigations.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, 238 Kensington High St",
          "addressLocality": "London",
          "postalCode": "W8 6SN",
          "addressCountry": "GB"
        },
        "telephone": "07826 416466",
        "email": "private@hendersonthomasinvestigations.com"
      },
      "serviceType": "Private Investigation",
      "areaServed": {
        "@type": "State",
        "name": locationData.location
      }
    };

    return (
      <div className="bg-gray-50 pt-0">
        <SEO 
          title={`Private Detectives ${locationData.location} - Professional Investigation Services | Henderson Thomas`}
          description={`Professional private investigation services in ${locationData.location}. Henderson Thomas Investigations provides confidential, discreet investigative services for private and corporate clients.`}
          keywords={`private detectives ${locationData.location}, ${locationData.location} investigators, private investigation ${locationData.location}, Henderson Thomas ${locationData.location}`}
          url={`/location/${locationData.slug}`}
          structuredData={structuredData}
        />

        {/* Hero Section */}
        <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
          style={{
            backgroundImage: `url('/heroOld2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Private Detectives {locationData.location}
            </h1>
            <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
              Professional & Confidential Investigation Services
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10 text-left md:text-justify">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {locationData.intro}
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {locationData.services}
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {locationData.consultation}
            </p>
          </div>

          {/* Our Services Section */}
          <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              Henderson Thomas Investigations offers a comprehensive range of professional investigative services designed to meet your specific needs. Explore our specialized services below:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-lg">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                Background Checks
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                Covert Surveillance
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                Fraud Investigation
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                Missing Persons
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                Personal Investigation
              </li>
            </ul>
          </div>

          {/* Private Clients Section */}
          <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {locationData.privateClientTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {locationData.privateClientContent}
            </p>

            {locationData.privateServices && (
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Popular Investigations for Individuals</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-base md:text-lg">
                  {locationData.privateServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Corporate Clients Section */}
          <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {locationData.corporateTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {locationData.corporateContent}
            </p>

            {locationData.corporateServices && (
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Popular Investigations for Corporate Clients</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-base md:text-lg">
                  {locationData.corporateServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold text-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
  }
  
  // Location not found
  return (
    <div className="bg-gray-50 pt-16 md:pt-20 pb-24 min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Location Not Found</h1>
        <p className="text-gray-600 mb-6">We're sorry, but the location you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Location;

