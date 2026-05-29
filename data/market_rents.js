// Savills Research – Q1 2026 Market Benchmarks
// Sources: Market in Minutes – NNJ Q1 2026, Philadelphia Q1 2026, PA I-81/78 Corridor Q1 2026
// All rents are average asking NNN per square foot. Vacancy rates are direct + sublease.
const MARKET_RENTS = {
  regions: [
    {
      region: "NNJ",
      label: "Northern New Jersey",
      report_date: "Q1 2026",
      overall_asking_rent: 16.12,
      overall_vacancy_pct: 7.4,
      inventory_msf: 688.4,
      yoy_rent_change_pct: -3.8,
      yoy_vacancy_change_bps: 40,
      net_absorption_ytd_msf: 0.8,
      deliveries_ytd_msf: 1.3,
      under_construction_msf: 8.1,
      source: "Savills Research – Market in Minutes NNJ Industrial Q1 2026",
      submarkets: [
        { name: "Newark",                   asking_rent: 20.10, vacancy_pct: 6.0 },
        { name: "Hudson Waterfront",        asking_rent: 19.33, vacancy_pct: 7.4 },
        { name: "Meadowlands",              asking_rent: 19.07, vacancy_pct: 7.2 },
        { name: "Exit 12",                  asking_rent: 18.59, vacancy_pct: 10.1 },
        { name: "Bergen Central",           asking_rent: 17.39, vacancy_pct: 11.5 },
        { name: "Linden/Elizabeth",         asking_rent: 17.38, vacancy_pct: 7.2 },
        { name: "Bergen North",             asking_rent: 17.02, vacancy_pct: 11.1 },
        { name: "Morris",                   asking_rent: 16.16, vacancy_pct: 6.8 },
        { name: "Exit 10",                  asking_rent: 15.89, vacancy_pct: 10.7 },
        { name: "Exit 9",                   asking_rent: 15.38, vacancy_pct: 7.8 },
        { name: "Route 280/Suburban Essex", asking_rent: 15.24, vacancy_pct: 5.9 },
        { name: "Somerset",                 asking_rent: 15.19, vacancy_pct: 5.1 },
        { name: "Exit 8A",                  asking_rent: 15.18, vacancy_pct: 7.9 },
        { name: "Monmouth",                 asking_rent: 14.54, vacancy_pct: 7.0 },
        { name: "Route 46/23/3",            asking_rent: 14.23, vacancy_pct: 5.4 },
        { name: "Exit 8/Princeton",         asking_rent: 13.90, vacancy_pct: 9.4 },
        { name: "Route 78 West",            asking_rent: 13.74, vacancy_pct: 5.3 },
        { name: "Union Central",            asking_rent: 12.81, vacancy_pct: 4.9 },
        { name: "Exit 7A/Trenton",          asking_rent: 12.65, vacancy_pct: 9.6 }
      ]
    },
    {
      region: "Philly / SNJ",
      label: "Philadelphia / Southern NJ / Northern DE",
      report_date: "Q1 2026",
      overall_asking_rent: 12.06,
      overall_vacancy_pct: 10.7,
      inventory_msf: 415.8,
      yoy_rent_change_pct: -0.3,
      yoy_vacancy_change_bps: 130,
      net_absorption_ytd_msf: 2.6,
      deliveries_ytd_msf: 1.9,
      under_construction_msf: 3.6,
      source: "Savills Research – Market in Minutes Philadelphia Industrial Q1 2026",
      submarkets: [
        { name: "Southeast PA",  asking_rent: 12.40, vacancy_pct: 10.4 },
        { name: "Southern NJ",   asking_rent: 11.87, vacancy_pct: 11.7 },
        { name: "Northern DE",   asking_rent: 11.08, vacancy_pct: 8.7  }
      ]
    },
    {
      region: "I-78 / I-81",
      label: "PA I-81/78 Corridor",
      report_date: "Q1 2026",
      overall_asking_rent: 9.01,
      overall_vacancy_pct: 8.4,
      inventory_msf: 616.4,
      yoy_rent_change_pct: 8.5,
      yoy_vacancy_change_bps: 100,
      net_absorption_ytd_msf: -0.2,
      deliveries_ytd_msf: 1.3,
      under_construction_msf: 13.8,
      source: "Savills Research – Market in Minutes PA I-81/78 Corridor Industrial Q1 2026",
      submarkets: [
        { name: "Lehigh Valley", asking_rent: 10.52, vacancy_pct: 11.4 },
        { name: "Central PA",    asking_rent:  8.09, vacancy_pct:  6.9 },
        { name: "Northeast PA",  asking_rent:  7.38, vacancy_pct:  7.8 }
      ]
    },
    {
      region: "Lehigh Valley",
      label: "Lehigh Valley",
      report_date: "Q1 2026",
      overall_asking_rent: 10.52,
      overall_vacancy_pct: 11.4,
      inventory_msf: null,
      yoy_rent_change_pct: -4.3,
      yoy_vacancy_change_bps: null,
      source: "Savills Research – Market in Minutes PA I-81/78 Corridor Industrial Q1 2026",
      submarkets: [
        { name: "Lehigh Valley", asking_rent: 10.52, vacancy_pct: 11.4 }
      ]
    }
  ]
};
