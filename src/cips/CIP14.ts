import IQuestion, { IFuncTable } from '../types/IQuestion'
import { loadQuestions, QuestionScore } from '../types/CIP'

const evaluateYN = (question: IQuestion): QuestionScore => {
    const maxScore = 3 * (question?.vrf ? question.vrf : 3)
  
    const { alternatives } = question
    const response = alternatives[0].value
    const score = response == true ? 0 : maxScore
  
    return {
      maxScore,
      score,
    }
  }

  const cip2funcs: IFuncTable = [
    {
      keys: [0,1,2,3,4],
      func: evaluateYN,
    },
  ]
  
  const cip14 = async () => await loadQuestions(14, cip2funcs)
  export default cip14