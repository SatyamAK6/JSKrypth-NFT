async function main() {
    const JSKrypth = await ethers.getContractFactory("JSKrypth")

    // Start deployment, returning a promise that resolves to a contract object
    const jsKrypth = await JSKrypth.deploy()
    console.log("Contract deployed to address:", jsKrypth.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
