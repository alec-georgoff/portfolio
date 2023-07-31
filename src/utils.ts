export const commaSeparated = (list: string[]) => {
    let str = '';

    list.forEach((s, index) => {
        if (index === list.length - 1) {
            str += s;
        } else {
            str += `${s}, `;
        }
    });

    return str;
};
