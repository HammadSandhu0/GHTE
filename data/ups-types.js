// Data for different UPS types
export const upsTypesData = [
  {
    id: "online-double-conversion",
    name: "Online Double Conversion UPS",
    description:
      "Provides the highest level of protection by converting power twice to ensure clean, consistent output.",
    image: "/ups/ups-1.webp",
    detailedDescription:
      "Online Double Conversion UPS systems provide the highest level of power protection by completely isolating connected equipment from the raw utility power. The incoming AC power is converted to DC, which charges the batteries, and then converted back to AC to power the connected equipment. This double conversion process eliminates all power problems including surges, sags, noise, and frequency variations.",
    advantages: [
      "Complete isolation from utility power problems",
      "Zero transfer time during power outages",
      "Precise output voltage and frequency regulation",
      "Compatible with generators",
      "Suitable for mission-critical applications",
    ],
    disadvantages: [
      "Higher initial cost compared to other UPS types",
      "Lower energy efficiency (though modern designs have improved)",
      "Generates more heat requiring additional cooling",
      "Larger physical footprint",
    ],
    idealFor: [
      "Data centers",
      "Healthcare equipment",
      "Industrial control systems",
      "Telecommunications infrastructure",
      "Financial institutions",
    ],
    technicalDetails: {
      topology: "Double Conversion",
      transferTime: "0ms (Zero)",
      efficiency: "92-96%",
      waveform: "Pure Sine Wave",
      protection: [
        "Voltage fluctuations",
        "Frequency variations",
        "Harmonic distortion",
        "Complete power outages",
        "Electrical noise",
      ],
    },
  },
  {
    id: "line-interactive",
    name: "Line Interactive UPS",
    description:
      "Offers a good balance of protection and efficiency for small to medium applications.",
    image: "/ups/ups-1.webp",
    detailedDescription:
      "Line Interactive UPS systems regulate voltage by adjusting taps on an autotransformer, providing protection against power sags and surges without switching to battery power. When utility power fails, the UPS switches to battery power with a typical transfer time of 4-6 milliseconds.",
    advantages: [
      "Better energy efficiency than online UPS",
      "Good voltage regulation",
      "Lower heat generation",
      "More affordable than online UPS",
      "Longer battery life due to less frequent use",
    ],
    disadvantages: [
      "Brief transfer time when switching to battery",
      "Limited frequency regulation",
      "Less effective against power conditioning issues",
      "Not ideal for extremely sensitive equipment",
    ],
    idealFor: [
      "Small to medium businesses",
      "Network equipment",
      "Desktop computers and workstations",
      "Point-of-sale systems",
      "Home office setups",
    ],
    technicalDetails: {
      topology: "Line Interactive",
      transferTime: "4-6ms",
      efficiency: "95-98%",
      waveform: "Sine Wave or Stepped Approximation",
      protection: [
        "Voltage sags",
        "Voltage surges",
        "Power outages",
        "Some electrical noise",
      ],
    },
  },
  {
    id: "standby",
    name: "Standby UPS",
    description:
      "Basic protection for non-critical equipment and personal computers.",
    image: "/ups/ups-1.webp",
    detailedDescription:
      "Standby UPS (also called Offline UPS) provides basic battery backup protection. During normal operation, it passes utility power directly to connected equipment. When a power outage occurs, it switches to battery power with a typical transfer time of 5-10 milliseconds.",
    advantages: [
      "Most affordable UPS option",
      "Highest energy efficiency",
      "Compact size",
      "Simple design with fewer components",
      "Lower heat generation",
    ],
    disadvantages: [
      "Longer transfer time to battery",
      "No voltage regulation during normal operation",
      "No frequency regulation",
      "Limited protection against power problems",
      "Typically produces modified sine wave output on battery",
    ],
    idealFor: [
      "Home computers",
      "Gaming systems",
      "Basic office equipment",
      "Non-critical devices",
      "Budget-conscious applications",
    ],
    technicalDetails: {
      topology: "Offline/Standby",
      transferTime: "5-10ms",
      efficiency: "98-99%",
      waveform: "Modified Sine Wave (typically)",
      protection: ["Complete power outages", "Basic surge protection"],
    },
  },
  {
    id: "modular",
    name: "Modular UPS Systems",
    description:
      "Scalable power protection solutions that allow for expansion and redundancy as your needs grow.",
    image: "/ups/ups-1.webp",
    detailedDescription:
      "Modular UPS systems are designed with scalability and redundancy in mind. They consist of multiple power modules that can be added or removed as power requirements change. This architecture allows for N+X redundancy, hot-swappable components, and the ability to perform maintenance without shutting down the entire system.",
    advantages: [
      "Scalable capacity to match growing power needs",
      "N+X redundancy for enhanced reliability",
      "Hot-swappable modules for maintenance without downtime",
      "Pay-as-you-grow approach to capital expenditure",
      "Reduced mean time to repair (MTTR)",
    ],
    disadvantages: [
      "Higher initial cost for the modular framework",
      "More complex management systems",
      "Requires more planning for optimal configuration",
      "Potential vendor lock-in for expansion modules",
    ],
    idealFor: [
      "Growing data centers",
      "Cloud service providers",
      "Colocation facilities",
      "Enterprise IT infrastructure",
      "Applications requiring high availability",
    ],
    technicalDetails: {
      topology: "Usually Online Double Conversion",
      transferTime: "0ms (Zero)",
      efficiency: "94-97%",
      waveform: "Pure Sine Wave",
      protection: [
        "All power quality issues",
        "Designed for high availability",
        "Redundant protection",
      ],
    },
  },
];
