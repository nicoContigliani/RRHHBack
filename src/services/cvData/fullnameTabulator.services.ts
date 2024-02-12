export const fullnameTabulatorServices = async (data: any) => {
    // Handle empty string input to avoid errors
    if (!data) {
        return "";
    }

    // Remove extraneous spaces and convert to lowercase for uniform processing
    const trimmedString = data.trim().toLowerCase();

    // Split into words, handling cases where there are no spaces:
    const words = trimmedString.length > 0 ? trimmedString.split(" ") : [trimmedString];

    // Join words with '_' and capitalize the first letter of each word
    const processedString = words
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("_");

    return `cv_${processedString}`;
}