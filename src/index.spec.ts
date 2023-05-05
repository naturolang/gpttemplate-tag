import { gpttemplate } from './index'

describe('gpt', () => {
    test('SHOULD create gpt with no [prompt] arguments', async () => {
        const got = await gpttemplate`It was pizza day at work, and Megan was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground.`
        console.log(got)
    }, 6000)
    test('SHOULD create gpt with one [prompt] arguments', async () => {
        const got = await gpttemplate`It was pizza day at work, and ${'respond with a random name for a person'} was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground.`
        console.log(got)
    }, 6000)
    test('SHOULD create gpt with multiple [prompt] arguments', async () => {
        const got = await gpttemplate`It was pizza day at ${'respond with a random name for a place'}, and ${'respond with a random name for a person'} was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground.`
        console.log(got)
    }, 6000)
})