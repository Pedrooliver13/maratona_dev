const db = require('../../config/db')

module.exports = {
    all(callback){
        db.query(`
        SELECT *
        FROM doners
        ORDER BY doners.id DESC
        LIMIT 4
        ` , (err , results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    },
    create(data, callback){
        
        const query = `
        INSERT INTO doners (
            name,
            email,
            blood
        ) VALUES ($1, $2, $3)
        RETURNING id
        `
        const values = [
            data.name,
            data.email,
            data.blood
        ]

        db.query(query , values , (err ,results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    }
}