Promise.resolve()
    .then(a => return a * 5)
    .then(b => return b)
    .then(c => return c)
    .then(d => return d)
    .catch(err => console.log(err))
    .finally(() => {
    //clean up
    clearInterval(varInternal)
    clearTimeout(varTimeout)
    // give a final notification to user
})
