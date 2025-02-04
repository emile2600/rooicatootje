import Company from "../../../classes/Company";
import EvaristoTrading from "./evaristo trading/company";
import MySustainableLife from "./my sustainable lifestyle/company";
import SandyCheeks from "./sandy cheeks/company";


// This is a simple list with all companies that are located at Elba, excluding Elba itself.
const companies : Company[] = [
    EvaristoTrading,
    MySustainableLife,
    SandyCheeks,
];

export default companies;