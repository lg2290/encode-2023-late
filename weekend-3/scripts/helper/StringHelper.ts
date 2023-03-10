import { ethers } from "ethers";

export function convertStringArrayToBytes32Array(array: string[]): string[] {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
}
