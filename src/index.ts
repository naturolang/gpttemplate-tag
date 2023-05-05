import { gpt } from 'gpt-tag'

export async function gpttemplate(
  literals: string | readonly string[],
  ...args: any[]
): Promise<string> {
  if (typeof literals === 'string') {
    literals = [literals];
  }
  return (await Promise.all(args.map(async (arg, i) => ([i, ((arg && arg.kind === 'Document') ? await gpt`${arg.loc.source.body}` : await gpt`${arg}`) + literals[i + 1]])))).sort((a, b) => (a[0] as number) - (b[0] as number)).reduce((pv, cv) => [...pv, cv[1]], [literals[0]]).join('')
}
