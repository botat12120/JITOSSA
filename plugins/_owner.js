function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['owner']
handler.tags = ['owner']
handler.command = ['owner', 'المطور', 'مطور', 'dueño', 'Gowner'] 

export default handler
