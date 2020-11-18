import * as core from '@actions/core'

export function greet(name: string) {
    return `Hello ${name}`
}

const nameInput = core.getInput("name")

if (nameInput === "fail")
    throw new Error("failing")
else
    core.info(greet(nameInput))
