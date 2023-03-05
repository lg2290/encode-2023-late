export function extractInputData(argv: string[], minInputDataSize: number): string[] {
    const dataValues: string[] = argv.slice(2);

    validateInputDataSize(dataValues, minInputDataSize);
    
    return dataValues;
}

function validateInputDataSize(dataValues: string[], minInputDataSize: number) {
    if(dataValues.length < 2) {
        throw new Error("Missing input data");
    }
}
