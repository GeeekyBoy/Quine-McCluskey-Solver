import varStore from "../utils/varStore";
export default function () {
  const mintermsNumbers = [
    ...new Set(varStore.initMinterms.concat(varStore.initDonotCares))
  ];
  let minterms = [];
  for (const mintermNumber of mintermsNumbers) {
    const binaryRepresentation =
      "0".repeat(
        varStore.initInputsNumber -
          (parseInt(Math.log2(mintermNumber === 0 ? 1 : mintermNumber), 10) + 1)
      ) + mintermNumber.toString(2);
      const onesGroup = binaryRepresentation.match(new RegExp("1", "g"));
    const onesNumber = onesGroup ? onesGroup.length : 0;
    if (!minterms[onesNumber]) {
      minterms[onesNumber] = [];
    }
    minterms[onesNumber].push([[mintermNumber], binaryRepresentation]);
  }
  minterms = minterms.filter((x) => x !== true);
  return minterms
}
