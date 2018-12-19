const REQUIRED_SUPPORTERS = 50000

const getHtml = (forslag) => {
  const html = `<li>${forslag.title}<br/>${forslag.votes}${forslag.votes < REQUIRED_SUPPORTERS ? ` - Mangler ${REQUIRED_SUPPORTERS-forslag.votes} støtter` : ''}</li>`

  return html
}

module.exports = { getHtml }