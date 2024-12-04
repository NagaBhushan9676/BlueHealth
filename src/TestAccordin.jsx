import React from 'react';
import Accordin from './Accordin';
import { useState } from 'react'; 


const TestAccordin = () => {
  const [openAccordion, setOpenAccordion] = useState(1);
    const blood_Prices = {
        1: "Dengue Test price",
        2: "Dengue NS1 Antigen Test price",
        3: "Lipid Profile Test price",
        4: "Vitamin D Test price",
        5: "Vitamin B12 Test price",
        6: "Thyroid Function Test price",
        7: "Liver Function Test price",
        8: "Kidney Function Test price",
        9: "HBA1c Test price",
        10: "CBC Test price",
        11: "CRP Test price",
        12: "Urine Culture Test price",
        13: "TSH Test price",
        14: "Urine Routine Test price",
        15: "Platelet Test price",
        16: "Beta hCG Test price",
        17: "FBS Test price",
        18: "AMH Test price",
        19: "Ferritin Test price",
        20: "Typhidot Test price",
        21: "Iron Profile Test price",
        22: "PPBS Test price",
        23: "HIV Test price",
        24: "Smear for Malarial Parasite Test price",
        25: "Creatinine Test price",
        26: "Free Thyroid Profile Test price",
        27: "Anti-TPO Antibody Test price",
        28: "Electrolytes Test price",
        29: "Testosterone Test price",
        30: "CA 125 Test price"
      };
      
    const popular_Tests = {
        1: "BUN Test",
        2: "Amh test",
        3: "CBC test",
        4: "Chlamydia Test",
        5: "Cholesterol test",
        6: "Creatinine test",
        7: "CRP test",
        8: "CRP test",
        9: "D dimer test",
        10: "Dengue Test",
        11: "ESR test",
        12: "FBS test",
        13: "Hba1c test",
        14: "HIV test",
        15: "KFT test",
        16: "LFT test",
        17: "Lipid profile test",
        18: "PCOD test",
        19: "PCOD test",
        20: "PPBS test",
        21: "Prolactin test",
        22: "RAST test",
        23: "RBS test",
        24: "RT PCR test",
        25: "SGPT test",
        26: "Thyroid test",
        27: "Uric Acid test",
        28: "Urine culture test",
        29: "VDRL test",
        30: "Vitamin B12 test",
        31: "Vitamin D Test",
        32: "Widal test",
        33: "Vitamin A test",
      };
      
    return (
        <div>
            <Accordin testType="Blood Tests price" test={blood_Prices} collapse="1"/>
            <Accordin testType="Popular tests" test={popular_Tests} collapse="2"/>
        </div>
    );
}

export default TestAccordin;
