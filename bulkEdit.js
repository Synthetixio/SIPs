const { batch } = require('frontmatter-file-batcher')

;(() => {
  batch('content/**/*.md', Infinity, async ({ goods, actions }) => {
    console.log(goods)
    const { update, save } = actions

    const newData = update({
      data: { type: { $set: 'Governance' } },
    })

    await save(newData)
    console.log('Just saved:', goods.path)
  })
})()
