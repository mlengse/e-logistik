export default `
  type Drugs {
    id: String!
    nama: String
    kelas: String
    satuan: String
    kodegf: String
    generik: Int
    injeksi: Int
    antibiotik: Int
    psikotropika: Int
    aktif: Int!
  }
  type Recipes {
    id: Int!
    visit_id: Int!
    drug_id: String!
    jumlah: Float
    dosis: String!
    puyer: Int
  }
  type Visits {
    id: Int!
    patient_id: String!
    tanggal: String!
    nama: String
    alamat: String
  }
  type Query {
  }
  type Mutation {
  }
`;