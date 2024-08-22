import { InputNodeTabulation } from "@/types/tabulation"

export const mappingTabulationFormula = (bodyInput: InputNodeTabulation) => {
  let formula = ''

  switch (bodyInput.formulaSelected) {
    case 'Count':
      formula = 'n()'
      break
    case 'Sum':
      formula = `sum(${bodyInput.valueSelected1})`
      break
    case 'Min':
      formula = `min(${bodyInput.valueSelected1})`
      break
    case 'Max':
      formula = `max(${bodyInput.valueSelected1})`
      break
    case 'Median':
      formula = `median(${bodyInput.valueSelected1})`
      break
    case 'Mean':
      formula = `mean(${bodyInput.valueSelected1})`
      break
    case 'Weighted Mean':
      formula = `sum(${bodyInput.valueSelected1}*${bodyInput.valueSelected2})/sum(${bodyInput.valueSelected2})`
      break
    case 'Standard Deviation':
      formula = `sd(${bodyInput.valueSelected1})`
      break
    default:
      formula = `${bodyInput.formula})`
  }

  return formula
}
