import { DangerDSLType } from "danger";
import { SanityCheckRule } from "../classes/Rule";

export const checkCorrectBranch = new SanityCheckRule(
  async (danger: DangerDSLType) => {
    console.log(danger.github.pr.base.ref)
    return danger.git.base === 'development'
  },
  'The target branch is not `development`. Are you sure you are targeting the correct branch?'
)