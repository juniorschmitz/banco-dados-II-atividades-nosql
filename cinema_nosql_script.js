use cinema_db

db.filmes.insertMany([
  {
    _id: ObjectId(),
    titulo: "Duna: Parte Dois",
    genero: ["Ficção Científica", "Aventura"],
    duracao_min: 166,
    classificacao: "14 anos",
    diretor: "Denis Villeneuve",
    elenco: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    em_cartaz: true
  },
  {
    _id: ObjectId(),
    titulo: "Garfield: Fora de Casa",
    genero: ["Animação", "Comédia"],
    duracao_min: 101,
    classificacao: "Livre",
    diretor: "Mark Dindal",
    elenco: ["Chris Pratt", "Samuel L. Jackson"],
    em_cartaz: true
  }
])

db.salas.insertMany([
  {
    _id: ObjectId(),
    numero: 1,
    capacidade: 150,
    tipo: "3D"
  },
  {
    _id: ObjectId(),
    numero: 2,
    capacidade: 100,
    tipo: "2D"
  }
])

db.sessoes.insertMany([
  {
    _id: ObjectId(),
    filme_id: db.filmes.findOne({ titulo: "Duna: Parte Dois" })._id,
    sala_id: db.salas.findOne({ numero: 1 })._id,
    data: ISODate("2025-06-20T18:00:00Z"),
    preco: 35.00
  },
  {
    _id: ObjectId(),
    filme_id: db.filmes.findOne({ titulo: "Garfield: Fora de Casa" })._id,
    sala_id: db.salas.findOne({ numero: 2 })._id,
    data: ISODate("2025-06-20T15:00:00Z"),
    preco: 25.00
  }
])

db.usuarios.insertMany([
  {
    _id: ObjectId(),
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    telefone: "11999999999"
  },
  {
    _id: ObjectId(),
    nome: "Carlos Oliveira",
    email: "carlos.oliveira@email.com",
    telefone: "11888888888"
  }
])

db.ingressos.insertMany([
  {
    _id: ObjectId(),
    sessao_id: db.sessoes.findOne({ preco: 35.00 })._id,
    usuario_id: db.usuarios.findOne({ nome: "Ana Souza" })._id,
    assento: "A10",
    data_compra: ISODate("2025-06-18T13:45:00Z"),
    valor_pago: 35.00
  },
  {
    _id: ObjectId(),
    sessao_id: db.sessoes.findOne({ preco: 25.00 })._id,
    usuario_id: db.usuarios.findOne({ nome: "Carlos Oliveira" })._id,
    assento: "B12",
    data_compra: ISODate("2025-06-18T14:00:00Z"),
    valor_pago: 25.00
  }
])
