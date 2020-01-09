const { Database } = require('arangojs')

module.exports = class Arango extends Database {
  constructor({ host, port, database, dbUsername, dbPassword }){
    super({
      url: `http://${dbUsername}:${dbPassword}@${host}:${port}`
    })
    this.database = database
    this.test = false
    this.testColl = false
  }

  async testDb () {
    if(!this.test) {
      if ((await this.listDatabases()).indexOf(this.database) == -1) {
        await this.createDatabase(this.database)
        console.log("Database created successfully: ", this.database);
      }
      this.useDatabase(this.database);
      console.log("Database connected successfully: ", this.database);
      this.testDb = true
    }
  }

  async testing (collname) {
    if(!this.testColl) {
      await this.testDb()
      if (((await this.collections(true)).map(({name}) => name)).indexOf(collname) == -1) {
        await this.collection(collname).create();
        console.log("Collection created successfully: ", collname);
      } 
      this.testColl = true
    }
  };

  async upsert (collname, doc) {
    await this.testing(collname);
    console.log(doc._key)
    if(doc._key) {
      return (await (await this.query({
        query:
          "UPSERT { _key : @_key } INSERT @doc UPDATE @doc IN @@collname RETURN { OLD, NEW } ",
        bindVars: {
          "@collname": collname,
          _key: doc._key,
          doc: doc
        }
      })).all())[0].NEW
    } else {
      let collection = this.collection(collname)
      let n = await collection.save(doc)
      console.log(n)
      return n
    }
    // return await cursor.all()[0]
  };

  async queryCol (collname, aq) {
    await this.testing(collname);
    return await (await this.query(aq)).all();
  };
      
}