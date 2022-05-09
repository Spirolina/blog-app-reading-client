import moment from "moment"

export const dateOrder = (comments) => {
    const myComments = [...comments];
    const sortedArray = myComments.reverse();
    return sortedArray;
}