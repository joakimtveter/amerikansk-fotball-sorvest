/**
 * Returns the copuright years for the project
 * @param {number} startYear - The year the project started
 * @returns {string} - A string with the start year and current year
 */
export default function copyrightYears(startYear: number): string {
    const currentYear = new Date().getFullYear();
    return startYear === currentYear ? startYear.toString() : `${startYear} - ${currentYear}`;
}
