function compareVersionStrings(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const num1 = v1[i] || 0; 
        const num2 = v2[i] || 0;

        if (num1 > num2) return version1;
        if (num1 < num2) return version2;
    }
    return version1;
}

// Example usage
const str1 = ['1', '0'].join('.');  // "1.0"
const str2 = ['1', '10'].join('.'); // "1.10"

console.log(compareVersionStrings(str1, str2)); // Output: "1.10"
