const { batch } = require('frontmatter-file-batcher')

// A sane limit of 100 concurrent operations.
;(() => {
  batch('content/**/*.md', Infinity, async ({ goods, actions }) => {
    console.log(goods)
    const { update, save } = actions

    // Update the author’s name with the provided immutability-helper. The update
    // function is prepopulated with the data (`goods`) from the post.
    const newData = update({
      data: { type: { $set: 'Governance' } },
    })

    // At the end you can save your post with the new data.
    await save(newData)

    console.log('Just saved:', goods.path)
  })
})()
